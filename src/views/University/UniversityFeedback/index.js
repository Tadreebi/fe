import { useEffect, useState } from 'react';
import UniversityFeedbackAPI from 'src/api/UniversityFeedback';
import { students } from 'src/reusables/data';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";


const UniversityFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.getAllUniversityFeedback()
      .then(res => {
        console.log("Feedbacks Called Data", res.data);
        setFeedbackList(res.data);
      })
      .catch(e => {
        console.log("Feedbacks Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const Rating = [
    { id: 1, name: "1-Star" },
    { id: 2, name: "2-Star" },
  ];

  // API Call Needed
  const Reports = [
    { id: 1, name: "report1" },
    { id: 2, name: "report2" },
  ]

  useEffect(() => {
    callData();
  }, []);

  const props = [
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: feedback.student,
      onChange: e => setFeedback(current => ({ ...current, student: parseInt(e.target.value) })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Title of the Feedback",
      double: true,
      required: true,
      value: feedback.title,
      onChange: e => setFeedback(current => ({ ...current, title: e.target.value }))
    },
    {
      title: "Feedback",
      name: "Feedback",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: feedback.feedback,
      onChange: e => setFeedback(current => ({ ...current, feedback: e.target.value }))
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
    setFeedback({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setFeedback(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.createUniversityFeedback(feedback)
      .then(res => {
        console.log("Feedbacks Data Created Successfully");
        callData();
        setFeedback({});
        setAction("create");
      })
      .catch(e => {
        console.log("Feedbacks Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.updateUniversityFeedback(feedback.id, feedback)
      .then(res => {
        console.log("Feedbacks Data Updated Successfully");
        callData();
        setFeedback({});
        setAction("create");
      })
      .catch(e => {
        console.log("Feedbacks Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.deleteUniversityFeedback(feedback.id)
      .then(res => {
        console.log("Feedbacks Data Deleted Successfully");
        setFeedback({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Feedbacks Data Delete Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const tableColumns = [
    {
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
      sortable: true
    },
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Details",
      selector: row => row.feedback,
    },
  ];

  const { statisticsData, chartsData } = VisualRepresentations(feedbackList);

  return (
    <>
      <TemplatePage
        pageTitle={"University Feedback"}
        pageDescrbition={"University supervisors to submit on-need feedbacks to students"}
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Supervisor Feedbacks List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={feedbackList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default UniversityFeedback
