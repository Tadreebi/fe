import { useState } from 'react'
import TemplatePage from '../templatePage'


const StudentProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [profile, setProfile] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: profile.student,
      onChange: e => setProfile(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Biography",
      name: "intro",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.intro,
      onChange: e => setProfile(current => ({ ...current, intro: e.target.value }))
    },
    {
      title: "Profile Picture",
      name: "image",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.image,
      onChange: e => setProfile(current => ({ ...current, image: e.target.value }))
    },
    {
      title: "Job Title",
      name: "job_title",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.job_title,
      onChange: e => setProfile(current => ({ ...current, job_title: e.target.value }))
    },
    {
      title: "Experiences",
      name: "experiences",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.experiences,
      onChange: e => setProfile(current => ({ ...current, experiences: e.target.value }))
    },
    {
      title: "Skills",
      name: "skills",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.skills,
      onChange: e => setProfile(current => ({ ...current, skills: e.target.value }))
    },
    {
      title: "Education",
      name: "education",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.education,
      onChange: e => setProfile(current => ({ ...current, education: e.target.value }))
    },
    {
      title: "Languages",
      name: "languages",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.languages,
      onChange: e => setProfile(current => ({ ...current, languages: e.target.value }))
    },
    {
      title: "Contacts",
      name: "contacts",
      type: "text",
      required: true,
      fullwidth: true,
      value: profile.contacts,
      onChange: e => setProfile(current => ({ ...current, contacts: e.target.value }))
    },
    {
      title: "Profile Created At",
      name: "timestamp",
      type: "date",
      required: true,
      value: profile.startDate,
      onChange: e => setProfile(current => ({ ...current, timestamp: e.target.value }))
    },
    {
      title: "Profile Updated At",
      name: "updated",
      type: "date",
      required: true,
      value: profile.updated,
      onChange: e => setProfile(current => ({ ...current, updated: e.target.value }))
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
    setProfile({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setProfile(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setProfiles(current => [...current, { ...profile, id: current.length }]);
    setProfile({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setProfiles(current => [...current.filter(rep => rep.id !== profile.id), profile]);
    setProfile({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setProfiles(current => [...current.filter(rep => rep.id !== profile.id)]);
    setProfile({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"Student Profile"}
        pageDescrbition={"For students to create their Profile"}
        formTitle={"CRUD Profiles"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Profiles List"}
        tableData={profiles}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentProfile
