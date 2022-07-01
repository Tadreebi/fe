import { Link } from 'react-router-dom';
import { Button } from 'src/components/Root/Buttons/';
import { Card, CardBody, CardGroup } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import { Col, Row } from 'src/components/Root/Grid';

const Landing = () => {
  const JWT = true;

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <CardGroup>
              <Card className="p-4">
                <CardBody className='text-center'>
                  {JWT ? (
                    <Link to="/dashboard">
                      <Button color="success" className="px-4">
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Button color="success" className="px-4">
                        Login
                      </Button>
                    </Link>
                  )}
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing;
