import { cilLockLocked, cilUser } from '@coreui/icons';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/Root/Buttons/';
import { Card, CardBody } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import Form from 'src/components/Root/Form';
import { Col, Row } from 'src/components/Root/Grid';
import Icon from 'src/components/Root/Icon';
import { Input } from 'src/components/Root/InputFields';

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form>
                  <Row>
                    <Col md={9}>
                      <h2>Company Register</h2>
                      <p className="text-medium-emphasis text-justify">Register to start posting about your internship opportunity, in to receive student applications.</p>
                    </Col>

                    <Col md={3}>
                      <Link to="/login" style={{ float: "right" }}>
                        <Button color="light" className="mt-3" >
                          OR Login
                        </Button>
                      </Link>
                    </Col>
                  </Row>

                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <Icon icon={cilUser} />
                    </InputGroupText>
                    <Input placeholder="Username" autoComplete="username" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>@</InputGroupText>
                    <Input placeholder="Email" autoComplete="email" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <Icon icon={cilUser} />
                    </InputGroupText>
                    <Input placeholder="Name" autoComplete="name" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <Icon icon={cilUser} />
                    </InputGroupText>
                    <Input placeholder="Phone" autoComplete="phone" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <Icon icon={cilLockLocked} />
                    </InputGroupText>
                    <Input
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupText>
                      <Icon icon={cilLockLocked} />
                    </InputGroupText>
                    <Input
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupText>
                      <p className="text-medium-emphasis">About</p>
                    </InputGroupText>
                    <Input placeholder="About" autoComplete="about" />
                  </InputGroup>
                  <div className="d-grid">
                    <Button color="success">Create Account</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
