import { useState } from 'react';
import TemplatePage from '../../templatePage';

const StudentReportRemarks = () => {
  const [remarksList, setRemarksList] = useState([]);
  const [remark, setRemark] = useState({});
  const [action, setAction] = useState("create");

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
      required: true,
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
    setRemarksList(current => [...current.filter(rep => rep.id !== remark.id), remark]);
    setRemark({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setRemarksList(current => [...current.filter(rep => rep.id !== remark.id)]);
    setRemark({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  const statisticsData = [
    {
      title: "Submitted Reports",
      number: remarksList.length,
      chart: {
        type: "bar",
        data: {
          "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
          "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
          "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: remarksList.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
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
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
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
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
    {
      title: "Submitted Reports",
      type: "doughnut",
      data: {
        "Monthly Report": remarksList.filter(rep => rep.type === "Monthly Report")?.length,
        "Weekly Report": remarksList.filter(rep => rep.type === "Weekly Report")?.length,
        "Final Report": remarksList.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Pending Reports": remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted Reports": remarksList.filter(rep => rep.accepted === true)?.length,
        "Rejected Reports": remarksList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Pending Reports",
          color: "warning",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Reports",
          color: "success",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Reports",
          color: "danger",
          data: remarksList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: remarksList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
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
        pageTitle={"Student Report Remarks"}
        pageDescrbition={"For university supervisor to remark submitted student reports"}
        statisticsData={statisticsData}
        chartsData={chartsData}
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
