import { useEffect, useState } from 'react';
import CompanyRatingAPI from 'src/api/CompanyRating';
import { companies } from 'src/reusables/data';
import TemplatePage from '../..';

const CompanyRatings = () => {
  const [scores, setScores] = useState([]);
  const [score, setScore] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyRatingAPI.getAllScores()
      .then(res => {
        console.log("Evaluations Called Data", res.data);
        setScores(res.data);
      })
      .catch(e => {
        console.log("Evaluations Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  const ratingOptions = [
    { title: "1 ", value: 1 },
    { title: "2 ", value: 2 },
    { title: "3 ", value: 3 },
    { title: "4", value: 4 },
    { title: "5 ", value: 5 },
    { title: "6 ", value: 6 },
    { title: "7 ", value: 7 },
    { title: "8 ", value: 8 },
    { title: "9", value: 9 },
    { title: "10 ", value: 10 },
  ];

  const props = [
    {
      title: "Company Name",
      name: "company",
      type: "select",
      disabled: true,
      value: score.company,
      onChange: e => setScore(current => ({ ...current, company: e.target.value })),
      options: companies?.map(company => ({ value: company.id, title: company.name }))
    },
    {
      title: "Does the training program cover its description?",
      name: "useful_train",
      type: "select",
      disabled: true,
      value: score.useful_train,
      onChange: e => setScore(current => ({ ...current, useful_train: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Were you trained  how to use the technologies and tools during the training program?",
      name: "student_allowed",
      type: "select",
      disabled: true,
      value: score.student_allowed,
      onChange: e => setScore(current => ({ ...current, student_allowed: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Did you find sufficient help and support when needed? ",
      name: "support",
      type: "select",
      disabled: true,
      value: score.support,
      onChange: e => setScore(current => ({ ...current, support: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Out of 10, How you would rate your improvement during the training course? ",
      name: "improvement",
      type: "select",
      disabled: true,
      value: score.improvement,
      onChange: e => setScore(current => ({ ...current, improvement: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Do you recommend this training program for other students? ",
      name: "recomended",
      type: "select",
      disabled: true,
      value: score.recomended,
      onChange: e => setScore(current => ({ ...current, recomended: e.target.value })),
      options: ratingOptions
    },
    {
      title: "Additional Comments",
      name: "comments",
      type: "textarea",
      disabled: true,
      fullwidth: true,
      value: score.comments,
      onChange: e => setScore(current => ({ ...current, comments: e.target.value }))
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
    setScore({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setScore(data);
    setAction(action);
  };

  const calculateScore = () => {
    return parseInt((score.recomended + score.improvement + score.support + score.student_allowed + score.useful_train) / 5) % 10
  }

  const onDataCreate = async () => {
    setLoading(true);

    await CompanyRatingAPI.createScore({ ...score, score: calculateScore() })
      .then(res => {
        console.log("Evaluation Data Created Successfully");
        callData();
        setScore({});
        setAction("create");
      })
      .catch(e => {
        console.log("Evaluation Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await CompanyRatingAPI.updateScore(score.id, { ...score, score: calculateScore() })
      .then(res => {
        console.log("Evaluation Data Updated Successfully");
        callData();
        setScore({});
        setAction("create");
      })
      .catch(e => {
        console.log("Evaluation Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await CompanyRatingAPI.deleteScore(score.id)
      .then(res => {
        console.log("Evaluation Data Deleted Successfully");
        setScore({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Evaluation Data Delete Error", e);
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
      name: "Evalutation",
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
        pageTitle={"Company Ratings"}
        pageDescrbition={"Companies to check submitted reviews"}
        loading={loading}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Submitted Ratings List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={scores}
        onActionSelection={onActionSelection}
        currentAction={action}
      />
    </>
  )
}

export default CompanyRatings
