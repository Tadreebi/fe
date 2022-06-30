import { CRow } from '@coreui/react';

const Row = ({ children, ...rest }) => {

  return (
    <CRow {...rest}>
      {children}
    </CRow>
  )
}

export default Row
