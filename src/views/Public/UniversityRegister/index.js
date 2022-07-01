import { cilLockLocked, cilUser } from '@coreui/icons'
import { Link } from 'react-router-dom'
import { Button } from 'src/components/Root/Buttons/'
import { Card, CardBody } from 'src/components/Root/Cards'
import Container from 'src/components/Root/Container'
import Form from 'src/components/Root/Form'
import { Col, Row } from 'src/components/Root/Grid'
import Icon from 'src/components/Root/Icon'
import { Input } from 'src/components/Root/InputFields'
import Label from 'src/components/Root/Label'

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
                      <h2>University Register</h2>
                      <p className="text-medium-emphasis text-justify">This is for illustration purposes only. In actual app use, staff data will be retrieved from university system.</p>
                    </Col>

                    <Col md={3}>
                      <Link to="/login" style={{ float: "right" }}>
                        <Button color="light" className="mt-3" >
                          OR Login
                        </Button>
                      </Link>
                    </Col>
                  </Row>

                  <Label>
                    <Icon icon={cilUser} />
                  </Label>
                  <Input placeholder="Username" autoComplete="username" />
                  <Label>@</Label>
                  <Input placeholder="Email" autoComplete="email" />
                  <Label>
                    <Icon icon={cilUser} />
                  </Label>
                  <Input placeholder="Name" autoComplete="name" />
                  <Label>
                    <Icon icon={cilUser} />
                  </Label>
                  <Input placeholder="Phone" autoComplete="phone" />
                  <Label>
                    <Icon icon={cilLockLocked} />
                  </Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                  <Label>
                    <Icon icon={cilLockLocked} />
                  </Label>
                  <Input
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                  />
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
