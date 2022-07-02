import { useState } from 'react';
import TemplatePage from '../../templatePage';
import reportsDemoData from './demoData';

const CompanyReports = () => {
  const [reportsList, setReportsList] = useState([...reportsDemoData]);
  const [report, setReport] = useState({});
  const [action, setAction] = useState("create");

  const company = [
    { id: 1, name: "Socium" },
    { id: 2, name: "ASAC'" },
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
      double: true,
      required: true,
      value: report.student,
      onChange: e => setReport(current => ({ ...current, student: e.target.value })),
      // options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "company",
      name: "company",
      type: "textarea",
      double: true,
      required: true,
      value: report.student,
      onChange: e => setReport(current => ({ ...current, company: e.target.value })),
      options: company.map(student => ({ title: company.name, value: company.id }))
    },
    {
      title: "Report Type",
      name: "type",
      type: "select",
      required: true,
      value: report.type,
      onChange: e => setReport(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Periodical Report", value: "Periodical" },
        { title: "Complain Report", value: "Complain" },
        { title: "Final Report", value: "Final" }
      ]
    },

    {
      title: " Date of Report",
      name: "date",
      type: "date",
      required: true,
      value: report.date,
      onChange: e => setReport(current => ({ ...current, date: e.target.value }))
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
      title: "Attendance",
      name: "attendance",
      type: "number",
      fullwidth: true,
      required: true,
      value: report.accepted,
      onChange: e => setReport(current => ({ ...current, attendance: e.target.checked }))
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
      title: "Student Reports",
      number: reportsList.length,
      chart: {
        type: "bar",
        data: {
          "Periodical Reports": reportsList.filter(rep => !rep.remarks?.length && rep.periodical !== true)?.length,
          "Complain Reports": reportsList.filter(rep => rep.Complain === true)?.length,
          "Final Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
        },
        fill: true
      }
    },
    {
      title: "Types of Reports Submitted",
      number: reportsList.map(rep => rep.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Complain Report": reportsList.filter(rep => rep.type === "Complain Report")?.length,
          "Periodical Report": reportsList.filter(rep => rep.type === "Periodical Report")?.length,
          "Final Report": reportsList.filter(rep => rep.type === "Final Report")?.length,
        },
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
          title: "Final Reports",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Periodical Reports",
          color: "success",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Complain Reports",
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
          title: "Complain Reports",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Periodical Reports",
          color: "success",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Complain Reports",
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
        "Complain Report": reportsList.filter(rep => rep.type === "Complain Report")?.length,
        "Periodical Report": reportsList.filter(rep => rep.type === "Periodical Report")?.length,
        "Final Report": reportsList.filter(rep => rep.type === "Final Report")?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "pie",
      data: {
        "Periodical Reports": reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Final Reports": reportsList.filter(rep => rep.accepted === true)?.length,
        "Complain Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "polar",
      data: {
        "Final Reports": reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Periodical Reports": reportsList.filter(rep => rep.accepted === true)?.length,
        "Complain Reports": reportsList.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted Reports",
      type: "radar",
      data: [
        {
          title: "Attendance Report",
          color: "warning",
          data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
            ...final, [student]: reportsList.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        // {
        //   title: "Attendance Report",
        //   color: "success",
        //   data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
        //     ...final, [student]: reportsList.filter(rep => rep.accepted === true && rep.student === student)?.length,
        //   }), {}),
        // },
        // {
        //   title: "Rejected Reports",
        //   color: "danger",
        //   data: reportsList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], []).reduce((final, student) => ({
        //     ...final, [student]: reportsList.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
        //   }), {}),
        // }
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
      name: "Report Type",
      selector: row => row.type,
      sortable: true
    },
    {
      name: "Student Attendance",
      selector: row => `${row.attendance}%`,
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Company Reports"}
        pageDescrbition={"For company to submit periodical & final reports to university supervisor"}
        statisticsData={statisticsData} // New
        chartsData={chartsData} // New
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Company Reports List"}
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

export default CompanyReports
