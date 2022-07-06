import { faBell, faCheckCircle, faComments, faGear, faLock, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import avatar8 from 'src/assets/images/avatars/8.jpg';
import Avatar from '../Root/Avatar';
import Badge from '../Root/Badge';
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from '../Root/Dropdown';
import Icon from '../Root/Icon';

const HeaderDropdown = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const onSignOut = () => {
    dispatch({ type: 'setJWT', JWT: "" })
    navigate("/")
  };

  return (
    <Dropdown variant="nav-item">
      <DropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <Avatar src={avatar8} size="md" />
      </DropdownToggle>

      <DropdownMenu className="pt-0" placement="bottom-end">
        <DropdownHeader className="bg-light fw-semibold py-2">
          Account
        </DropdownHeader>

        <DropdownItem href="#" disabled>
          <Icon icon={faBell} className="me-2" />
          Updates
          <Badge color="info" className="ms-2">
            42
          </Badge>
        </DropdownItem>

        <DropdownItem href="#" disabled >
          <Icon icon={faSquareEnvelope} className="me-2" />
          Messages
          <Badge color="success" className="ms-2">
            42
          </Badge>
        </DropdownItem>

        <DropdownItem href="#" disabled>
          <Icon icon={faCheckCircle} className="me-2" />
          Tasks
          <Badge color="danger" className="ms-2">
            42
          </Badge>
        </DropdownItem>

        <DropdownItem href="#" disabled>
          <Icon icon={faComments} className="me-2" />
          Comments
          <Badge color="warning" className="ms-2">
            42
          </Badge>
        </DropdownItem>

        <DropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </DropdownHeader>

        <Link to="/profile">
          <DropdownItem>
            <Icon icon={faUser} className="me-2" />
            Profile
          </DropdownItem>
        </Link>

        <DropdownItem href="#" disabled>
          <Icon icon={faGear} className="me-2" />
          Settings
        </DropdownItem>

        <DropdownItem onClick={onSignOut}>
          <Icon icon={faLock} className="me-2" />
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};

export default HeaderDropdown;
