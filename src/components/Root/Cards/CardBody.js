import { CCardBody } from '@coreui/react';

const CardBody = ({ children, ...rest }) => {

  return (
    <CCardBody {...rest}>
      {children}
    </CCardBody>
  )
}

export default CardBody
