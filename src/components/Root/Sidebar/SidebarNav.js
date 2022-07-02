import { CSidebarNav } from '@coreui/react';

const SidebarNav = ({ children, ...rest }) => {
  return (
    <CSidebarNav {...rest}>
      {children}
    </CSidebarNav>
  )
}

export default SidebarNav;
