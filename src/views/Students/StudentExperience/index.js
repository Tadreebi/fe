import { faPeopleGroup, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import StudentExperienceAPI from 'src/api/StudentExperience';
import CollapseCard from 'src/components/CollapseCard';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import { dateRangeFormatter } from 'src/reusables/functions';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";

const StudentExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState({});
  const [pickedExperience, setPickedExperience] = useState({})
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const image = "http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg";

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

  // API Call Needed
  const students = [
    { id: 1, name: "Moayad" },
    { id: 2, name: "Raghad" },
  ];

  // API Call Needed
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
        pageDescrbition={"Students to share own experiences during an internship with fellow students"}
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
      >
        <CollapseCard title="Shared Experiences" icon={faPeopleGroup}>
          <Container loading={loading}>
            <CardGroup>
              <Card style={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <CardHeader>
                  Posts
                </CardHeader>

                <CardBody >
                  {experiences?.map((Experience, i) => (
                    <div key={i} onClick={() => pickedExperience.id === Experience.id ? setPickedExperience({}) : setPickedExperience(Experience)}>
                      <Row className={`py-4 ${Experience.id === pickedExperience.id ? "bg-light" : ""}`}>
                        <Col md={3} >
                          <img src={image} width="100%" />

                          <p className='text-center'>
                            Company {Experience.company}
                          </p>
                        </Col>

                        <Col md={9} className="p-2">
                          <h5>
                            Student {Experience.student}
                          </h5>

                          <p className='text-left'>
                            {dateRangeFormatter(Experience.created_at)}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  Post Details
                </CardHeader>

                <CardBody>
                  {pickedExperience.company ? (
                    <Row className="my-4">
                      <Col md={4}>
                        <img src={image} width="100%" />

                        <p className='text-center'>
                          company {pickedExperience.company}
                        </p>
                      </Col>

                      <Col md={8} className="p-2">
                        <h5>
                          student: <b>{pickedExperience.student}</b>
                        </h5>

                        <p>
                          improved_aspects: <b>{pickedExperience.improved_aspects}</b>

                        </p>
                      </Col>

                      <Col md={12} className="p-2">
                        <h5>
                          student: <b>{pickedExperience.student}</b>
                        </h5>

                        <p>
                          company: <b>{pickedExperience.company}</b>
                          <br />
                          missed_aspects: <b>{pickedExperience.missed_aspects}</b>
                          <br />
                          improved_aspects: <b>{pickedExperience.improved_aspects}</b>
                          <br />
                          get_hired: <b>{pickedExperience.get_hired}</b>
                          <br />
                          more: <b>{pickedExperience.more}</b>

                        </p>
                      </Col>
                    </Row>
                  ) : (
                    "Pick Experience"
                  )}
                </CardBody>
              </Card>
            </CardGroup>
          </Container>
        </CollapseCard>
      </TemplatePage>
    </>
  )
}

export default StudentExperience
