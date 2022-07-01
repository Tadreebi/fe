import { CNavLink } from '@coreui/react';

const NavLink = ({ children, ...rest }) => {
  return (
    <CNavLink {...rest} >
      {children}
    </CNavLink>
  )
};

export default NavLink;
