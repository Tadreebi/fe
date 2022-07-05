import { useState } from 'react';
import TemplatePage from '../../templatePage';
import supervisedByDemoData from './demoData';


const SupervisedBy = () => {
  const [supervisedByList, setSupervisedByList] = useState([...supervisedByDemoData]);
  const [supervisedBy, setSupervisedBy] = useState({});
  const [action, setAction] = useState("create");

  const Students = [
    { id: 1, name: "Emad" },
    { id: 2, name: "Ghaida'" },
    { id: 3, name: "Moayad" },
    { id: 4, name: "Raghad" },
    { id: 5, name: "Suhaib" },
  ];

  const Supervisors = [
    { id: 1, name: "Yahya" },
    { id: 2, name: "Hanbali" },
  ];

  const Companies = [
    { id: 1, name: "Google" },
    { id: 2, name: "Microsoft" },
  ];

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      double: true,
      required: true,
      value: supervisedBy.student,
      onChange: e => setSupervisedBy(current => ({ ...current, student: parseInt(e.target.value) })),
      options: Students.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Supervisor",
      name: "supervisor",
      type: "select",
      double: true,
      required: true,
      value: supervisedBy.student,
      onChange: e => setSupervisedBy(current => ({ ...current, supervisor: parseInt(e.target.value) })),
      options: Supervisors.map(supervisor => ({ title: supervisor.name, value: supervisor.id }))
    },
    {
      title: "Company",
      name: "company",
      type: "select",
      double: true,
      required: true,
      value: supervisedBy.company,
      onChange: e => setSupervisedBy(current => ({ ...current, company: e.target.value })),
      options: Companies.map(company => ({ title: company.name, value: company.id }))
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
    setSupervisedBy({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setSupervisedBy(data);
    setAction(action);
  };

  const onDataCreate = () => {
    setSupervisedByList(current => [...current, { ...supervisedBy, id: current.length }]);
    setSupervisedBy({});
    setAction("create");
    console.log('Form Data Created');
  };

  const onDataUpdate = () => {
    setSupervisedByList(current => [...current.filter(rep => rep.id !== supervisedBy.id), supervisedBy]);
    setSupervisedBy({});
    setAction("create");
    console.log('Form Data Updated');
  };

  const onDataDelete = () => {
    setSupervisedByList(current => [...current.filter(rep => rep.id !== supervisedBy.id)]);
    setSupervisedBy({});
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
      name: "Supervisor",
      selector: row => row.supervisor,
      sortable: true
    },
    {
      name: "Company",
      selector: row => row.company,
      sortable: true
    },
  ];


  const statisticsData = [
    {
      title: "Students - Supervisors - Companies",
      chart: {
        type: "bar",
        data: {
          "Students": supervisedByList.map(rep => rep.student).reduce((final, current) => final.includes(current) ? final : [...final, current], [])?.length,
          "Supervisors": supervisedByList.map(rep => rep.supervisor).reduce((final, current) => final.includes(current) ? final : [...final, current], [])?.length,
          "Companies": supervisedByList.map(rep => rep.company).reduce((final, current) => final.includes(current) ? final : [...final, current], [])?.length,
        },
        fill: true
      }
    },
  ];




  return (
    <>
      <TemplatePage
        pageTitle={"Supervised By"}
        pageDescrbition={"For univesity to set a supervisor and a company to each student"}
        statisticsData={statisticsData}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Supervised-By List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={supervisedByList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default SupervisedBy
