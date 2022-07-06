import { useEffect, useState } from 'react';
import CompanyRatingAPI from 'src/api/CompanyRating';
import TemplatePage from '../..';


const CompanyRating = () => {
  const [scores, setScores] = useState([]);
  const [score, setScore] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyRatingAPI.getAllScores()
      .then(res => {
        console.log("Called Data", res.data);
        setScores(res.data);
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

  const companies = [
    { id: 2, name: "Socium" },
    { id: 4, name: "ASAC'" },
  ];

  const inputs = [
    {
      title: "Company Name",
      name: "company",
      type: "select",
      required: true,
      value: score.company,
      onChange: e => setScore(current => ({ ...current, company: e.target.value })),
      options: companies.map(company => ({ value: company.id, title: company.name }))
    },
    {
      title: "Does the training program covers it's description?",
      name: "useful_train",
      type: "select",
      required: true,
      value: score.useful_train,
      onChange: e => setScore(current => ({ ...current, useful_train: e.target.value })),
      options: [
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
      ]
    },
    {
      title: "Were you trained  how to use the technologies and tools during the training program?",
      name: "student_allowed",
      type: "select",
      required: true,
      value: score.student_allowed,
      onChange: e => setScore(current => ({ ...current, student_allowed: e.target.value })),
      options: [
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
      ]
    },
    {
      title: "Did you find sufficient help and support when needed? ",
      name: "support",
      type: "select",
      required: true,
      value: score.support,
      onChange: e => setScore(current => ({ ...current, support: e.target.value })),
      options: [
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
      ]
    },
    // This one needs to be added to the Backend model it is named comments
    {
      title: "Out of 10, How you would rate your improvement during the training course? ",
      name: "improvement",
      type: "select",
      required: true,
      value: score.improvement,
      onChange: e => setScore(current => ({ ...current, improvement: e.target.value })),
      options: [
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
      ]
    },
    {
      title: "Do you recommend this training program for other students? ",
      name: "recomended",
      type: "select",
      required: true,
      value: score.recomended,
      onChange: e => setScore(current => ({ ...current, recomended: e.target.value })),
      options: [
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
      ]
    },
    {
      title: "Additional Comments",
      name: "comments",
      type: "textarea",
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
        console.log("Data Created Successfully");
        callData();
        setScore({});
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

    await CompanyRatingAPI.updateScore(score.id, { ...score, score: calculateScore() })
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setScore({});
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

    await CompanyRatingAPI.deleteScore(score.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setScore({});
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
      name: "Evalutation",
      selector: row => row.score,
      sortable: true
    },
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Company Rating"}
        pageDescrbition={"Here you can rate the training program and the proposing company."}
        loading={loading}
        formTitle={"Rating Form"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Submitted Ratings List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={scores}
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
