import { useState } from 'react'
import TemplatePage from '../templatePage'


const StudentExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const companies = [
    { id: 1, name: "Emad company" },
    { id: 2, name: "Ghaida' company" },
    { id: 3, name: "Moayad company" },
    { id: 4, name: "Raghad company" },
    { id: 5, name: "Suhaib company" },
  ];
  const inputs = [
    {
      title: "Title",
      name: "Experience", // should match the property name in the backend model
      type: "text",
      placeholder: "Experience Title",
      required: true,
      value: experience.title, // should match the property name in the backend model
      onChange: e => setExperience(current => ({ ...current, title: e.target.value })) // should match the property name in the backend model
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: experience.student,
      onChange: e => setExperience(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Company",
      name: "company",
      type: "select",
      double: true,
      required: true,
      value: experience.student,
      onChange: e => setExperience(current => ({ ...current, company: e.target.value })),
      options: companies.map(company => ({ title: company.name, value: company.id }))
    },
    {
      title: "Improved Aspects",
      name: "improved_aspects",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.improved_aspects,
      onChange: e => setExperience(current => ({ ...current, improved_aspects: e.target.value }))
    },
    {
      title: "Missed Aspects",
      name: "missed_aspects",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.missed_aspects,
      onChange: e => setExperience(current => ({ ...current, missed_aspects: e.target.value }))
    },
    {
      title: "get hired",
      name: "get_hired",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.get_hired,
      onChange: e => setExperience(current => ({ ...current, get_hired: e.target.value }))
    },
    {
      title: "more",
      name: "more",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.more,
      onChange: e => setExperience(current => ({ ...current, more: e.target.value }))
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
    setExperience({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setExperience(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setExperiences(current => [...current, { ...experience, id: current.length }]);
    setExperience({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setExperiences(current => [...current.filter(exp => exp.id !== experience.id), experience]);
    setExperience({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setExperiences(current => [...current.filter(exp => exp.id !== experience.id)]);
    setExperience({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"Student Experiences"}
        pageDescrbition={"student Experience during an internship"}
        formTitle={"CRUD Experiences"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Experiences List"}
        tableData={experiences}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentExperience
