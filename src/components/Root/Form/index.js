import { CForm } from '@coreui/react';

const Form = ({ children, ...rest }) => {

  return (
    <CForm {...rest}>
      {children}
    </CForm>
  )
}

export default Form
