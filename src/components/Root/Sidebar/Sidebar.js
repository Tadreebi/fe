import { CSidebar } from '@coreui/react';

const Sidebar = ({ children, ...rest }) => {
  return (
    <CSidebar {...rest} style={{ background: "linear-gradient(45deg, #073763, #083f70)" }}>
      {children}
    </CSidebar>
  )
}

export default Sidebar;
