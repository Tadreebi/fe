import { useState } from 'react';
import TemplatePage from '../../templatePage';
import feedbackDemoData from './demoData';


const UniversityFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([...feedbackDemoData]);
  const [feedback, setFeedback] = useState({});
  const [action, setAction] = useState("create");

  const students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const Rating = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: feedback.student,
      onChange: e => setFeedback(current => ({ ...current, student: parseInt(e.target.value) })),
      options: students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Date of Feedback",
      name: "Date",
      type: "date",
      required: true,
      value: feedback.date,
      onChange: e => setFeedback(current => ({ ...current, date: e.target.value }))
    },
    {
      title: "Title",
      name: "title", // should match the property name in the backend model
      type: "text",
      placeholder: "Title of the Feedback",
      required: true,
      value: feedback.title, // should match the property name in the backend model
      onChange: e => setFeedback(current => ({ ...current, title: e.target.value })) // should match the property name in the backend model
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
    {
      title: "Rating",
      name: "rating",
      type: "select",
      double: true,
      required: true,
      value: feedback.rating,
      onChange: e => setFeedback(current => ({ ...current, rating: parseInt(e.target.value) })),
      options: Rating.map(rate => ({ title: rate.name, value: rate.id }))
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
    setFeedback({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setFeedback(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setFeedbackList(current => [...current, { ...feedback, id: current.length }]);
    setFeedback({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setFeedbackList(current => [...current.filter(rep => rep.id !== feedback.id), feedback]);
    setFeedback({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setFeedbackList(current => [...current.filter(rep => rep.id !== feedback.id)]);
    setFeedback({});
    setAction("create");
    console.log('Form Data Deleted');
  };


  const tableColumns = [
    {
      name: "Student",
      selector: row => row.student,
      sortable: true
    },
    {
      name: "Date",
      selector: row => row.date,
      sortable: true
    },
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Feedback",
      selector: row => row.feedback,
      sortable: true
    },
    {
      name: "Rating",
      selector: row => row.rating,
      sortable: true
    },
  ];

  const five = feedbackList.filter(rep => rep.rating === 5)?.length
  const four = feedbackList.filter(rep => rep.rating === 4)?.length
  const three = feedbackList.filter(rep => rep.rating === 3)?.length
  const two = feedbackList.filter(rep => rep.rating === 2)?.length
  const one = feedbackList.filter(rep => rep.rating === 1)?.length
  const avgRating = (five * 5 + four * 4 + three * 3 + two * 2 + one * 1) / (five + four + three + two + one)

  const statisticsData = [
    {
      title: "Avarage Rating",
      number: avgRating,
    }
  ];

  const chartsData = [
    {
      title: "Ratings",
      type: "pie",
      data: {
        "5-Star": feedbackList.filter(rep => rep.rating === 5)?.length,
        "4-Star": feedbackList.filter(rep => rep.rating === 4)?.length,
        "3-Star": feedbackList.filter(rep => rep.rating === 3)?.length,
        "2-Star": feedbackList.filter(rep => rep.rating === 2)?.length,
        "1-Star": feedbackList.filter(rep => rep.rating === 1)?.length,
      }
    }
  ]


  return (
    <>
      <TemplatePage
        pageTitle={"University Feedback"}
        pageDescrbition={"For univesity to submit periodical feedback to the student"}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"University Feedback List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={feedbackList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default UniversityFeedback
