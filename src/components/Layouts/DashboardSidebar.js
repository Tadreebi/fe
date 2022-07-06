import { memo, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Navigation from 'src/Navs'
import { Sidebar, SidebarBrand, SidebarNav, SidebarToggler } from '../Root/Sidebar'
import { DashboardSidebarNav } from './DashboardSidebarNav'
import Logo from "src/assets/images/logo-w.png"

const DashboardSidebar = ({ sidebarShow, setSidebarShow }) => {
  const [unfoldable, setUnfoldable] = useState(false)

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
          <DashboardSidebarNav items={Navigation} />
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
