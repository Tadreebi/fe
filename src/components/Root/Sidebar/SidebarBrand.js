import { CSidebarBrand } from '@coreui/react';

const SidebarBrand = ({ children, ...rest }) => {
  return (
    <CSidebarBrand {...rest}>
      {children}
    </CSidebarBrand>
  )
}

export default SidebarBrand;
