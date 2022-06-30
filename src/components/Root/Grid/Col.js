import { CCol } from '@coreui/react';

const Col = ({ children, ...rest }) => {

  return (
    <CCol {...rest}>
      {children}
    </CCol>
  )
}

export default Col
