import { CFormLabel } from '@coreui/react';

const Label = ({ children, ...rest }) => {

  return (
    <CFormLabel {...rest}>
      {children}
    </CFormLabel>
  )
}

export default Label
