import { useEffect, useState } from 'react';
import StudentApplicationAPI from 'src/api/StudentApplication';
import StudentProposalAPI from 'src/api/StudentProposal';
import { companies, students } from 'src/reusables/data';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";

const StudentProposalRemarks = () => {
  const [proposals, setproposals] = useState([]);
  const [internshipApps, setInternshipApps] = useState([]);
  const [proposal, setproposal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentProposalAPI.getAllProposals()
      .then(res => {
        console.log("Called Proposal Data", res.data);
        setproposals(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Called Appication Data", res.data);
        setInternshipApps(res.data);
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
      value: proposal.student,
      onChange: e => setproposal(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Company",
      name: "company",
      type: "select",
      required: true,
      value: proposal.company,
      onChange: e => setproposal(current => ({ ...current, company: e.target.value })),
      options: companies?.map(company => ({ title: company.name, value: company.id }))
    },
    {
      title: "Internship",
      name: "internship_application",
      type: "select",
      required: true,
      value: proposal.internship_application,
      onChange: e => setproposal(current => ({ ...current, internship_application: e.target.value })),
      options: internshipApps?.map(inter => ({ title: inter.name, value: inter.id }))
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: proposal.remarks,
      disabled: true
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      required: true,
      value: proposal.accepted,
      disabled: true
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
    setproposal({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setproposal(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await StudentProposalAPI.createProposal(proposal)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setproposal({});
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

    await StudentProposalAPI.updateProposal(proposal.id, proposal)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setproposal({});
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

    await StudentProposalAPI.deleteProposal(proposal.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setproposal({});
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
      name: "Company",
      selector: row => companies.find(company => company.id === row.company)?.name,
      sortable: true
    },
    {
      name: "Internship",
      selector: row => internshipApps.find(app => app.id === row.internship_application)?.id,
      sortable: true
    },
    {
      name: "Response",
      selector: row => row.remarks,
      sortable: true
    },
    {
      name: "Accepted By University",
      selector: row => row.accepted ? "Yes" : row.remarks ? "No" : "Not Yet",
      sortable: true
    }
  ];



  return (
    <>
      <TemplatePage
        pageTitle={"Student Proposals"}
        pageDescrbition={"Students to submit proposed internship vacancies to fulfill to university supervisor"}
        statisticsData={statisticsData}
        chartsData={chartsData}
        loading={loading}
        formTitle={"CRUD Proposals"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Proposals List"}
        tableData={proposals}
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

export default StudentProposalRemarks
