import { useState } from 'react'
import TemplatePage from '../templatePage'


const StudentProposals = () => {
  const [proposals, setproposals] = useState([]);
  const [proposal, setproposal] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];
  const companies = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Ghaida' Company" },
    { id: 3, name: "Moayad Company" },
    { id: 4, name: "Raghad Company" },
    { id: 5, name: "Suhaib Company" },
  ];

  const InternshipApp = [
    { id: 1, name: "Emad Company" },
    { id: 2, name: "Ghaida' Company" },
    { id: 3, name: "Moayad Company" },
    { id: 4, name: "Raghad Company" },
    { id: 5, name: "Suhaib Company" },
  ];

  const inputs = [
    {
      title: "Title",
      name: "title", // should match the property name in the backend model
      type: "text",
      placeholder: "Proposal Title",
      required: true,
      value: proposal.title, // should match the property name in the backend model
      onChange: e => setproposal(current => ({ ...current, title: e.target.value })) // should match the property name in the backend model
    },
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
      title: "Companies",
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
      onChange: e => setproposal(current => ({ ...current, inter: e.target.value })),
      options: InternshipApp.map(inter => ({ title: inter.name, value: inter.id }))
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: proposal.remarks,
      onChange: e => setproposal(current => ({ ...current, remarks: e.target.value }))
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ?
      onDataCreate()
      : action === "update" ?
        onDataEdit()
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

  const onDataCreate = () => {
    setproposals(current => [...current, { ...proposal, id: current.length }]);
    setproposal({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setproposals(current => [...current.filter(pro => pro.id !== proposal.id), proposal]);
    setproposal({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setproposals(current => [...current.filter(pro => pro.id !== proposal.id)]);
    setproposal({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"Student Proposals"}
        pageDescrbition={"Students to submit and university to approve proposed internship vacancies to fulfill"}
        formTitle={"CRUD Proposals"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Proposals List"}
        tableData={proposals}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentProposals
