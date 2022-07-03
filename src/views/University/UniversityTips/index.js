import { useState } from 'react'
import TemplatePage from '../..'
import detailsDemoData from "./demoData"


const UniversityTips = () => {
  const [tips, setTips] = useState(detailsDemoData);
  const [tip, setTip] = useState({});
  const [action, setAction] = useState("create");

  const topics = [
    { id: 1, name: "Motivational" },
    { id: 2, name: "Skill References'" },
    { id: 3, name: "Interview References" },
    { id: 4, name: "Use the Internship Opportunity" },
  ];

  const types = [
    { id: 1, name: "File" },
    { id: 2, name: "Multimedia" },
    { id: 3, name: "Book" },
    { id: 4, name: "Article" },
    { id: 5, name: "Event" },

  ];
  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "University Tip Title",
      required: true,
      value: tip.title,
      onChange: e => setTip(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Topic",
      name: "topic",
      type: "select",
      required: true,
      value: tip.topic,
      onChange: e => setTip(current => ({ ...current, topic: e.target.value })),
      options: topics.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Type",
      name: "type",
      type: "select",
      required: true,
      value: tip.type,
      onChange: e => setTip(current => ({ ...current, type: e.target.value })),
      options: types.map(type => ({ title: type.name, value: type.id }))
    },
    {
      title: "Details",
      name: "details",
      type: "textarea",
      placeholder: "University Tip Details",
      required: true,
      fullwidth: true,
      value: tip.details,
      onChange: e => setTip(current => ({ ...current, details: e.target.value }))
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
    setTip({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setTip(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setTips(current => [...current, { ...tip, id: current.length }]);
    setTip({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setTips(current => [...current.filter(rep => rep.id !== tip.id), tip]);
    setTip({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setTips(current => [...current.filter(rep => rep.id !== tip.id)]);
    setTip({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Topic",
      selector: row => row.topic,
      sortable: true
    },
    {
      name: "Type",
      selector: row => row.type,
      sortable: true
    },
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Student Tips"}
        pageDescrbition={"For companies to submit tips for students"}
        formTitle={"CRUD Tips"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Tips List"}
        tableData={tips}
        tableColumns={tableColumns}
        tableRowDetails={true}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default UniversityTips
