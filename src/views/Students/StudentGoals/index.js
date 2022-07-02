import { useState } from 'react';
import TemplatePage from '../../templatePage';
import goalsDemoData from './demoData';

const StudentGoals = () => {
  const [goals, setGoals] = useState(goalsDemoData || []);
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

  const statisticsData = [
    {
      title: "Goals Set",
      number: goals.length,
      chart: {
        type: "bar",
        data: {
          "Done": goals.filter(rep => rep.done !== true)?.length,
          "Not Done": goals.filter(rep => rep.done === true)?.length,
        },
        fill: true
      }
    },
    {
      title: "Execution Percentage",
      number: goals.filter(rep => rep.done !== true)?.length,
      chart: {
        type: "progress",
        value: (goals.filter(rep => rep.done !== true)?.length / goals?.length * 100),
        text: `${(goals.filter(rep => rep.done !== true)?.length / goals?.length * 100)}%`,
        color: "success"
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
      name: "Desc",
      selector: row => row.describtion,
      sortable: true
    },
    {
      name: "Done",
      selector: row => row.done ? "True" : "False",
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Student Goals"}
        pageDescrbition={"For student to add their goals"}
        statisticsData={statisticsData}
        formTitle={"CRUD Goals"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Goals List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
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
