import { useState } from 'react'
import TemplatePage from '../../templatePage'
import demoData from './demoData'


const CompanyRating = () => {
  const [scores, setScores] = useState(demoData);
  const [score, setScore] = useState({});
  const [action, setAction] = useState("create");

  const inputs = [
    {
      title: "company_name",
      name: "company_name",
      type: "select",
      required: true,
      value: score.company_name,
      onChange: e => setScore(current => ({ ...current, company_name: e.target.value })),
      options: [
        { title: "Socium", value: "Socium" },
        { title: "ASAC", value: "ASAC" },

      ]
    },
    {
      title: "Does the training program covers it's description?",
      name: "useful_train",
      type: "select",
      required: true,
      value: score.useful_train,
      onChange: e => setScore(current => ({ ...current, useful_train: e.target.value })),
      options: [
        { title: "1 ", value: "1" },
        { title: "2 ", value: "2" },
        { title: "3 ", value: "3" },
        { title: "4", value: "4" },
        { title: "5 ", value: "5" },
        { title: "6 ", value: "6" },
        { title: "7 ", value: "7" },
        { title: "8 ", value: "8" },
        { title: "9", value: "9" },
        { title: "10 ", value: "10" },
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
        { title: "1 ", value: "1" },
        { title: "2 ", value: "2" },
        { title: "3 ", value: "3" },
        { title: "4", value: "4" },
        { title: "5 ", value: "5" },
        { title: "6 ", value: "6" },
        { title: "7 ", value: "7" },
        { title: "8 ", value: "8" },
        { title: "9", value: "9" },
        { title: "10 ", value: "10" },
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
        { title: "1 ", value: "1" },
        { title: "2 ", value: "2" },
        { title: "3 ", value: "3" },
        { title: "4", value: "4" },
        { title: "5 ", value: "5" },
        { title: "6 ", value: "6" },
        { title: "7 ", value: "7" },
        { title: "8 ", value: "8" },
        { title: "9", value: "9" },
        { title: "10 ", value: "10" },
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
        { title: "1 ", value: "1" },
        { title: "2 ", value: "2" },
        { title: "3 ", value: "3" },
        { title: "4", value: "4" },
        { title: "5 ", value: "5" },
        { title: "6 ", value: "6" },
        { title: "7 ", value: "7" },
        { title: "8 ", value: "8" },
        { title: "9", value: "9" },
        { title: "10 ", value: "10" },
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
        { title: "1 ", value: "1" },
        { title: "2 ", value: "2" },
        { title: "3 ", value: "3" },
        { title: "4", value: "4" },
        { title: "5 ", value: "5" },
        { title: "6 ", value: "6" },
        { title: "7 ", value: "7" },
        { title: "8 ", value: "8" },
        { title: "9", value: "9" },
        { title: "10 ", value: "10" },
      ]
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
    setScore({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setScore(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setScores(current => [...current, { ...score, id: current.length }]);
    setScore({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataEdit = () => {
    setScores(current => [...current.filter(rep => rep.id !== score.id), score]);
    setScore({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setScores(current => [...current.filter(rep => rep.id !== score.id)]);
    setScore({});
    setAction("create");
    console.log('Form Data Deleted');
  };

  const tableColumns = [
    {
      name: "company_name",
      selector: row => row.company_name,
      sortable: true
    },
    {
      name: "useful_train",
      selector: row => row.useful_train,
      sortable: true
    },
    {
      name: "student_allowed",
      selector: row => row.student_allowed,
      sortable: true
    },
    {
      name: "support",
      selector: row => row.support,
      sortable: true
    },
    {
      name: "improvement",
      selector: row => row.improvement,
      sortable: true
    },
    {
      name: "recomended",
      selector: row => row.recomended,
      sortable: true
    }
  ];

  return (
    <>
      <TemplatePage
        pageTitle={"Company Rating"}
        pageDescrbition={"Here you can rate the training program and the proposing company."}
        formTitle={"Answer the below questions please!"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"company rating restlts"}
        tableColumns={tableColumns} // New
        tableRowDetails={true} // New
        tableData={scores}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default CompanyRating
