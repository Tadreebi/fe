import { useState } from 'react';
import TemplatePage from '../..'
import facultyDemoData from './demoData';


const TrainingDuration = () => {
  const [facultyList, setFacultyList] = useState([...facultyDemoData]);
  const [faculty, setFaculty] = useState({});
  const [action, setAction] = useState("create");


  const inputs = [
    {
      title: "Faculty Name",
      name: "faculty_name",
      type: "text",
      double: true,
      required: true,
      value: faculty.faculty_name,
      onChange: e => setFaculty(current => ({ ...current, faculty_name: parseInt(e.target.value) })),
    },
    {
      title: "Major",
      name: "major",
      type: "text",
      required: true,
      value: faculty.major,
      onChange: e => setFaculty(current => ({ ...current, major: e.target.value }))
    },
    {
      title: "Training Duration",
      name: "training_duration",
      type: "integer",
      required: true,
      value: faculty.training_duration,
      onChange: e => setFaculty(current => ({ ...current, training_duration: e.target.value }))
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
    setFaculty({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setFaculty(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setFacultyList(current => [...current, { ...faculty, id: current.length }]);
    setFaculty({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataUpdate = () => {
    setFacultyList(current => [...current.filter(rep => rep.id !== faculty.id), faculty]);
    setFaculty({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setFacultyList(current => [...current.filter(rep => rep.id !== faculty.id)]);
    setFaculty({});
    setAction("create");
    console.log('Form Data Deleted');
  };


  const tableColumns = [
    {
      name: "Faculty Name",
      selector: row => row.faculty_name,
      sortable: true
    },
    {
      name: "Major",
      selector: row => row.major,
      sortable: true
    },
    {
      name: "Training Duration",
      selector: row => row.training_duration,
      sortable: true
    },
  ];




  return (
    <>
      <TemplatePage
        pageTitle={"Faculty"}
        pageDescrbition={"To create a new faculty and majors with its training duration, please fill out the form below."}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Training Duration"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={facultyList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default TrainingDuration
