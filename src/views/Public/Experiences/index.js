import { useState, useEffect} from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import ExperiencesDemoData from './demoData';
import StudentExperienceAPI from 'src/api/StudentExperience';



const Experiences = () => {
  const [Experiences, setExperiences] = useState()
  const [pickedExperience, setPickedExperience] = useState({})
  const [loading, setLoading] = useState(false); // New

  const image = "data:image/jpeg;base64,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"

  const callData = async () => {
    setLoading(true);

    await StudentExperienceAPI.getAllExperience() // Call the relevant api call
      .then(res => {
        console.log("Called Data", res.data);
        setExperiences(res.data); // Assign the response data to proper state
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => { // Create UseEffect
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
                      {Experience.company}
                    </p>
                  </Col>

                  <Col md={9} className="p-2">
                    <h5>
                      {Experience.more}
                    </h5>

                    <p>
                      {Experience.improved_aspects}

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
                <Col md={1}>
                  <img src={image} width="800%" />

                  <p className='text-center'>
                    {pickedExperience.company}
                  </p>
                </Col>

                <Col md={7} className="p-2">
                  <h5>
                    {pickedExperience.student}
                  </h5>

                  <p>
                    {pickedExperience.improved_aspects}

                  </p>
                </Col>

                <Col md={12} className="p-2">
                  <h5>
                    {pickedExperience.student}
                  </h5>

                  <p>
                    {pickedExperience.company}
                    <br />
                    {pickedExperience.missed_aspects}
                    <br />
                    {pickedExperience.improved_aspects}
                    <br />
                    {pickedExperience.get_hired}
                    <br />
                    {pickedExperience.more}

                  </p>
                </Col>
              </Row>
            ) : (
              "Pick Experience"
            )}
          </CardBody>
        </Card>
      </CardGroup>
    </Container  >
  )
}

export default Experiences;
