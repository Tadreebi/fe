import { useState } from 'react';
import { Card, CardBody, CardGroup, CardHeader } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';
import demoData from "./demoData";


const OpportunityPosts = () => {
  const [posts, setPosts] = useState(demoData)
  const [post, setPost] = useState({})

  return (
    <Container>
      <CardGroup>
        <Card>
          <CardHeader>
            Posts
          </CardHeader>

          <CardBody>
            {posts?.map((post, i) => (
              <Row key={i} className="my-4">
                <Col md={3} onClick={() => setPost(post)}>
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
            {post.company ? (
              <Row className="my-4" onClick={() => setPost(post)}>
                <Col md={3}>
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

                <Col md={12} className="p-2">
                  <h5>
                    {post.description}
                  </h5>

                  <p>
                    {post.company}
                    <br />
                    {post.image}
                    <br />
                    {post.position}
                    <br />
                    {post.type}
                    <br />
                    {post.location}
                    <br />
                    {post.education}
                    <br />
                    {post.industry}
                    <br />
                    {post.experience}
                    <br />
                    {post.paid}
                    <br />
                    {post.salary}
                    <br />
                    {post.city}
                    <br />
                    {post.location}
                    <br />
                    {post.vacancies}
                    <br />
                    {post.description}
                    <br />
                    {post.supervisor_Name}
                    <br />
                    {post.supervisor_phone_number}
                    <br />
                    {post.subervisor_position}
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
