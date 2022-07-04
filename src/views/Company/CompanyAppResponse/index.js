import { useEffect, useState } from 'react'
import CompanyAppResponseAPI from 'src/api/CompanyAppResponse';
import applicationData from './applicationData';
import TemplatePage from '../../templatePage'


const StudentApplication = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyAppResponseAPI.getAllAppResponses()
      .then(res => {
        console.log("Called Data", res.data);
        setApplicationsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
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


  useEffect(() => { // Create UseEffect
    callData();
  }, []);

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: application.student,
      disabled: true

    },
    {
      title: "Internship",
      name: "internship",
      type: "select",
      double: true,
      required: true,
      value: application.internship,
      disabled: true

    },
    {
      title: "Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: application.type,
      disabled: true

    },
    {
      title: "Home Full Address",
      name: "homeFullAddress",
      type: "text",
      required: true,
      value: application.homeFullAddress,
      disabled: true
    },
    {
      title: "Preferable Internship Location",
      name: "location",
      type: "select",
      required: true,
      value: application.location,
      disabled: true

    },
    {
      title: "Expected Salary",
      name: "expected_salary",
      type: "number",
      required: true,
      value: application.expected_salary,
      disabled: true
    },
    {
      title: "Cover Letter",
      name: "coverletter",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: application.coverletter,
      disabled: true
    },
    {
      title: "Resume",
      name: "resume",
      type: "file",
      fullwidth: true,
      required: true,
      value: application.resume,
      disabled: true
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: application.remarks,
      onChange: e => setApplication(current => ({ ...current, remarks: e.target.value }))
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      required: true,
      value: application.accepted,
      onChange: e => setApplication(current => ({ ...current, accepted: e.target.checked }))
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

  const onDataCreate = async () => { // Async
    setLoading(true);

    await CompanyAppResponseAPI.createAppResponse(application) // Call the relevant api call
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setApplication({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataEdit = async () => { // Async
    setLoading(true);

    await CompanyAppResponseAPI.updateAppResponse(application.id, application) // Call the relevant api call
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setApplication({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => { // Async
    setLoading(true);

    await CompanyAppResponseAPI.deleteAppResponse(application.id) // Call the relevant api call
      .then(res => {
        console.log("Data Deleted Successfully");
        setApplication({});
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
      data: {
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
      name: "Remarks",
      selector: row => row.remarks,
      sortable: true
    },
    {
      name: "Accepted By Company",
      selector: row => row.accepted ? "True" : "False",
      sortable: true
    }

  ];
  return (
    <>
      <TemplatePage
        pageTitle={"Student Applications"}
        pageDescrbition={"For student to apply for a specific internship posted by the company"}
        loading={loading}
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
