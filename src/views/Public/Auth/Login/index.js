import { cilLockLocked, cilUser } from '@coreui/icons'
import { Link } from 'react-router-dom'
import { Button } from 'src/components/Root/Buttons/'
import { Card, CardBody, CardGroup } from 'src/components/Root/Cards'
import Container from 'src/components/Root/Container'
import Form from 'src/components/Root/Form'
import { Col, Row } from 'src/components/Root/Grid'
import Icon from 'src/components/Root/Icon'
import { Input } from 'src/components/Root/InputFields'
import Label from 'src/components/Root/Label'

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h2>Login</h2>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <Label>
                      <Icon icon={cilUser} />
                    </Label>
                    <Input placeholder="Username" autoComplete="username" />

                    <Label>
                      <Icon icon={cilLockLocked} />
                    </Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />

                    <Row>
                      <Col xs={6}>
                        <Link to="/dashboard">
                          <Button color="success" className="px-4">
                            Login
                          </Button>
                        </Link>
                      </Col>

                      <Col xs={6} className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>

              <Card className="text-white bg-success py-5" style={{ width: '44%' }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <Link to="/register/student">
                      <Button color="light" className="mt-3" >
                        Register as a Student
                      </Button>
                    </Link>

                    <Link to="/register/company">
                      <Button color="light" className="mt-3" >
                        Register as a Company Staff
                      </Button>
                    </Link>

                    <Link to="/register/university">
                      <Button color="light" className="mt-3" >
                        Register as a University Staff
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login;
