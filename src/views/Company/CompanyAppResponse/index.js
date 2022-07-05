import { useEffect, useState } from 'react';
import CompanyAppResponseAPI from 'src/api/CompanyAppResponse';
import TemplatePage from '../../';


const StudentApplicationRes = () => {
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
    { id: 2, name: "Suhaib" },
  ];

  const applications = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
  ];


  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    {
      title: "Student Application",
      name: "applications",
      type: "text",
      fullwidth: true,
      required: true,
      value: application.applications,
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
      value: application.accepted,
      onChange: e => setApplication(current => ({ ...current, accepted: e.target.checked }))
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
    setApplication({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setApplication(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await CompanyAppResponseAPI.createAppResponse(application)
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

  const onDataUpdate = async () => {
    setLoading(true);

    await CompanyAppResponseAPI.updateAppResponse(application.id, application)
      .then(res => {
        console.log("Data Updated Successfully");
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

  const onDataDelete = async () => {
    setLoading(true);

    await CompanyAppResponseAPI.deleteAppResponse(application.id)
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
        pageTitle={"Student Application Responses"}
        pageDescrbition={"Companies to view & respond to student applications for offered internships"}
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
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentApplicationRes
