import { useEffect, useState } from 'react';
import StudentProposalAPI from 'src/api/StudentProposal';
import UniversityProposalResponseAPI from 'src/api/UniversityProposalResponse';
import { companies, students } from 'src/reusables/data';
import TemplatePage from '../../';
import VisualRepresentations from "./visualRepresentations";


const StudentProposalsRes = () => {
  const [proposals, setproposals] = useState([]);
  const [proposal, setproposal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);
  const [ProposalsResponses, setProposalsResponses] = useState([]);
  const [Response, setResponse] = useState({});

  const callData = async () => {
    setLoading(true);

    await UniversityProposalResponseAPI.getAllResponses()
      .then(res => {
        console.log("Called Data", res.data);
        setProposalsResponses(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callproposalsData = async () => {
    setLoading(true);

    await StudentProposalAPI.getAllProposals()
      .then(res => {
        console.log("Called proposal Data", res.data);
        setproposals(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // API Call Needed to be checked
  const InternshipApp = [
    { id: 3, name: "Emad Company" },
    { id: 4, name: "Suhaib Company" },
  ];

  useEffect(() => {
    callData();
    callproposalsData();
  }, []);


  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      value: proposal.student,
      disabled: true,
      options: students?.map(student => ({ value: student.id, title: student.name }))
    },
    {
      title: "Companies",
      name: "company",
      type: "select",
      value: proposal.company,
      disabled: true,
      options: companies?.map(student => ({ value: student.id, title: student.name }))
    },
    {
      title: "Internship",
      name: "internship_application",
      type: "select",
      value: proposal.internship_application,
      disabled: true,
      options: InternshipApp?.map(app => ({ value: app.id, title: app.name }))
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: Response.remarks,
      onChange: e => setResponse(current => ({ ...current, remarks: e.target.value }))
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      value: Response.accepted,
      onChange: e => setResponse(current => ({ ...current, accepted: e.target.checked }))
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
    setResponse({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setproposal(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await UniversityProposalResponseAPI.createResponse(Response)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setResponse({});
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

    await UniversityProposalResponseAPI.updateResponse(Response.id, Response)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setResponse({});
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

    await UniversityProposalResponseAPI.deleteResponse(Response.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setResponse({});
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

  const { statisticsData, chartsData } = VisualRepresentations(proposals);

  const tableColumns = [
    {
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
      sortable: true
    },
    {
      name: "Company",
      selector: row => companies.find(company => company.id === row.company)?.name,
      sortable: true
    },
    {
      name: "Internship",
      selector: row => InternshipApp.find(app => app.id === row.internship_application)?.name,
      sortable: true
    },
    {
      name: "remarks",
      selector: row => row.remarks,
      sortable: true
    },
    {
      name: "Accepted By University",
      selector: row => row.accepted ? "Yes" : "No",
      sortable: true
    }

  ];



  return (
    <>
      <TemplatePage
        pageTitle={"Student Proposals Remarks"}
        pageDescrbition={"University supervisors to remark submitted student proposals"}
        statisticsData={statisticsData}
        loading={loading}
        chartsData={chartsData}
        formTitle={"CRUD Remarks"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Proposals & Remarks List"}
        tableData={proposals?.map(data => ({ ...data, ...ProposalsResponses.find(da => da.id === ProposalsResponses.proposal) }))}
        tableColumns={tableColumns}
        tableRowDetails={true}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentProposalsRes
