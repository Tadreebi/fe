import { useEffect, useState } from 'react';
import StudentProposalAPI from 'src/api/StudentProposal';
import UniversityProposalResponseAPI from 'src/api/UniversityProposalResponse';
import TemplatePage from '../../templatePage';


const StudentProposals = () => {
  const [proposals, setproposals] = useState([]);
  const [proposal, setproposal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);
  const [ProposalsResponses, setProposalsResponses] = useState([]);
  const [Response, setResponse] = useState({});
  let alldata = []


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

  const students = [
    { id: 1, name: "Moayad" },
    { id: 2, name: "Raghad" },
  ];

  const companies = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Suhaib Company" },
  ];

  const InternshipApp = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Suhaib Company" },
  ];

  useEffect(() => { // Create UseEffect
    callData();
  }, []);

  useEffect(() => { // Create UseEffect
    callproposalsData();
  }, []);


  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Proposal Title",
      value: proposal.title,
      disabled: true
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      value: proposal.student,
      disabled: true
    },
    {
      title: "Companies",
      name: "company",
      type: "select",
      double: true,
      value: proposal.company,
      disabled: true
    },
    {
      title: "Internship",
      name: "internship_application",
      type: "select",
      double: true,
      value: proposal.internship_application,
      disabled: true
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

  const onDataCreate = async () => { // Async
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

  const onDataUpdate = async () => { // Async
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

  const onDataDelete = async () => { // Async
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

  const chartsData = [
    {
      title: "Submitted proposals",
      type: "pie",
      data: {
        "Pending proposals": proposals.filter(rep => !rep.remarks?.length && rep.accepted !== true)?.length,
        "Accepted proposals": proposals.filter(rep => rep.accepted === true)?.length,
        "Rejected proposals": proposals.filter(rep => rep.remarks?.length && rep.accepted === false)?.length,
      }
    },
    {
      title: "Submitted proposals",
      type: "radar",
      data: [
        {
          title: "Pending Proposals",
          color: "warning",
          data: proposals.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals.filter(rep => !rep.remarks?.length && rep.accepted !== true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Accepted Proposals",
          color: "success",
          data: proposals.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals.filter(rep => rep.accepted === true && rep.student === student)?.length,
          }), {}),
        },
        {
          title: "Rejected Proposals",
          color: "danger",
          data: proposals.map(rep => rep.student).reduce((company, current) => company.includes(current) ? company : [...company, current], []).reduce((company, student) => ({
            ...company, [student]: proposals.filter(rep => rep.remarks?.length && rep.accepted === false && rep.student === student)?.length,
          }), {}),
        }
      ]
    },
  ];

  const statisticsData = [
    {
      title: "Submitted proposals",
      number: proposals.length,
      chart: {
        type: "bar",
        data: {
          "Accepted proposals": proposals.filter(pro => pro.accepted == true).length,
          "Rejected proposals": proposals.filter(pro => pro.accepted == false).length,
        },
        fill: true
      }
    },
    {
      title: "Users",
      number: "26",
      chart: {
        type: "line",
        data: {
          "Label 1": 70,
          "Label 2": 60,
          "Label 3": 40,
          "Label 4": 50
        },
      }
    },

  ];

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Student",
      selector: row => row.student,
      sortable: true
    },
    {
      name: "Company",
      selector: row => row.company,
      sortable: true
    },
    {
      name: "Internship",
      selector: row => row.internship_application,
      sortable: true
    },
    {
      name: "remarks",
      selector: row => row.remarks,
      sortable: true
    },
    {
      name: "Accepted By University",
      selector: row => row.accepted ? "True" : "False",
      sortable: true
    }

  ];



  return (
    <>
      <TemplatePage
        pageTitle={"Student Proposals Remarks"}
        pageDescrbition={"for university to remark student submitted proposal"}
        formTitle={"Form"}
        statisticsData={statisticsData}
        loading={loading}
        chartsData={chartsData}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Proposals List"}
        tableData={proposals.map(data => ({ ...data, ...ProposalsResponses.find(da => da.id === ProposalsResponses.proposal) }))}
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
