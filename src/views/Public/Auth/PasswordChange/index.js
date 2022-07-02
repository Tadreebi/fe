import { cilLockLocked } from '@coreui/icons'
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
                  <h1>Password Change</h1>
                  <Label>
                    <Icon icon={cilLockLocked} />
                  </Label>
                  <Input
                    type="password"
                    placeholder="Old Password"
                    autoComplete="old-password"
                  />
                  <Label>
                    <Icon icon={cilLockLocked} />
                  </Label>
                  <Input
                    type="password"
                    placeholder="New Password"
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
                    <Button color="success">Change Password</Button>
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
