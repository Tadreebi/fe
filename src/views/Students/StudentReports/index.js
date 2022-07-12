import { useEffect, useState } from 'react';
import StudentReportAPI from 'src/api/StudentReport';
import { students } from 'src/reusables/data';
import { dateRangeFormatter } from 'src/reusables/functions';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";

const StudentReports = () => {
  const [reportsList, setReportsList] = useState([]);
  const [report, setReport] = useState({});
  const [reportTypes, setReportTypes] = useState([]);
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);
  const [reportSkills, setReportSkills] = useState([]);

  const callData = async () => {
    setLoading(true);

    await StudentReportAPI.getAllReports()
      .then(res => {
        console.log("Called Reports Data", res.data);
        setReportsList(res.data);
      })
      .catch(e => {
        console.log("Called Reports Error", e);
      })
      .finally(() => {
        setLoading(false);
      });

    setLoading(true);

    await StudentReportAPI.getAllRemarks()
      .then(res => {
        console.log("Called Report Remarks Data", res.data);
        setReportsList(current => current.map(item => ({ ...res.data.find(remark => remark.report === item.id), ...item })));
      })
      .catch(e => {
        console.log("Called Report Remarks Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callDependantListsData = async () => {
    await StudentReportAPI.getAllSkills()
      .then(res => {
        console.log("Report Skills Called Data", res.data);
        setReportSkills(res.data)
      })
      .catch(e => {
        console.log("Report Skills Call error", e);
      });
  };

  const callListsData = async () => {
    await StudentReportAPI.getAllReportTypes()
      .then(res => {
        console.log("Called Types Data", res.data);
        setReportTypes(res.data)
      })
      .catch(e => {
        console.log("Called Types error", e);
      });
  };

  useEffect(() => {
    callData();
    callListsData();
    callDependantListsData();
  }, []);

  const props = [
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
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      required: true,
      value: report.type,
      onChange: e => setReport(current => ({ ...current, type: e.target.value })),
      options: reportTypes?.map(report => ({ title: report.title, value: report.id }))
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
      title: "Earned Skills",
      name: "skills",
      type: "list",
      value: reportSkills,
      onChange: setReportSkills,
      props: [
        {
          title: "Title",
          name: "title",
          type: "text",
          required: true
        }, {
          title: "Details",
          name: "details",
          type: "textarea",
        }, {
          title: "Include in Profile",
          name: "profile",
          type: "switch",
        }
      ],
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
        console.log("Report Data Created Successfully");
        callData();
        setReport({});
        setAction("create");
      })
      .catch(e => {
        console.log("Report Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await StudentReportAPI.updateReport(report.id, report)
      .then(res => {
        console.log("Report Data Updated Successfully");
        callData();
        setReport({});
        setAction("create");
      })
      .catch(e => {
        console.log("Report Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await StudentReportAPI.deleteReport(report.id)
      .then(res => {
        console.log("Report Data Deleted Successfully");
        setReport({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Report Data Delete Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { statisticsData, chartsData } = VisualRepresentations(reportsList);

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Type",
      selector: row => reportTypes.find(type => type.id === row.type)?.title,
      sortable: true
    },
    {
      name: "Period Cover By Report",
      selector: row => `${dateRangeFormatter(row.startDate, "start", row.endDate)} - ${dateRangeFormatter(row.endDate)}`,
      sortable: true
    },
    {
      name: "Remarks",
      selector: row => row.remarks || "---",
      sortable: true
    },
    {
      name: "Accepted By Supervisor",
      selector: row => row.accepted ? "Yes" : row.remarks ? "No" : "Not Yet",
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
        formInputs={props}
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
