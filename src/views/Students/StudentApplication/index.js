import { useEffect, useState } from 'react';
import OpportunityPostAPI from 'src/api/OpportunityPost';
import StudentApplicationAPI from 'src/api/StudentApplication';
import CollapseCard from 'src/components/CollapseCard';
import { Button } from 'src/components/Root/Buttons';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import { students } from 'src/reusables/data';
import { dateRangeFormatter } from 'src/reusables/functions';
import TemplatePage from '../..';
import VisualRepresentations from "./visualRepresentations";

const StudentApplication = () => {
  const [applicationsList, setApplicationsList] = useState([]);
  const [internships, setInternships] = useState([]);
  const [application, setApplication] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);
  const [pickedPost, setPickedPost] = useState({})

  const image = "http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg";

  const callData = async () => {
    setLoading(true);

    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Applications Called Data", res.data);
        setApplicationsList(res.data);
      })
      .catch(e => {
        console.log("Applications Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });

    await StudentApplicationAPI.getAllResponses()
      .then(res => {
        console.log("Application Responses Called Data", res.data);
        setApplicationsList(current => current.map(item => ({ ...item, ...res.data?.find(resp => resp.application === item.id) })));
      })
      .catch(e => {
        console.log("Application Responses Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const callListsData = async () => {
    await OpportunityPostAPI.getAllPosts()
      .then(res => {
        console.log("Internship Posts Called Data", res.data);
        setInternships(res.data);
      })
      .catch(e => {
        console.log("Internship Posts Call Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    callData();
    callListsData();
  }, []);

  const props = [
    {
      title: "Student",
      name: "student",
      type: "select",
      required: true,
      value: application.student,
      onChange: e => setApplication(current => ({ ...current, student: e.target.value })),
      options: students?.map(student => ({ title: student.name, value: student.id }))
    },
    {
      title: "Internship Oppertunity",
      name: "internship",
      type: "select",
      required: true,
      double: true,
      value: application.internship,
      onChange: e => setApplication(current => ({ ...current, internship: e.target.value })),
      options: internships?.map(internship => ({ title: internship.position, value: internship.id }))
    },
    {
      title: "Preferable Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: application.type,
      onChange: e => setApplication(current => ({ ...current, type: e.target.value })),
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ]
    },
    {
      title: "Preferable Internship Location",
      name: "location",
      type: "select",
      required: true,
      value: application.location,
      onChange: e => setApplication(current => ({ ...current, location: e.target.value })),
      options: [
        { title: "Remote", value: "Remote" },
        { title: "On Site", value: "On Site" },
      ]
    },
    {
      title: "Expected Salary",
      name: "expected_salary",
      type: "number",
      required: true,
      value: application.expected_salary || 0,
      onChange: e => setApplication(current => ({ ...current, expected_salary: e.target.value }))
    },
    {
      title: "Cover Letter",
      name: "coverletter",
      type: "textarea",
      fullwidth: true,
      required: true,
      value: application.coverletter,
      onChange: e => setApplication(current => ({ ...current, coverletter: e.target.value }))
    },
    {
      title: "Resume Link",
      name: "resume",
      type: "url",
      fullwidth: true,
      required: true,
      value: application.resume,
      onChange: e => setApplication(current => ({ ...current, resume: e.target.value }))
    },
    {
      title: "Remarks",
      name: "remarks",
      type: "textarea",
      fullwidth: true,
      disabled: true,
      value: application.remarks,
    },
    {
      title: "Accepted",
      name: "accepted",
      type: "switch",
      fullwidth: true,
      value: application.accepted,
      disabled: true,
    },
  ];

  const onFormSubmit = e => {
    e.preventDefault();

    action === "create" ? (
      onDataCreate()
    ) : action === "update" ? (
      onDataUpdate()
    ) : action === "delete" && (
      onDataDelete()
    )
  };

  const onFormReset = () => {
    setApplication({})
    setAction("create");
    console.log("Form was reset")
  };

  const onActionSelection = (action, data) => {
    setApplication(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await StudentApplicationAPI.createApplication(application)
      .then(res => {
        console.log("Applications Data Created Successfully");
        callData();
        setApplication({});
        setAction("create");
      })
      .catch(e => {
        console.log("Applications Data Create Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataUpdate = async () => {
    setLoading(true);

    await StudentApplicationAPI.updateApplication(application.id, application)
      .then(res => {
        console.log("Applications Data Updated Successfully");
        callData();
        setApplication({});
        setAction("create");
      })
      .catch(e => {
        console.log("Applications Data Update Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await StudentApplicationAPI.deleteApplication(application.id)
      .then(res => {
        console.log("Applications Data Deleted Successfully");
        setApplication({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log("Applications Data Delete Error", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { statisticsData, chartsData } = VisualRepresentations(applicationsList);

  const tableColumns = [
    {
      name: "Internship",
      selector: row => `${internships.find(internship => internship.id === row.internship)?.position} @ ${internships.find(internship => internship.id === row.internship)?.company}`,
      sortable: true
    },
    {
      name: "Cover Letter",
      selector: row => row.coverletter,
    },
    {
      name: "Resume Link",
      selector: row => <a href={row.resume} target="_blank">Check Here</a>,
      sortable: true
    },
    {
      name: "Remarks",
      selector: row => row.remarks || "---",
      sortable: true
    },
    {
      name: "Accepted",
      selector: row => row.accepted ? "Yes" : row.remarks ? "No" : "Not Yet",
      sortable: true
    },
  ];
  return (
    <>
      <TemplatePage
        pageTitle={"Student Applications"}
        pageDescrbition={"Students to apply for specific internships posted by companies"}
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formInputs={props}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Student Applications List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={applicationsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      >
        <CollapseCard title="Internship Oppertunites">
          <Container>
            <CardGroup>
              <Card style={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <CardHeader>
                  Posts
                </CardHeader>

                <CardBody>
                  {internships?.map((internship, i) => (
                    <div key={i} onClick={() => pickedPost.id === internship.id ? setPickedPost({}) : setPickedPost(internship)}>
                      <Row className={`py-4 ${internship.id === pickedPost.id ? "bg-light" : ""}`}>
                        <Col md={3} >
                          <img src={image} width="100%" />

                          <p className='text-center'>
                            Company {internship.company}
                          </p>
                        </Col>

                        <Col md={9} className="p-2">
                          <h5>
                            {internship.position}
                          </h5>

                          <p className='text-left'>
                            {`${internship.type} - ${internship.location}`}
                          </p>

                          <p className='text-left'>
                            {dateRangeFormatter(internship.created_at)}
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
                  {pickedPost.company ? (
                    <Row className="my-4">
                      <Col md={4}>
                        <img src={image} width="100%" />

                        <p className='text-center'>
                          company {pickedPost.company}
                        </p>
                      </Col>

                      <Col md={8} className="p-2">
                        <h5>
                          {pickedPost.position}
                        </h5>

                        <p className='text-left'>
                          {`${pickedPost.type} - ${pickedPost.location}`}
                        </p>

                        <Button onClick={() => setApplication(current => ({ ...current, internship: pickedPost.id }))}>
                          Apply Now
                        </Button>
                      </Col>

                      <Col md={12} className="p-2">
                        <h5>
                          Job Description
                        </h5>

                        <p>
                          {Object.keys(pickedPost).map((key, i) => (
                            <div key={i}>
                              {`${key}: ${pickedPost[key]}`}
                              <br />
                            </div>
                          ))}
                        </p>
                      </Col>
                    </Row>
                  ) : (
                    "Pick an Internship"
                  )}
                </CardBody>
              </Card>
            </CardGroup>
          </Container >
        </CollapseCard>
      </TemplatePage>
    </>
  )
}

export default StudentApplication
