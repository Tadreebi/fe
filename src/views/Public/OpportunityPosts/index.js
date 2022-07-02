import { useState } from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import demoData from "./demoData";


const OpportunityPosts = () => {
  const [posts, setPosts] = useState(demoData)
  const [pickedPost, setPickedPost] = useState({})

  return (
    <Container>
      <CardGroup>
        <Card>
          <CardHeader>
            Posts
          </CardHeader>

          <CardBody>
            {posts?.map((post, i) => (
              <Row key={i} className={`py-4 ${post.id === pickedPost.id ? "bg-light" : ""}`}>
                <Col md={3} onClick={() => pickedPost.id === post.id ? setPickedPost({}) : setPickedPost(post)}>
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
                    {pickedPost.company}
                    <br />
                    {pickedPost.image}
                    <br />
                    {pickedPost.position}
                    <br />
                    {pickedPost.type}
                    <br />
                    {pickedPost.location}
                    <br />
                    {pickedPost.education}
                    <br />
                    {pickedPost.industry}
                    <br />
                    {pickedPost.experience}
                    <br />
                    {pickedPost.paid}
                    <br />
                    {pickedPost.salary}
                    <br />
                    {pickedPost.city}
                    <br />
                    {pickedPost.location}
                    <br />
                    {pickedPost.vacancies}
                    <br />
                    {pickedPost.description}
                    <br />
                    {pickedPost.supervisor_Name}
                    <br />
                    {pickedPost.supervisor_phone_number}
                    <br />
                    {pickedPost.subervisor_position}
                  </p>
                </Col>
              </Row>
            ) : (
              "Pick a post"
            )}
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
  )
}

export default OpportunityPosts;
