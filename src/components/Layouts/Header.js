import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logo } from 'src/assets/brand/logo'
import DashboardBreadcrumb from 'src/components/Layouts/DashboardBreadcrumb'
import Container from '../Root/Container'
import { Header, HeaderBrand, HeaderDivider, HeaderNav, HeaderToggler } from '../Root/Header'
import Icon from '../Root/Icon'
import { NavItem, NavLink as NavRootLink } from '../Root/Nav'
import HeaderDropdown from "./HeaderDropdown"

const HeaderComp = ({ notDashboard }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const navLinks = [
    { title: "Home", link: "/" },
  ];

  return (
    <Header position="sticky" className="mb-4">
      <Container fluid>
        {!notDashboard && (
          <HeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'setSideBar', sidebarShow: !sidebarShow })}
          >
            <Icon icon={faBars} size="lg" />
          </HeaderToggler>
        )}

        <HeaderBrand>
          <Link to="/">
            <Icon icon={logo} height={30} alt="Logo" />
          </Link>
        </HeaderBrand>

        <HeaderNav className="d-none d-md-flex me-auto">
          {navLinks.map(({ title, link }, i) => (
            <NavItem key={i}>
              <NavLink to={link} component={NavRootLink}>
                {title}
              </NavLink>
            </NavItem>
          ))}
        </HeaderNav>

        <HeaderNav className="ms-3">
          <HeaderDropdown />
        </HeaderNav>
      </Container>
      {!notDashboard && (
        <>
          <HeaderDivider />
          <Container fluid>
            <DashboardBreadcrumb />
          </Container>
        </>
      )}
    </Header>
  )
};

export default HeaderComp;
