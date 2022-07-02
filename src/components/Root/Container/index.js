import { CContainer } from '@coreui/react';

const Container = ({ children, ...rest }) => {
  return (
    <CContainer {...rest}>
      {children}
    </CContainer>
  )
}

export default Container;
