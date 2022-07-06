import { useState, useEffect } from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import StudentExperienceAPI from 'src/api/StudentExperience';

const Experiences = () => {
  const [Experiences, setExperiences] = useState()
  const [pickedExperience, setPickedExperience] = useState({})
  const [loading, setLoading] = useState(false);

  const image = "http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg"

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

  useEffect(() => {
    callData();
  }, []);


  return (
    <Container loading={loading}>
      <CardGroup >
        <Card>
          <CardHeader>
            Posts
          </CardHeader>

          <CardBody>
            {Experiences?.map((Experience, i) => (
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
                      {new Date(pickedExperience.created_at).toLocaleDateString('en-GB')}
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
  )
}

export default Experiences;
