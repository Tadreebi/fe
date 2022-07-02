import { faCheck, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import InputsPicker from 'src/components/PageForm/InputsPicker';
import { Button, ButtonGroup } from 'src/components/Root/Buttons/';
import { Card, CardBody, CardGroup } from 'src/components/Root/Cards';
import Container from 'src/components/Root/Container';
import Form from 'src/components/Root/Form';
import { Col, Row } from 'src/components/Root/Grid';
import Icon from 'src/components/Root/Icon';

const AuthTemplate = ({ title, inputs, description, loginButton, onSubmit, onReset, resetPassword, additionCard }) => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} lg={7} >
            <CardGroup>
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={onSubmit}>
                    <Row>
                      <Col md={9}>
                        <h2>{title}</h2>
                        <p className="text-medium-emphasis text-justify">{description}</p>
                      </Col>

                      <Col md={3}>
                        {loginButton && (
                          <Link to="/login" style={{ float: "right" }}>
                            <Button color="light" className="mt-3" >
                              OR Login
                            </Button>
                          </Link>
                        )}
                      </Col>
                    </Row>

                    <Row>
                      <InputsPicker inputs={inputs} />
                    </Row>

                    <Col xs={12} >
                      <ButtonGroup role="group" style={{ float: 'right' }}>
                        {resetPassword && (
                          <Button color='info' >
                            <Link to={"/password/reset"} className='text-white'>
                              <Icon icon={faClockRotateLeft} /> Forgot Password
                            </Link>
                          </Button>
                        )}

                        {onReset && (
                          <Button onClick={onReset} color='warning' className='text-white'>
                            <Icon icon={faClockRotateLeft} /> Reset
                          </Button>
                        )}

                        <Button type="submit" color='success' className='text-white'>
                          <Icon icon={faCheck} /> Submit
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Form>
                </CardBody >
              </Card >
              {additionCard}
            </CardGroup>
          </Col >
        </Row >
      </Container >
    </div >
  )
};

export default AuthTemplate;
