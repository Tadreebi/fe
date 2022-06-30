import { CButton } from '@coreui/react';

const Button = ({ children, ...rest }) => {

  return (
    <CButton {...rest} >
      {children}
    </CButton>
  )
}

export default Button
