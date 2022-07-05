import { useEffect, useState } from 'react';
import StudentProposalAPI from 'src/api/StudentProposal';
import TemplatePage from '../../templatePage';


const StudentProposals = () => {
  const [proposals, setproposals] = useState([]);
  const [proposal, setproposal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentProposalAPI.getAllProposals()
      .then(res => {
        console.log("Called Data", res.data);
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
    { id: 1, name: "Emad" },
    { id: 2, name: "Moayad" },
  ];

  const companies = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Raghad Company" },
  ];

  const internshipApps = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Suhaib Company" },
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
      value: proposal.student,
      onChange: e => setproposal(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Company",
      name: "company",
      type: "select",
      double: true,
      required: true,
      value: proposal.company,
      onChange: e => setproposal(current => ({ ...current, company: e.target.value })),
      options: companies.map(company => ({ title: company.name, value: company.id }))
    },
    {
      title: "Internship",
      name: "internship_application",
      type: "select",
      double: true,
      required: true,
      value: proposal.internship_application,
      onChange: e => setproposal(current => ({ ...current, internship_application: e.target.value })),
      options: internshipApps.map(inter => ({ title: inter.name, value: inter.id }))
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

  const onDataCreate = async () => { // Async
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

  const onDataUpdate = async () => { // Async
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

  const onDataDelete = async () => { // Async
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
        pageDescrbition={"Students to submit and university to approve proposed internship vacancies to fulfill"}
        formTitle={"Form"}
        statisticsData={statisticsData}
        chartsData={chartsData}
        loading={loading}
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

export default StudentProposals
