import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import navigation from 'src/_nav'
import Icon from '../Root/Icon'
import { Sidebar, SidebarBrand, SidebarNav, SidebarToggler } from '../Root/Sidebar'
import { DashboardSidebarNav } from './DashboardSidebarNav'

const DashboardSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <Sidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'setSideBar', sidebarShow: visible })
      }}
    >
      <SidebarBrand className="d-none d-md-flex" to="/">
        <Icon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <Icon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </SidebarBrand>

      <SidebarNav>
        <SimpleBar>
          <DashboardSidebarNav items={navigation} />
        </SimpleBar>
      </SidebarNav>

      <SidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'setSideBar', sidebarUnfoldable: !unfoldable })}
      />
    </Sidebar>
  )
}

export default memo(DashboardSidebar)
