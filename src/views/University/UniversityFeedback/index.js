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
        console.log("Called Data", res.data);
        setFeedbackList(res.data);
      })
      .catch(e => {
        console.log(e);
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

  const inputs = [
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
      title: "Report",
      name: "report",
      type: "select",
      required: true,
      value: feedback.report,
      onChange: e => setFeedback(current => ({ ...current, report: parseInt(e.target.value) })),
      options: Reports?.map(report => ({ title: report.name, value: report.id }))
    },
    {
      title: "Title",
      name: "title",
      type: "text",
      placeholder: "Title of the Feedback",
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
    {
      title: "Rating",
      name: "rating",
      type: "select",
      fullwidth: true,
      required: true,
      value: feedback.rating,
      onChange: e => setFeedback(current => ({ ...current, rating: parseInt(e.target.value) })),
      options: Rating?.map(rate => ({ title: rate.name, value: rate.id }))
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
        console.log("Data Created Successfully");
        callData();
        setFeedback({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.updateUniversityFeedback(feedback.id, feedback)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setFeedback({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await UniversityFeedbackAPI.deleteUniversityFeedback(feedback.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setFeedback({});
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


  const tableColumns = [
    {
      name: "Student",
      selector: row => students.find(student => student.id === row.student)?.name,
      sortable: true
    },
    {
      name: "Report",
      selector: row => Reports.find(report => report.id === row.report)?.name,
      sortable: true
    },
    {
      name: "Title",
      selector: row => row.title,
      sortable: true
    },
    {
      name: "Rating",
      selector: row => row.rating,
      sortable: true
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
        formTitle={"CRUD Feedbacks"}
        formInputs={inputs}
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
