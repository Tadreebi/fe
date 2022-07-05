import { useEffect, useState } from 'react';
import StudentApplicationAPI from 'src/api/StudentApplication';
import TemplatePage from '../..';


const StudentApplication = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentApplicationAPI.getAllApplications()
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
    { id: 2, name: "Raghad" },
  ];

  const internships = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
  ];

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: application.student,
      onChange: e => setApplication(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Internship Oppertunity",
      name: "internship",
      type: "select",
      required: true,
      double: true,
      value: application.internship,
      onChange: e => setApplication(current => ({ ...current, internship: e.target.value })),
      options: internships.map(internship => ({ title: internship.name, value: internship.id }))
    },
    {
      title: "Preferable Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: application.type,
      onChange: e => setApplication(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ]
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
        { title: "On Site", value: "On Site" },
      ]
    },
    {
      title: "Expected Salary",
      name: "expected_salary",
      type: "number",
      required: true,
      value: application.expected_salary || 0,
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
      title: "Resume Link",
      name: "resume",
      type: "url",
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

    await StudentApplicationAPI.createApplication(application)
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

    await StudentApplicationAPI.updateApplication(application.id, application)
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

    await StudentApplicationAPI.deleteApplication(application.id)
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
      name: "Internship",
      selector: row => internships.find(internship => internship.id === row.internship)?.name,
      sortable: true
    },
    {
      name: "Cover Letter",
      selector: row => row.coverletter,
    },
    {
      name: "Resume Link",
      selector: row => <a href={row.resume} target="_blank">Check Here</a>,
      sortable: true
    },

  ];
  return (
    <>
      <TemplatePage
        pageTitle={"Student Applications"}
        pageDescrbition={"Students to apply for specific internships posted by companies"}
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

export default StudentApplication
