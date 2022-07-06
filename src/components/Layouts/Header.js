import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import DashboardBreadcrumb from 'src/components/Layouts/DashboardBreadcrumb'
import Container from '../Root/Container'
import { Header, HeaderBrand, HeaderDivider, HeaderNav, HeaderToggler } from '../Root/Header'
import Icon from '../Root/Icon'
import { NavItem, NavLink as NavRootLink } from '../Root/Nav'
import HeaderDropdown from "./HeaderDropdown"
import Logo from "src/assets/images/logo-c.png"

const HeaderComp = ({ notDashboard, sidebarShow, setSidebarShow }) => {
  const navLinks = [
    { title: "Home", link: "/" },
  ];

  return (
    <Header position="sticky" className="mb-4">
      <Container fluid>
        {!notDashboard && (
          <HeaderToggler
            className="ps-1"
            onClick={() => setSidebarShow(current => !current)}
          >
            <Icon icon={faBars} size="lg" />
          </HeaderToggler>
        )}

        {notDashboard && (
          <>
            <HeaderBrand>
              <Link to="/">
                <img src={Logo} height="50px" />
              </Link>
            </HeaderBrand>

            <HeaderNav className="d-none d-md-flex me-auto">
              {navLinks?.map(({ title, link }, i) => (
                <NavItem key={i}>
                  <NavLink to={link} component={NavRootLink}>
                    {title}
                  </NavLink>
                </NavItem>
              ))}
            </HeaderNav>
          </>
        )}

        <HeaderNav className="ms-3">
          <HeaderDropdown />
        </HeaderNav>
      </Container>
    </Header>
  )
};

export default HeaderComp;
