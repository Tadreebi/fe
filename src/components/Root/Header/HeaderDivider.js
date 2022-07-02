import { CHeaderDivider } from '@coreui/react';

const HeaderDivider = ({ children, ...rest }) => {
  return (
    <CHeaderDivider {...rest}>
      {children}
    </CHeaderDivider>
  )
}

export default HeaderDivider
