import { useEffect, useState } from 'react';
import StudentGoalsAPI from 'src/api/StudentGoals';
import TemplatePage from '../../templatePage';
import goalsDemoData from './demoData';

const StudentGoals = () => {
  const [goals, setGoalsList] = useState(goalsDemoData || []);
  const [goal, setGoal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentGoalsAPI.getAllGoals()
      .then(res => {
        console.log("Called Data", res.data);
        setGoalsList(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const students = [
    { id: 1, name: "Raghad" },
    { id: 2, name: "Suhaib" },
  ];

  useEffect(() => { // Create UseEffect
    callData();
  }, []);

  const inputs = [
    {
      title: "Title",
      name: "title",
      type: "text",
      required: true,
      fullwidth: true,
      value: goal.title,
      onChange: e => setGoal(current => ({ ...current, title: e.target.value }))
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
      title: "Goal Description",
      name: "describtion",
      type: "textarea",
      fullwidth: true,
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
        onDataUpdate()
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

  const onDataCreate = async () => { // Async
    setLoading(true);

    await StudentGoalsAPI.createGoal(goal)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setGoal({});
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

    await StudentGoalsAPI.updateGoal(goal.id, goal)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setGoal({});
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

    await StudentGoalsAPI.deleteGoal(goal.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setGoal({});
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
      title: "Accomplished Goals",
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
        loading={loading}
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
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentGoals
