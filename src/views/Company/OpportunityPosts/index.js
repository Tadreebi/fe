import { useState } from 'react'
import TemplatePage from '../../templatePage'


const opportunityPosts = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [action, setAction] = useState("create");

  const companies = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
    { id: 3, name: "CC" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Google" },
  ];

  const inputs = [
    // Company Name -> From another model
    {
      title: "Company",
      name: "student",
      type: "select",
      fullwidth: true,
      required: true,
      value: post.student,
      onChange: e => setPost(current => ({ ...current, student: e.target.value })),
      options: companies.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Position",
      name: "position",
      type: "text",
      placeholder: "Internship Position",
      fullwidth: true,
      required: true,
      value: post.position,
      onChange: e => setPost(current => ({ ...current, position: e.target.value }))
    },
    {
      title: "Internship Type",
      name: "paid",
      type: "select",
      required: true,
      value: post.type,
      onChange: e => setPost(current => ({ ...current, paid: e.target.value })),
      options: [
        { title: "Paid Internship", value: "Paid Internship" },
        { title: "Partially-paid Internship", value: "Partially-paid Internship" },
        { title: "Unpaid Internship", value: "Unpaid Internship" },
        { title: "Virtual Internship", value: "Virtual Internship" },


      ]
    },
    {
      title: "Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: post.type,
      onChange: e => setPost(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ]
    },
    {
      title: "Experience",
      name: "experience",
      type: "select",
      required: true,
      value: post.experience,
      onChange: e => setPost(current => ({ ...current, experience: e.target.value })),
      options: [
        { title: "No Experience", value: "No Experience" },
        { title: "One Year", value: "One Year" },
        { title: "Two Years", value: "Two Years" },
        { title: "Three Years and Above", value: "Three Years and Above" },
      ]
    },
    {
      title: "Education",
      name: "education",
      type: "select",
      required: true,
      value: post.education,
      onChange: e => setPost(current => ({ ...current, education: e.target.value })),
      options: [
        { title: "Bachelors", value: "Bachelors" },
        { title: "Masters", value: "Masters" },
        { title: "Phd", value: "Phd" },
      ]
    },
    {
      title: "Industry",
      name: "industry",
      type: "select",
      required: true,
      value: post.industry,
      onChange: e => setPost(current => ({ ...current, industry: e.target.value })),
      options: [
        { title: "Business", value: "Business" },
        { title: "It", value: "It" },
        { title: "Banking", value: "Banking" },
        { title: "Education", value: "Education" },
        { title: "Engineering", value: "Engineering" },
        { title: "Medical", value: "Medical" },
        { title: "Others", value: "Others" },

      ]
    },
    {
      title: "Salary",
      name: "salary",
      type: "number",
      required: true,
      value: post.salary,
      onChange: e => setPost(current => ({ ...current, salary: e.target.value }))
    },
    {
      title: "City",
      name: "city",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.city,
      onChange: e => setPost(current => ({ ...current, city: e.target.value }))
    },
    {
      title: "Location",
      name: "location",
      type: "location",
      required: true,
      fullwidth: true,
      value: post.location,
      onChange: e => setPost(current => ({ ...current, location: e.target.value }))
    },
    {
      title: "Vacancies",
      name: "vacancies",
      type: "number",
      required: true,
      value: post.vacancies,
      onChange: e => setPost(current => ({ ...current, vacancies: e.target.value }))
    },
    {
      title: "Internship Overview",
      name: "description",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.description,
      onChange: e => setPost(current => ({ ...current, description: e.target.value }))
    },
    {
      title: "Supervisor Name",
      name: "supervisor_Name",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.supervisor_Name,
      onChange: e => setPost(current => ({ ...current, supervisor_Name: e.target.value }))
    },
    {
      title: "Supervisor Position",
      name: "subervisor_position",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.subervisor_position,
      onChange: e => setPost(current => ({ ...current, subervisor_position: e.target.value }))
    },
    {
      title: "Supervisor Phone Number",
      name: "supervisor_phone_number",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.supervisor_phone_number,
      onChange: e => setPost(current => ({ ...current, supervisor_phone_number: e.target.value }))
    },
    {
      title: "End Date of Application",
      name: "endDate",
      type: "date",
      required: true,
      value: post.endDate,
      onChange: e => setPost(current => ({ ...current, endDate: e.target.value }))
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
    setPost({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setPost(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setPosts(current => [...current, { ...post, id: current.length }]);
    setPost({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setPosts(current => [...current.filter(rep => rep.id !== post.id), post]);
    setPost({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setPosts(current => [...current.filter(rep => rep.id !== post.id)]);
    setPost({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"Internship Opportunity"}
        pageDescrbition={"For company to submit details of an internship opportunity"}
        formTitle={"CRUD Posts"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Internship Opportunity Details"}
        tableData={posts}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default opportunityPosts
