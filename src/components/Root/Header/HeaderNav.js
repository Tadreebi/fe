import { CHeaderNav } from '@coreui/react';

const HeaderNav = ({ children, ...rest }) => {
  return (
    <CHeaderNav {...rest}>
      {children}
    </CHeaderNav>
  )
}

export default HeaderNav
