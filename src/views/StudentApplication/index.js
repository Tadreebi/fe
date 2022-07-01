import { useState } from 'react'
import TemplatePage from '../templatePage'
import applicationData from './applicationData';


const StudentApplication = () => {
  const [applicationsList, setApplicationsList] = useState([...applicationData]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];
  const internships = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
    { id: 3, name: "CC" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Google" },
  ];
  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: application.student,
      onChange: e => setApplication(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Internship",
      name: "internship",
      type: "select",
      double: true,
      required: true,
      value: application.internship,
      onChange: e => setApplication(current => ({ ...current, internship: e.target.value })),
      options: internships.map(internship => ({ title: internship.name, value: internship.id }))
    },
    {
      title: "Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: application.type,
      onChange: e => setPost(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ]
    },
    {
      title: "Home Full Address",
      name: "homeFullAddress",
      type: "text",
      required: true,
      value: application.homeFullAddress,
      onChange: e => setApplication(current => ({ ...current, homeFullAddress: e.target.value }))
    },
    {
      title: "Preferable Internship Location",
      name: "location",
      type: "select",
      required: true,
      value: application.location,
      onChange: e => setApplication(current => ({ ...current, location: e.target.value })),
      options: [
        { title: "Remote", value: "Remote" },
        { title: "OnSite", value: "OnSite" },
      ]
    },
    {
      title: "Expected Salary",
      name: "expected_salary",
      type: "number",
      required: true,
      value: application.expected_salary,
      onChange: e => setApplication(current => ({ ...current, expected_salary: e.target.value }))
    },
    {
      title: "Cover Letter",
      name: "coverletter",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: application.coverletter,
      onChange: e => setApplication(current => ({ ...current, coverletter: e.target.value }))
    },
    {
      title: "Resume",
      name: "resume",
      type: "file",
      fullwidth: true,
      required: true,
      value: application.resume,
      onChange: e => setApplication(current => ({ ...current, resume: e.target.value }))
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
    setApplication({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setApplication(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setApplicationsList(current => [...current, { ...application, id: current.length }]);
    setApplication({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setApplicationsList(current => [...current.filter(rep => rep.id !== application.id), application]);
    setApplication({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setApplicationsList(current => [...current.filter(rep => rep.id !== application.id)]);
    setApplication({});
    setAction("create");
    console.log('Form Data Deleted');
  };
  const statisticsData = [
    {
      title: "Internship Type",
      number: applicationsList.map(intern => intern.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Full Time": applicationsList.filter(intern => intern.type === "Full Time")?.length,
          "Part Time": applicationsList.filter(intern => intern.type === "Part Time")?.length,
        },
      }
    },
    {
      title: "Preferable Internship Location",
      number: applicationsList.map(intern => intern.location).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Remote": applicationsList.filter(intern => intern.location === "Remote")?.length,
          "OnSite": applicationsList.filter(intern => intern.location === "OnSite")?.length,
        },
      }
    },
    {
      title: "Expected Salary",
      number: applicationsList.map(intern => intern.expected_salary).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Less than 100": applicationsList.filter(intern => intern.expected_salary < 100)?.length,
          "Greater than 100": applicationsList.filter(intern => intern.expected_salary > 100)?.length,
        },
      }
    },
  ]
  const chartsData = [
    {
      title: "Internship Type",
      type: "doughnut",
      data: {
        "Full Time": applicationsList.filter(intern => intern.type === "Full Time")?.length,
        "Part Time": applicationsList.filter(intern => intern.type === "Part Time")?.length,
      },
    },
    {
      title: "Preferable Internship Location",
      type: "doughnut",
      data: {
        "Remote": applicationsList.filter(intern => intern.location === "Remote")?.length,
        "OnSite": applicationsList.filter(intern => intern.location === "OnSite")?.length,
      },
    },
    {
      title: "Expected Salary",
      type: "polar",
      data:{
        "Less than 100": applicationsList.filter(intern => intern.expected_salary < 100)?.length,
        "Greater than 100": applicationsList.filter(intern => intern.expected_salary > 100)?.length,
      },
    },
  ]

  const tableColumns = [
    {
      name: "Student",
      selector: row => row.student,
      sortable: true
    },
    {
      name: "Internship",
      selector: row => row.internship,
      sortable: true
    },
    {
      name: "Preferable Internship Type",
      selector: row => row.location,
      sortable: true
    },
    {
      name: "Internship Hours",
      selector: row => row.type,
      sortable: true
    },

  ];
  return (
    <>
      <TemplatePage
        pageTitle={"Student Applications"}
        pageDescrbition={"For student to apply for a specific internship posted by the company"}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formTitle={"CRUD Applications"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Applications List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={applicationsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentApplication
