import { useEffect, useState } from 'react';
import CompanyRatingAPI from 'src/api/CompanyRating';
import { companies } from 'src/reusables/data';
import TemplatePage from '../..';

const CompanyRating = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [evaluation, setEvaluation] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyRatingAPI.getAllScores()
      .then(res => {
        console.log("Called Evaluation Data", res.data);
        setEvaluations(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  const ratingOptions = [
    { title: "1", value: 1 },
    { title: "2", value: 2 },
    { title: "3", value: 3 },
    { title: "4", value: 4 },
    { title: "5", value: 5 },
    { title: "6", value: 6 },
    { title: "7", value: 7 },
    { title: "8", value: 8 },
    { title: "9", value: 9 },
    { title: "10 ", value: 10 },
  ];

  const props = [
    {
      title: "Company Name",
      name: "company",
      type: "select",
      required: true,
      value: evaluation.company,
      onChange: e => setEvaluation(current => ({ ...current, company: e.target.value })),
      options: companies?.map(company => ({ value: company.id, title: company.name }))
    },
    {
      title: "Does the training program cover its description?",
      name: "useful_train",
      type: "select",
      required: true,
      value: evaluation.useful_train,
      onChange: e => setEvaluation(current => ({ ...current, useful_train: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Were you trained  how to use the technologies and tools during the training program?",
      name: "student_allowed",
      type: "select",
      required: true,
      value: evaluation.student_allowed,
      onChange: e => setEvaluation(current => ({ ...current, student_allowed: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Did you find sufficient help and support when needed? ",
      name: "support",
      type: "select",
      required: true,
      value: evaluation.support,
      onChange: e => setEvaluation(current => ({ ...current, support: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Out of 10, How you would rate your improvement during the training course? ",
      name: "improvement",
      type: "select",
      required: true,
      value: evaluation.improvement,
      onChange: e => setEvaluation(current => ({ ...current, improvement: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Do you recommend this training program for other students? ",
      name: "recomended",
      type: "select",
      required: true,
      value: evaluation.recomended,
      onChange: e => setEvaluation(current => ({ ...current, recomended: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Additional Comments",
      name: "comments",
      type: "textarea",
      fullwidth: true,
      value: evaluation.comments,
      onChange: e => setEvaluation(current => ({ ...current, comments: e.target.value }))
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
    setEvaluation({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setEvaluation(data);
    setAction(action);
  };

  const calculateScore = () => {
    const avg = parseInt((parseInt(evaluation.recomended) + parseInt(evaluation.improvement) + parseInt(evaluation.support) + parseInt(evaluation.student_allowed) + parseInt(evaluation.useful_train)) / 5);
    return avg
  };

  const onDataCreate = async () => {
    setLoading(true);

    await CompanyRatingAPI.createScore({ ...evaluation, score: calculateScore() })
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setEvaluation({});
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

    await CompanyRatingAPI.updateScore(evaluation.id, { ...evaluation, score: calculateScore() })
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setEvaluation({});
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

    await CompanyRatingAPI.deleteScore(evaluation.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setEvaluation({});
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
      name: "Company Name",
      selector: row => companies.find(company => company.id === row.company)?.name,
      sortable: true
    },
    {
      name: "Total Evaluation",
      selector: row => row.score,
      sortable: true
    },
    {
      name: "Comments",
      selector: row => row.comments,
      sortable: true
    },
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Company Rating"}
        pageDescrbition={"Here you can rate the training program and the proposing company."}
        loading={loading}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Submitted Ratings List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={evaluations}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default CompanyRating
