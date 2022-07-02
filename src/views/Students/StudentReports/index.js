import { useState } from 'react';
import { Col, Row } from 'src/components/Root/Grid';
import TemplatePage from '../../templatePage';
import reportsDemoData from './demoData';

const StudentReports = () => {
  const [reportsList, setReportsList] = useState([...reportsDemoData]);
  const [report, setReport] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const inputs = [
    {
      title: "Title",
      name: "title", // should match the property name in the backend model
      type: "text",
      placeholder: "Report Title",
      required: true,
      value: report.title, // should match the property name in the backend model
      onChange: e => setReport(current => ({ ...current, title: e.target.value })) // should match the property name in the backend model
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
      title: "Star Rating",
      name: "rating",
      type: "rating",
      required: true,
      value: report.rating,
      onChange: e => setReport(current => ({ ...current, rating: e }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      required: true,
      value: report.type,
      onChange: e => setReport(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Weekly Report", value: "Weekly" },
        { title: "Monthly Report", value: "Monthly" },
        { title: "Final Report", value: "Final" }
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
      value: report.endDate,
      onChange: e => setReport(current => ({ ...current, endDate: e.target.value }))
    },
    {
      title: "Report Introduction",
      name: "intro",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: report.intro,
      onChange: e => setReport(current => ({ ...current, intro: e.target.value }))
    },
    {
      title: "Report Conclusion",
      name: "conclusion",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: report.conclusion,
      onChange: e => setReport(current => ({ ...current, conclusion: e.target.value }))
    },
    {
      title: "Report Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: report.remarks,
      onChange: e => setReport(current => ({ ...current, remarks: e.target.value }))
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      required: true,
      value: report.accepted,
      onChange: e => setReport(current => ({ ...current, accepted: e.target.checked }))
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ?
      onDataCreate()
      : action === "update" ?
        onDataEdit()
        : action === "delete" &&
        onDataDelete()
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

  const onDataCreate = () => {
    setReportsList(current => [...current, { ...report, id: current.length }]);
    setReport({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setReportsList(current => [...current.filter(rep => rep.id !== report.id), report]);
    setReport({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setReportsList(current => [...current.filter(rep => rep.id !== report.id)]);
    setReport({});
    setAction("create");
    console.log('Form Data Deleted');
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
        pageDescrbition={"For student to submit periodical & final reports to university supervisor"}
        statisticsData={statisticsData} // New
        chartsData={chartsData} // New
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Reports List"}
        tableColumns={tableColumns} // New
        tableRowDetails={true} // New
        tableData={reportsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentReports
