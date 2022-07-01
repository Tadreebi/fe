import { useState } from 'react';
import { Card, CardBody, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import demoData from "./demoData";


const StudentProfile = () => {
  const [profile, setProfile] = useState(demoData)

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              Student Profile Example
            </CardHeader>

            <CardBody>
              <Row>
                <Col md={3}>
                  <img src={profile.image} width="100%" />

                  <h3 className='text-center'>
                    {profile.name}
                  </h3>

                  <h5 className='text-center'>
                    {profile.job_title}
                  </h5>
                </Col>

                <Col md={9} className="p-4">
                  <h5>
                    {profile.intro}
                  </h5>

                  <Row>
                    {profile?.contacts?.map((contact, i) => (
                      <Col key={i}>
                        {JSON.stringify(contact)}
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
              {profile?.skills?.map((skill, i) => (
                <h6 key={i}>
                  {skill.title}{" "}{skill.content}
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
              {profile?.experiences?.map((experience, i) => (
                <h6 key={i}>
                  {experience.title}{" "}{experience.content}
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
              {profile?.achievements?.map((achievement, i) => (
                <h6 key={i}>
                  {achievement.title}{" "}{achievement.content}
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
              {profile?.educations?.map((education, i) => (
                <h6 key={i}>
                  {education.title}{" "}{education.content}
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
              {profile?.languages?.map((language, i) => (
                <h6 key={i}>
                  {language.title}{" "}{language.content}
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
