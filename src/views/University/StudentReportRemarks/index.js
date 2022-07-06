import { useEffect, useState } from 'react';
import StudentReportAPI from 'src/api/StudentReport';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations"

const StudentReportRemarks = () => {
  const [remarksList, setRemarksList] = useState([]);
  const [remark, setRemark] = useState({});
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState("create");

  const callData = async () => {
    setLoading(true);

    await StudentReportAPI.getAllRemarks()
      .then(res => {
        console.log("Called Data", res.data);
        setRemarksList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
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
      type: "text",
      value: remark.student,
      disabled: true
    },
    {
      title: "Star Rating",
      name: "rating",
      type: "rating",
      value: remark.rating,
      disabled: true
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      value: remark.type,
      disabled: true
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

    action === "create" ?
      onDataCreate()
      : action === "update" ?
        onDataUpdate()
        : action === "delete" &&
        onDataDelete()
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

  const onDataCreate = () => {
    setRemarksList(current => [...current, { ...remark, id: current.length }]);
    setRemark({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataUpdate = () => {
    setRemarksList(current => [...current?.filter(rep => rep.id !== remark.id), remark]);
    setRemark({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setRemarksList(current => [...current?.filter(rep => rep.id !== remark.id)]);
    setRemark({});
    setAction("create");
    console.log('Form Data Deleted');
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
      selector: row => row.accepted ? "Yes" : "No",
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
