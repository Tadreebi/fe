import { useEffect, useState } from 'react';
import StudentGoalsAPI from 'src/api/StudentGoals';
import { students } from 'src/reusables/data';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";

const StudentGoals = () => {
  const [goals, setGoalsList] = useState([]);
  const [goal, setGoal] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentGoalsAPI.getAllGoals()
      .then(res => {
        console.log("Goals Called Data", res.data);
        setGoalsList(res.data);
      })
      .catch(e => {
        console.log("Goals Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  const props = [
    {
      title: "Title",
      name: "title",
      type: "text",
      double: true,
      required: true,
      value: goal.title,
      onChange: e => setGoal(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: goal.student,
      onChange: e => setGoal(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
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

  const onDataCreate = async () => {
    setLoading(true);

    await StudentGoalsAPI.createGoal(goal)
      .then(res => {
        console.log("Goal Data Created Successfully");
        callData();
        setGoal({});
        setAction("create");
      })
      .catch(e => {
        console.log("Goal Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await StudentGoalsAPI.updateGoal(goal.id, goal)
      .then(res => {
        console.log("Goal Data Updated Successfully");
        callData();
        setGoal({});
        setAction("create");
      })
      .catch(e => {
        console.log("Goal Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await StudentGoalsAPI.deleteGoal(goal.id)
      .then(res => {
        console.log("Goal Data Deleted Successfully");
        setGoal({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Goal Data Delete Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { statisticsData } = VisualRepresentations(goals);

  const tableColumns = [
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Description",
      selector: row => row.describtion,
      sortable: true
    },
    {
      name: "Done",
      selector: row => row.done ? "Yes" : "No",
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Student Goals"}
        pageDescrbition={"Students to add their personal & private goals along the internship and report to self on progess"}
        loading={loading}
        statisticsData={statisticsData}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableTitle={"Student Goals List"}
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
