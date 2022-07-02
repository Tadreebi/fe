import { CSidebarToggler } from '@coreui/react';

const SidebarToggler = ({ children, ...rest }) => {
  return (
    <CSidebarToggler {...rest}>
      {children}
    </CSidebarToggler>
  )
}

export default SidebarToggler;
