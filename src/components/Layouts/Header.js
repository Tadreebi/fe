import { cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CContainer, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CHeaderToggler, CNavItem, CNavLink } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logo } from 'src/assets/brand/logo'
import DashboardBreadcrumb from 'src/components/Layouts/DashboardBreadcrumb'
import HeaderDropdown from "./HeaderDropdown"

const Header = ({ notDashboard }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const navLinks = [
    { title: "Home", link: "/" },
  ];

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {!notDashboard && (
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        )}

        <CHeaderBrand>
          <Link to="/">
            <CIcon icon={logo} height={30} alt="Logo" />
          </Link>
        </CHeaderBrand>

        <CHeaderNav className="d-none d-md-flex me-auto">
          {navLinks.map(({ title, link }, i) => (
            <CNavItem key={i}>
              <CNavLink to={link} component={NavLink}>
                {title}
              </CNavLink>
            </CNavItem>
          ))}
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          <HeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {!notDashboard && (
        <>
          <CHeaderDivider />
          <CContainer fluid>
            <DashboardBreadcrumb />
          </CContainer>
        </>
      )}
    </CHeader>
  )
};

export default Header
