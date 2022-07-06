import { useState, useEffect } from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import CompanyRatingAPI from 'src/api/CompanyRating';

const OpportunityPosts = () => {
  const [Ratings, setRatings] = useState([])
  const [pickedRating, setPickedRating] = useState({})
  const image = "https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/614dfaed9cdcb08628f3b1cc_5-star-rating.jpeg"
  const callData = async () => {
    await CompanyRatingAPI.getAllScores()
      .then(res => {
        console.log("Called Data", res.data);
        setRatings(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <Container>
      <CardGroup>
        <Card>
          <CardHeader>
            Ratings
          </CardHeader>

          <CardBody>
            {Ratings?.map((rating, i) => (
              <div key={i} onClick={() => pickedRating.id === rating.id ? setPickedRating({}) : setPickedRating(rating)}>
                <Row className={`py-4 ${rating.id === pickedRating.id ? "bg-light" : ""}`}>
                  <Col md={3} >
                    <img src={image} width="100%" />

                    <p className='text-center'>
                      {rating.company}
                    </p>
                  </Col>

                  <Col md={9} className="p-2">
                    <h5>
                      {rating.student}
                    </h5>

                    <p>
                      {rating.score}
                    </p>
                  </Col>
                </Row>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            Rating Details
          </CardHeader>

          <CardBody>
            {pickedRating.company ? (
              <Row className="my-4">
                <Col md={3}>
                  <img src={image} width="100%" />

                  <p className='text-center'>
                    {pickedRating.company}
                  </p>
                </Col>

                <Col md={9} className="p-2">
                  <h5>
                    {pickedRating.student}
                  </h5>

                  <p>
                    {pickedRating.score}
                    <br />
                    {pickedRating.useful_train}
                  </p>
                </Col>

                <Col md={12} className="p-2">
                  <h5>
                    {pickedRating.student_allowed}
                  </h5>

                  <p>
                    company: <b>{pickedRating.company}</b>
                    <br />

                    student: <b>{pickedRating.student}</b>
                    <br />
                    score: <b>{pickedRating.score}</b>
                    <br />
                    useful train: <b>{pickedRating.useful_train}</b>
                    <br />
                    support: <b>{pickedRating.support}</b>
                    <br />
                    improvement: <b>{pickedRating.improvement}</b>
                    <br />
                    recomended: <b>{pickedRating.recomended}</b>
                    <br />
                    comments: <b>{pickedRating.comments}</b>
                    <br />
                  </p>
                </Col>
              </Row>
            ) : (
              "Pick a Rating"
            )}
          </CardBody>
        </Card>
      </CardGroup>
    </Container >
  )
}

export default OpportunityPosts;
