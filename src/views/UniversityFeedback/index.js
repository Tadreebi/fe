import { useState } from 'react'
import TemplatePage from '../templatePage'


const StudentReports = () => {
  const [reports, setReports] = useState([]);
  const [report, setReport] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const Rating = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: report.student,
      onChange: e => setReport(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Date of Feedback",
      name: "Date",
      type: "date",
      required: true,
      value: report.startDate,
      onChange: e => setReport(current => ({ ...current, startDate: e.target.value }))
    },
    {
      title: "Title",
      name: "title", // should match the property name in the backend model
      type: "text",
      placeholder: "Title of the Feedback",
      required: true,
      value: report.title, // should match the property name in the backend model
      onChange: e => setReport(current => ({ ...current, title: e.target.value })) // should match the property name in the backend model
    },
    {
      title: "Feedback",
      name: "Feedback",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: report.intro,
      onChange: e => setReport(current => ({ ...current, intro: e.target.value }))
    },
    {
      title: "Rating",
      name: "rating",
      type: "select",
      double: true,
      required: true,
      value: report.rate,
      onChange: e => setReport(current => ({ ...current, rate: e.target.value })),
      options: Rating.map(rate => ({ title: rate.name, value: rate.id }))
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
    setReports(current => [...current, { ...report, id: current.length }]);
    setReport({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setReports(current => [...current.filter(rep => rep.id !== report.id), report]);
    setReport({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setReports(current => [...current.filter(rep => rep.id !== report.id)]);
    setReport({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"University Feedback"}
        pageDescrbition={"For univesity to submit periodical & final reports to teh student"}
        formTitle={"CRUD Reports"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"University Feedback List"}
        tableData={reports}
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
