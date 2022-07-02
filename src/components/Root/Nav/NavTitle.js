import { CNavTitle } from '@coreui/react';

const NavTitle = ({ children, ...rest }) => {
  return (
    <CNavTitle {...rest} >
      {children}
    </CNavTitle>
  )
};

export default NavTitle;
