import { CHeaderToggler } from '@coreui/react';

const HeaderToggler = ({ children, ...rest }) => {
  return (
    <CHeaderToggler {...rest}>
      {children}
    </CHeaderToggler>
  )
}

export default HeaderToggler
