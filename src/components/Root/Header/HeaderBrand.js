import { CHeaderBrand } from '@coreui/react';

const HeaderBrand = ({ children, ...rest }) => {
  return (
    <CHeaderBrand {...rest}>
      {children}
    </CHeaderBrand>
  )
}

export default HeaderBrand
