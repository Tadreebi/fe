import { useState } from 'react'
import TemplatePage from '../templatePage'


const StudentGoals = () => {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState({});
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
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Goal Title",
      required: true,
      fullwidth: true,
      value: goal.title,
      onChange: e => setGoal(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      fullwidth: true,
      required: true,
      value: goal.student,
      onChange: e => setGoal(current => ({ ...current, student: e.target.value })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Goal Description",
      name: "describtion",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: goal.describtion,
      onChange: e => setGoal(current => ({ ...current, describtion: e.target.value }))
    },
    {
      title: "Done",
      name: "done",
      type: "switch",
      required: true,
      value: goal.done,
      onChange: e => setGoal(current => ({ ...current, done: e.target.checked }))
    },
    {
      title: "Goal Created Date",
      name: "timestamp",
      type: "date",
      required: true,
      value: goal.timestamp,
      onChange: e => setGoal(current => ({ ...current, timestamp: e.target.value }))
    },
    {
      title: "Goal Updated Date",
      name: "updated",
      type: "date",
      required: true,
      value: goal.updated,
      onChange: e => setGoal(current => ({ ...current, updated: e.target.value }))
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
    setGoal({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setGoal(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setGoals(current => [...current, { ...goal, id: current.length }]);
    setGoal({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setGoals(current => [...current.filter(rep => rep.id !== goal.id), goal]);
    setGoal({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setGoals(current => [...current.filter(rep => rep.id !== goal.id)]);
    setGoal({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  return (
    <>
      <TemplatePage
        pageTitle={"Student Goals"}
        pageDescrbition={"For student to add their goals"}
        formTitle={"CRUD Goals"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Goals List"}
        tableColumns={[]}
        tableData={goals}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentGoals
