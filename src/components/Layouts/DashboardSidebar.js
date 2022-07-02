import { memo, useState } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import navigation from 'src/_nav'
import { Sidebar, SidebarBrand, SidebarNav, SidebarToggler } from '../Root/Sidebar'
import { DashboardSidebarNav } from './DashboardSidebarNav'

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
        <div className="sidebar-brand-full" height={35}>
          Logo
        </div>

        <div className="sidebar-brand-narrow" height={35}>
          LG
        </div>
      </SidebarBrand>

      <SidebarNav>
        <SimpleBar>
          <DashboardSidebarNav items={navigation} />
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
