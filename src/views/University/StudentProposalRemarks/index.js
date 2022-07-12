import { useEffect, useState } from 'react';
import StudentProposalAPI from 'src/api/StudentProposal';
import UniversityProposalResponseAPI from 'src/api/UniversityProposalResponse';
import { companies, students } from 'src/reusables/data';
import TemplatePage from '../../';
import VisualRepresentations from "./visualRepresentations";
import StudentApplicationAPI from "src/api/StudentApplication"

const StudentProposalsRes = () => {
  const [proposals, setProposals] = useState([]);
  const [action, setAction] = useState("create");
  const [internshipApps, setInternshipApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const callData = async () => {
    setLoading(true);

    await StudentProposalAPI.getAllProposals()
      .then(res => {
        console.log("Proposals Called Data", res.data);
        setProposals(res.data.map(item => ({ ...item, proposalId: item.id })));
      })
      .catch(e => {
        console.log("Proposals Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });

    setLoading(true);

    await UniversityProposalResponseAPI.getAllResponses()
      .then(res => {
        console.log("Proposal Responses Called Data", res.data);
        setProposals(current => current.map(item => ({ ...item, ...res.data?.find(rep => rep.proposal === item.id) })));
      })
      .catch(e => {
        console.log("Proposal Responses Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Appications Called Data", res.data);
        setInternshipApps(res.data);
      })
      .catch(e => {
        console.log("Appications Call Error", e);
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
      value: response.student,
      disabled: true,
      options: students?.map(student => ({ value: student.id, title: student.name }))
    },
    {
      title: "Companies",
      name: "company",
      type: "select",
      value: response.company,
      disabled: true,
      options: companies?.map(student => ({ value: student.id, title: student.name }))
    },
    {
      title: "Internship",
      name: "internship_application",
      type: "select",
      value: response.internship_application,
      disabled: true,
      options: internshipApps?.map(app => ({ value: app.id, title: app.name }))
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: response.remarks,
      onChange: e => setResponse(current => ({ ...current, remarks: e.target.value }))
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      value: response.accepted,
      onChange: e => setResponse(current => ({ ...current, accepted: e.target.checked }))
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ? (
      onDataCreate()
    ) : action === "update" && response.proposal ? (
      onDataUpdate()
    ) : action === "update" ? (
      onDataCreate()
    ) : action === "delete" && (
      onDataDelete()
    )
  };

  const onFormReset = () => {
    setResponse({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setResponse(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await UniversityProposalResponseAPI.createResponse({ ...response, proposal: response.proposalId })
      .then(res => {
        console.log("Proposal Response Data Created Successfully");
        callData();
        setResponse({});
        setAction("create");
      })
      .catch(e => {
        console.log("Proposal Response Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await UniversityProposalResponseAPI.updateResponse(response.id, response)
      .then(res => {
        console.log("Proposal Response Data Updated Successfully");
        callData();
        setResponse({});
        setAction("create");
      })
      .catch(e => {
        console.log("Proposal Response Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await UniversityProposalResponseAPI.deleteResponse(response.id)
      .then(res => {
        console.log("Proposal Response Data Deleted Successfully");
        setResponse({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Proposal Response Data Delete Error", e);
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
      selector: row => internshipApps.find(app => app.id === row.internship_application)?.name,
      sortable: true
    },
    {
      name: "remarks",
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
        pageTitle={"Student Proposals Remarks"}
        pageDescrbition={"University supervisors to remark submitted student proposals"}
        statisticsData={statisticsData}
        loading={loading}
        chartsData={chartsData}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Proposals & Remarks List"}
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

export default StudentProposalsRes
