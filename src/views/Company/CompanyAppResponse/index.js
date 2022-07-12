import { useEffect, useState } from 'react';
import OpportunityPostAPI from 'src/api/OpportunityPost';
import StudentApplicationAPI from 'src/api/StudentApplication';
import { students } from 'src/reusables/data';
import TemplatePage from '../../';
import VisualRepresentations from "./visualRepresentations";


const StudentApplicationRes = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [internships, setInternships] = useState([]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Called Applications Data", res.data);
        setApplicationsList(res.data.map(item => ({ ...item, application: item.id })));
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });

    setLoading(true);

    await StudentApplicationAPI.getAllResponses()
      .then(res => {
        console.log("Called Responses Data", res.data);
        setApplicationsList(current => current.map(item => ({ ...item, ...res.data?.find(rep => rep.application === item.application) })));
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await OpportunityPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Internship Posts Data", res.data);
        setInternships(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const applications = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
  ];

  useEffect(() => {
    callData();
    callListsData();
  }, []);

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      value: application.student,
      disabled: true,
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Internship Oppertunity",
      name: "internship",
      type: "select",
      double: true,
      value: application.internship,
      disabled: true,
      options: internships?.map(internship => ({ title: internship.position, value: internship.id }))
    },
    {
      title: "Preferable Internship Hours",
      name: "type",
      type: "select",
      value: application.type,
      disabled: true,
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ]
    },
    {
      title: "Preferable Internship Location",
      name: "location",
      type: "select",
      value: application.location,
      disabled: true,
      options: [
        { title: "Remote", value: "Remote" },
        { title: "On Site", value: "On Site" },
      ]
    },
    {
      title: "Expected Salary",
      name: "expected_salary",
      type: "number",
      value: application.expected_salary || 0,
      disabled: true,
    },
    {
      title: "Cover Letter",
      name: "coverletter",
      type: "textarea",
      fullwidth: true,
      value: application.coverletter,
      disabled: true,
    },
    {
      title: "Resume Link",
      name: "resume",
      type: "url",
      fullwidth: true,
      value: application.resume,
      disabled: true,
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

    action === "create" ? (
      onDataCreate()
    ) : action === "update" && application.application ? (
      onDataUpdate()
    ) : action === "update" ? (
      onDataCreate()
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

    await StudentApplicationAPI.createResponse({ ...application, detail: "" })
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

    await StudentApplicationAPI.updateResponse(application.application, application)
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

    await StudentApplicationAPI.deleteResponse(application.application)
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
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
      sortable: true
    },
    {
      name: "Remarks",
      selector: row => row.remarks || "---",
      sortable: true
    },
    {
      name: "Accepted By Company",
      selector: row => row.accepted ? "Yes" : row.remarks ? "No" : "Not Yet",
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
