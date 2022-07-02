import { CNavGroup } from '@coreui/react';

const NavGroup = ({ children, ...rest }) => {
  return (
    <CNavGroup {...rest} >
      {children}
    </CNavGroup>
  )
};

export default NavGroup;
