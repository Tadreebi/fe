import { useState, useEffect } from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import demoData from "./demoData";
import CompanyPostAPI from 'src/api/OpportunityPost';

const OpportunityPosts = () => {
  const [posts, setPosts] = useState([])
  const [pickedPost, setPickedPost] = useState({})

  const callData = async () => {
    await CompanyPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Data", res.data);
        setPosts(res.data);
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
            Posts
          </CardHeader>

          <CardBody>
            {posts?.map((post, i) => (
              <div key={i} onClick={() => pickedPost.id === post.id ? setPickedPost({}) : setPickedPost(post)}>
                <Row className={`py-4 ${post.id === pickedPost.id ? "bg-light" : ""}`}>
                  <Col md={3} >
                    <img src={post.image} width="100%" />

                    <p className='text-center'>
                      {post.company}
                    </p>
                  </Col>

                  <Col md={9} className="p-2">
                    <h5>
                      {post.position}
                    </h5>

                    <p>
                      {post.type}
                      <br />
                      {post.location}, {post.city}
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
                <Col md={3}>
                  <img src={pickedPost.image} width="100%" />

                  <p className='text-center'>
                    {pickedPost.company}
                  </p>
                </Col>

                <Col md={9} className="p-2">
                  <h5>
                    {pickedPost.position}
                  </h5>

                  <p>
                    {pickedPost.type}
                    <br />
                    {pickedPost.location}, {pickedPost.city}
                  </p>
                </Col>

                <Col md={12} className="p-2">
                  <h5>
                    {pickedPost.description}
                  </h5>

                  <p>
                    company: <b>{pickedPost.company}</b>
                    <br />
                    image: <b>{pickedPost.image}</b>
                    <br />
                    position: <b>{pickedPost.position}</b>
                    <br />
                    type: <b>{pickedPost.type}</b>
                    <br />
                    location: <b>{pickedPost.location}</b>
                    <br />
                    education: <b>{pickedPost.education}</b>
                    <br />
                    industry: <b>{pickedPost.industry}</b>
                    <br />
                    experience: <b>{pickedPost.experience}</b>
                    <br />
                    paid: <b>{pickedPost.paid}</b>
                    <br />
                    salary: <b>{pickedPost.salary}</b>
                    <br />
                    city: <b>{pickedPost.city}</b>
                    <br />
                    location: <b>{pickedPost.location}</b>
                    <br />
                    vacancies: <b>{pickedPost.vacancies}</b>
                    <br />
                    description: <b>{pickedPost.description}</b>
                    <br />
                    supervisor_Name: <b>{pickedPost.supervisor_Name}</b>
                    <br />
                    supervisor_phone_number: <b>{pickedPost.supervisor_phone_number}</b>
                    <br />
                    subervisor_position: <b>{pickedPost.subervisor_position}</b>
                  </p>
                </Col>
              </Row>
            ) : (
              "Pick a post"
            )}
          </CardBody>
        </Card>
      </CardGroup>
    </Container >
  )
}

export default OpportunityPosts;
