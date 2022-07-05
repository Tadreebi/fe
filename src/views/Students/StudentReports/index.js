import { useEffect, useState } from 'react';
import StudentReportAPI from 'src/api/StudentReport';
import TemplatePage from '../..';

const StudentReports = () => {
  const [reportsList, setReportsList] = useState([]);
  const [report, setReport] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentReportAPI.getAllReports()
      .then(res => {
        console.log("Called Data", res.data);
        setReportsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const students = [
    { id: 1, name: "Moayad" },
    { id: 2, name: "Suhaib" },
  ];

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      required: true,
      value: report.title,
      onChange: e => setReport(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: report.student,
      onChange: e => setReport(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      required: true,
      value: report.type,
      onChange: e => setReport(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Weekly Report", value: 1 },
        { title: "Monthly Report", value: 2 },
      ]
    },
    {
      title: "Start Date of Report",
      name: "startDate",
      type: "date",
      required: true,
      value: report.startDate,
      onChange: e => setReport(current => ({ ...current, startDate: e.target.value }))
    },
    {
      title: "End Date of Report",
      name: "endDate",
      type: "date",
      required: true,
      double: true,
      value: report.endDate,
      onChange: e => setReport(current => ({ ...current, endDate: e.target.value }))
    },
    {
      title: "Report Introduction",
      name: "intro",
      type: "textarea",
      fullwidth: true,
      value: report.intro,
      onChange: e => setReport(current => ({ ...current, intro: e.target.value }))
    },
    {
      title: "Report Conclusion",
      name: "conclusion",
      type: "textarea",
      fullwidth: true,
      value: report.conclusion,
      onChange: e => setReport(current => ({ ...current, conclusion: e.target.value }))
    },
    {
      title: "Report Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      value: report.remarks,
      disabled: true
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      value: report.accepted,
      disabled: true
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ? (
      onDataCreate()
    ) : action === "update" ? (
      onDataUpdate()
    ) : action === "delete" && (
      onDataDelete()
    );
  };

  const onFormReset = () => {
    setReport({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setReport(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await StudentReportAPI.createReport(report)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setReport({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await StudentReportAPI.updateReport(report.id, report)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setReport({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await StudentReportAPI.deleteReport(report.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setReport({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const statisticsData = [
    {
      title: "Submitted Reports",
      number: reportsList.length,
      chart: {
        type: "bar",
        data: {
          "Pending Reports": reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
          "Accepted Reports": reportsList.filter(rep => rep.accepted === true)?.length,
          "Rejected Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: reportsList.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "progress",
        value: 25,
        text: "25%",
        color: "success"
      }
    },
    {
      title: "Users",
      number: "26",
      chart: {
        type: "line",
        data: {
          "Label 1": 70,
          "Label 2": 60,
          "Label 3": 40,
          "Label 4": 50
        },
      }
    },
    {
      title: "Users",
      number: "26",
    }
  ];

  const chartsData = [
    {
      title: "Submitted Reports",
      type: "bar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "line",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "doughnut",
      data: {
        "Monthly Report": reportsList.filter(rep => rep.type === "Monthly Report")?.length,
        "Weekly Report": reportsList.filter(rep => rep.type === "Weekly Report")?.length,
        "Final Report": reportsList.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Pending Reports": reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": reportsList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Pending Reports": reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": reportsList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
  ];

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Student",
      selector: row => row.student,
      sortable: true
    },
    {
      name: "Period Cover By Report",
      selector: row => `${new Date(row.startDate).toLocaleDateString('en-GB')} to ${new Date(row.endDate).toLocaleDateString('en-GB')}`,
      sortable: true
    },
    {
      name: "Accepted By Supervisor",
      selector: row => row.accepted ? "True" : "False",
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Student Reports"}
        pageDescrbition={"Students to submit periodical & final reports to university supervisor"}
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formTitle={"CRUD Reports"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Reports List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={reportsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentReports
