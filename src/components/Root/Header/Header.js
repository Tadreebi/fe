import { CHeader } from '@coreui/react';

const Header = ({ title, children, ...rest }) => {

  return (
    <CHeader {...rest}>
      {children}
    </CHeader>
  )
}

export default Header
