import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import StudentProfileAPI from 'src/api/StudentProfile';
import InputsPicker from 'src/components/PageForm/InputsPicker';
import { Button, ButtonGroup } from 'src/components/Root/Buttons';
import { Card, CardBody, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';


const StudentProfile = () => {
  const [profile, setProfile] = useState({})
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  const [ahievments, setAchievments] = useState([])
  const [educations, setEducations] = useState([])
  const [languages, setLanguages] = useState([])
  const [contacts, setContacts] = useState([])
  const [editable, setEditable] = useState(false)
  const [editing, setEditing] = useState(false)

  const { user } = useSelector(_ => _);

  const callData = async () => {
    await StudentProfileAPI.getProfile(new URLSearchParams(window.location.search).get("id") || user?.id)
      .then(res => {
        console.log("Profile Called Data", res.data);
        setProfile(res.data);
        setEditable(res.data.id === user?.id)
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllSkills()
      .then(res => {
        console.log("Profile Skills Called Data", res.data);
        setSkills(res.data);
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllExperiences()
      .then(res => {
        console.log("Profile Experiences Called Data", res.data);
        setExperiences(res.data);
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllWorks()
      .then(res => {
        console.log("Profile Works Called Data", res.data);
        setAchievments(res.data);
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllEducations()
      .then(res => {
        console.log("Profile Educations Called Data", res.data);
        setEducations(res.data);
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllLanguages()
      .then(res => {
        console.log("Profile Languages Called Data", res.data);
        setLanguages(res.data);
      })
      .catch(e => {
        console.log(e);
      });


    await StudentProfileAPI.getAllContacts()
      .then(res => {
        console.log("Profile Contacts Called Data", res.data);
        setContacts(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  const onProfileUpdate = async () => {
    await StudentProfileAPI.updateProfile(profile.id, profile)
      .then(res => {
        console.log("Profile Data Updated Successfully");
        callData();
        setEditing(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onUpdateCancel = () => {
    setEditing(false);
    callData();
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row>
                <Col md={9}>
                  <h5>
                    Student {profile.student} Profile
                  </h5>
                </Col>

                <Col md={3}>
                  {editable && (
                    <>
                      {editing ? (
                        <ButtonGroup style={{ float: "right" }} >
                          <Button color="danger" className="text-white" onClick={onUpdateCancel}>
                            Cancel
                          </Button>

                          <Button color="success" className="text-white" onClick={onProfileUpdate}>
                            Submit
                          </Button>
                        </ButtonGroup>
                      ) : (
                        <Button color="warning" style={{ float: "right" }} onClick={() => setEditing(true)}>
                          Edit Profile
                        </Button>
                      )}
                    </>
                  )}
                </Col>
              </Row>
            </CardHeader>

            <CardBody>
              <Row>
                <Col md={3}>
                  {editing ? (
                    <InputsPicker inputs={[
                      {
                        title: "Profile Image",
                        name: "image",
                        type: "text",
                        required: true,
                        value: profile.image,
                        onChange: (e) =>
                          setProfile(current => ({ ...current, image: e.target.value })),
                      }
                    ]} />
                  ) : (
                    <img src={profile.image} width="100%" />
                  )}

                  <h3 className='text-center'>
                    {profile.student}
                  </h3>

                  <h5 className='text-center'>
                    {editing ? (
                      <InputsPicker inputs={[
                        {
                          title: "Job Title",
                          name: "job_title",
                          type: "text",
                          required: true,
                          value: profile.job_title,
                          onChange: (e) =>
                            setProfile(current => ({ ...current, job_title: e.target.value })),
                        }
                      ]} />
                    ) : (
                      profile.job_title
                    )}
                  </h5>
                </Col>

                <Col md={9} className="p-4">
                  {editing ? (
                    <InputsPicker inputs={[
                      {
                        title: "Introduction",
                        name: "intro",
                        type: "textarea",
                        required: true,
                        value: profile.intro,
                        onChange: (e) =>
                          setProfile(current => ({ ...current, intro: e.target.value })),
                      }
                    ]} />
                  ) : (
                    <h5>
                      {profile.intro}
                    </h5>
                  )}

                  <Row>
                    {contacts?.map((contact, i) => (
                      <Col key={i} md={4}>
                        <a href={contact.link} target="blank">
                          {contact.title} | {contact.details}
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>
              Skills
            </CardHeader>

            <CardBody>
              {skills?.map((skill, i) => (
                <h6 key={i}>
                  {skill.title}{" | "}{skill.details}
                </h6>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>
              Experiences
            </CardHeader>

            <CardBody>
              {experiences?.map((experience, i) => (
                <h6 key={i}>
                  {experience.title}{" | "}{experience.details}
                </h6>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>
              Achievements
            </CardHeader>

            <CardBody>
              {ahievments?.map((achievement, i) => (
                <h6 key={i}>
                  {achievement.title}{" | "}{achievement.details}
                </h6>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>
              Educations
            </CardHeader>

            <CardBody>
              {educations?.map((education, i) => (
                <h6 key={i}>
                  {education.title}{" | "}{education.details}
                </h6>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>
              Languages
            </CardHeader>

            <CardBody>
              {languages?.map((language, i) => (
                <h6 key={i}>
                  {language.title}{" | "}{language.details}
                </h6>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentProfile;
