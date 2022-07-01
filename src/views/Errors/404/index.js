import { Link } from 'react-router-dom'
import Container from 'src/components/Root/Container'
import { Col, Row } from 'src/components/Root/Grid'

const Page404 = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">
                404
              </h1>

              <h4 className="pt-3"
              >Oops! You{"'"}re in the wrong place
              </h4>

              <p className="text-medium-emphasis">
                The page you are looking for was not found.
              </p>

              <h5 className="text-medium-emphasis mt-5 text-center">
                Use the navigator to find your page or head back to{" "}
                <Link to="/" className='text-info'>
                  Home Page
                </Link>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Page404
