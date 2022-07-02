import { CSpinner } from '@coreui/react';

const Spinner = ({ children, ...rest }) => {
  return (
    <CSpinner {...rest}>
      {children}
    </CSpinner>
  )
}

export default Spinner;
