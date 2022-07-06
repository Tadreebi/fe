import { useEffect, useState } from 'react';
import StudentApplicationAPI from 'src/api/StudentApplication';
import TemplatePage from '../..';
import OpportunityPostAPI from 'src/api/OpportunityPost';
import VisualRepresentations from "./visualRepresentations";


const StudentApplication = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [internships, setInternships] = useState([]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Called Internship Posts Data", res.data);
        setApplicationsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // API Call Needed
  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Raghad" },
  ];

  const callListsData = async () => {
    await OpportunityPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Data", res.data);
        setInternships(res.data);
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
    callListsData();
  }, []);

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: application.student,
      onChange: e => setApplication(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Internship Oppertunity",
      name: "internship",
      type: "select",
      required: true,
      double: true,
      value: application.internship,
      onChange: e => setApplication(current => ({ ...current, internship: e.target.value })),
      options: internships?.map(internship => ({ title: internship.id, value: internship.id }))
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

    action === "create" ? (
      onDataCreate()
    ) : action === "update" ? (
      onDataUpdate()
    ) : action === "delete" && (
      onDataDelete()
    )
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

  const { statisticsData, chartsData } = VisualRepresentations(applicationsList);

  const tableColumns = [
    {
      name: "Internship",
      selector: row => internships.find(internship => internship.id === row.internship)?.id,
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
