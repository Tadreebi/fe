import { useEffect, useState } from 'react';
import StudentExperienceAPI from 'src/api/StudentExperience';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";


const StudentExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await StudentExperienceAPI.getAllExperience()
      .then(res => {
        console.log("Called Data", res.data);
        setExperiences(res.data);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const students = [
    { id: 1, name: "Moayad" },
    { id: 2, name: "Raghad" },
  ];

  const companies = [
    { id: 3, name: "Moayad company" },
    { id: 4, name: "Suhaib company" },
  ];

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: experience.student,
      onChange: e => setExperience(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Company",
      name: "company",
      type: "select",
      double: true,
      required: true,
      value: experience.company,
      onChange: e => setExperience(current => ({ ...current, company: e.target.value })),
      options: companies?.map(company => ({ title: company.name, value: company.id }))
    },
    {
      title: "Improved Aspects",
      name: "improved_aspects",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.improved_aspects,
      onChange: e => setExperience(current => ({ ...current, improved_aspects: e.target.value }))
    },
    {
      title: "Missed Aspects",
      name: "missed_aspects",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.missed_aspects,
      onChange: e => setExperience(current => ({ ...current, missed_aspects: e.target.value }))
    },
    {
      title: "How to Get Hired",
      name: "get_hired",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: experience.get_hired,
      onChange: e => setExperience(current => ({ ...current, get_hired: e.target.value }))
    },
    {
      title: "More",
      name: "more",
      type: "textarea",
      fullwidth: true,
      value: experience.more,
      onChange: e => setExperience(current => ({ ...current, more: e.target.value }))
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
    setExperience({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setExperience(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await StudentExperienceAPI.createExperience(experience)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setExperience({});
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

    await StudentExperienceAPI.updateExperience(experience.id, experience)
      .then(res => {
        console.log("Data Updated Successfully");
        callData();
        setExperience({});
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

    await StudentExperienceAPI.deleteExperience(experience.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setExperience({});
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
      name: "Company",
      selector: row => companies.find(company => company.id === row.company)?.name,
      sortable: true
    },
    {
      name: "Improved Aspects",
      selector: row => row.improved_aspects,
    },
    {
      name: "Missed Aspects",
      selector: row => row.missed_aspects,
    },
    {
      name: "get_hired",
      selector: row => row.get_hired,
    }
  ];

  const { statisticsData } = VisualRepresentations(experiences);

  return (
    <>
      <TemplatePage
        pageTitle={"Student Experiences"}
        pageDescrbition={"Students to share own experiences during an internship"}
        loading={loading}
        statisticsData={statisticsData}
        formTitle={"CRUD Experiences"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Experiences List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={experiences}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  )
}

export default StudentExperience
