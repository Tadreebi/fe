import { CSidebar } from '@coreui/react';

const Sidebar = ({ children, ...rest }) => {
  return (
    <CSidebar {...rest}>
      {children}
    </CSidebar>
  )
}

export default Sidebar;
