import { memo, useState } from 'react'
import { useSelector } from "react-redux"
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Logo from "src/assets/images/logo-w.png"
import AdminNavigation from 'src/Navs'
import CopmStaffNavigation from 'src/Navs/ComStaff'
import StudentNavigation from 'src/Navs/Students'
import UniStaffNavigation from 'src/Navs/UniStaff'
import { Sidebar, SidebarBrand, SidebarNav, SidebarToggler } from '../Root/Sidebar'
import { DashboardSidebarNav } from './DashboardSidebarNav'

const DashboardSidebar = ({ sidebarShow, setSidebarShow }) => {
  const [unfoldable, setUnfoldable] = useState(false)

  const { user } = useSelector(_ => _);

  const decideUser = (type) => {
    switch (type) {
      case "Student": return StudentNavigation;
      case "University Employee": return UniStaffNavigation;
      case "Company": return CopmStaffNavigation;
      default: return AdminNavigation;
    }
  };

  return (
    <Sidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => setSidebarShow(visible)}
    >
      <SidebarBrand className="d-none d-md-flex" to="/">
        <div className="sidebar-brand-full text-center" height={35}>
          <img src={Logo} width="50%" />
        </div>

        <div className="sidebar-brand-narrow" height={35}>
          LG
        </div>
      </SidebarBrand>

      <SidebarNav>
        <SimpleBar>
          <DashboardSidebarNav items={decideUser(user?.type)} />
        </SimpleBar>
      </SidebarNav>

      <SidebarToggler
        className="d-none d-lg-flex"
        onClick={() => setUnfoldable(current => !current)}
      />
    </Sidebar>
  )
};

export default memo(DashboardSidebar);
