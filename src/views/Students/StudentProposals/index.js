import { useEffect, useState } from 'react';
import StudentApplicationAPI from 'src/api/StudentApplication';
import StudentProposalAPI from 'src/api/StudentProposal';
import { companies, students } from 'src/reusables/data';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";
import OpportunityPostAPI from 'src/api/OpportunityPost';

const StudentProposals = () => {
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

    await OpportunityPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Internship Posts Data", res.data);
        setInternshipApps(current => current.map(item => ({ ...res.data?.find(resp => resp.id === item.internship), ...item })));
        console.log("Called Internship Merged Data", internshipApps);
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

  const props = [
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
      title: "Internship",
      name: "internship_application",
      type: "select",
      required: true,
      double: true,
      value: proposal.internship_application,
      onChange: e => setproposal(current => ({ ...current, internship_application: e.target.value })),
      options: internshipApps?.map(inter => ({ title: `${inter.position} @ ${inter.company}`, value: inter.id }))
    },
    {
      title: "Notes",
      name: "notes",
      type: "textarea",
      fullwidth: true,
      value: proposal.notes,
      onChange: e => setproposal(current => ({ ...current, notes: e.target.value })),
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
      selector: row => companies.find(company => company.id === internshipApps.find(app => app.id === row.internship_application)?.company)?.name,
      sortable: true
    },
    {
      name: "Internship",
      selector: row => {
        const data = internshipApps.find(app => app.id === row.internship_application);
        return `${data?.position} @ ${data?.company}`
      },
      sortable: true
    },
    {
      name: "Notes",
      selector: row => row.notes,
      sortable: true
    },
    {
      name: "Response",
      selector: row => row.remarks || "---",
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
        formInputs={props}
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

export default StudentProposals
