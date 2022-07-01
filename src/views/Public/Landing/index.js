import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CRow } from '@coreui/react'
import { Link } from 'react-router-dom';

const Landing = () => {
  const JWT = true;

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody className='text-center'>
                  {JWT ? (
                    <Link to="/dashboard">
                      <CButton color="success" className="px-4">
                        Dashboard
                      </CButton>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CButton color="success" className="px-4">
                        Login
                      </CButton>
                    </Link>
                  )}
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Landing;
