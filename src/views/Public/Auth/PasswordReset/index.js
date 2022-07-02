import { Button } from 'src/components/Root/Buttons/'
import { Card, CardBody } from 'src/components/Root/Cards'
import Container from 'src/components/Root/Container'
import { Col, Row } from 'src/components/Root/Grid'
import Label from 'src/components/Root/Label'

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} xl={6}>
            <Card className="mx-4">
              <CardBody className="p-4">
                <Container>
                  <h1>Password Reset</h1>
                  <Label>@</Label>
                  <ContainerInput placeholder="Email" autoComplete="username" />
                  <div className="d-grid">
                    <Button color="success">Send Email</Button>
                  </div>
                </Container>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
