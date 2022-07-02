import { CFooter } from '@coreui/react';

const Footer = ({ children, ...rest }) => {
  return (
    <CFooter {...rest}>
      {children}
    </CFooter>
  )
}

export default Footer;
