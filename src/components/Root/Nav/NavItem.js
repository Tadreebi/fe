import { CNavItem } from '@coreui/react';

const NavItem = ({ children, ...rest }) => {
  return (
    <CNavItem {...rest} >
      {children}
    </CNavItem>
  )
};

export default NavItem;
