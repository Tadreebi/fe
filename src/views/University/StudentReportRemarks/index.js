import { useEffect, useState } from 'react';
import StudentReportAPI from 'src/api/StudentReport';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations"
import { dateRangeFormatter } from 'src/reusables/functions';

const StudentReportRemarks = () => {
  const [remarksList, setRemarksList] = useState([]);
  const [reportTypes, setReportTypes] = useState([]);
  const [remark, setRemark] = useState({});
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("create");

  const callData = async () => {
    setLoading(true);

    await StudentReportAPI.getAllReports()
      .then(res => {
        console.log("Called Data", res.data);
        setRemarksList(res.data.map(item => ({ ...item, id: null, reportId: item.id })));
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });

    await StudentReportAPI.getAllRemarks()
      .then(res => {
        console.log("Called Data", res.data);
        setRemarksList(current => current.map(item => ({ ...item, report: item.reportId, ...res.data?.find(rep => rep.report === item.reportId) })));
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await StudentReportAPI.getAllReportTypes()
      .then(res => {
        console.log("Called types Data", res.data);
        setReportTypes(res.data)
      })
      .catch(e => {
        console.log(e)
      });
  };

  useEffect(() => {
    callData();
    callListsData();
  }, []);

  // API Call Needed
  const students = [
    { id: 1, name: "Moayad" },
    { id: 2, name: "Raghad" },
  ];

  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Report Title",
      value: remark.title,
      disabled: true
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      value: remark.student,
      disabled: true,
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      value: remark.type,
      disabled: true,
      options: reportTypes?.map(report => ({ title: report.title, value: report.id }))
    },
    {
      title: "Start Date of Report",
      name: "startDate",
      type: "date",
      value: remark.startDate,
      disabled: true
    },
    {
      title: "End Date of Report",
      name: "endDate",
      type: "date",
      double: true,
      value: remark.endDate,
      disabled: true
    },
    {
      title: "Report Introduction",
      name: "intro",
      type: "textarea",
      fullwidth: true,
      value: remark.intro,
      disabled: true
    },
    {
      title: "Report Conclusion",
      name: "conclusion",
      type: "textarea",
      fullwidth: true,
      value: remark.conclusion,
      disabled: true
    },
    {
      title: "Report Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: remark.remarks,
      onChange: e => setRemark(current => ({ ...current, remarks: e.target.value }))
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      value: remark.accepted,
      onChange: e => setRemark(current => ({ ...current, accepted: e.target.checked }))
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ? (
      onDataCreate()
    ) : action === "update" && remark.id !== null ? (
      onDataUpdate()
    ) : action === "update" ? (
      onDataCreate()
    ) : action === "delete" && (
      onDataDelete()
    )
  };

  const onFormReset = () => {
    setRemark({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setRemark(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await StudentReportAPI.createRemark(remark)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setRemark({});
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

    await StudentReportAPI.updateRemark(remark.id, remark)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setRemark({});
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

    await StudentReportAPI.deleteRemark(remark.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setRemark({});
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

  const { statisticsData, chartsData } = VisualRepresentations(remarksList);

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
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
      selector: row => row.remarks,
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
        pageTitle={"Student Report Remarks"}
        pageDescrbition={"University supervisors to remark submitted student reports"}
        statisticsData={statisticsData}
        chartsData={chartsData}
        loading={loading}
        formTitle={"CRUD Remarks"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Report Remarks List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={remarksList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentReportRemarks
