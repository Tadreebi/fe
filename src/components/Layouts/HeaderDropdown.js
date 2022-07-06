import { faBell, faCheckCircle, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import placeholder from "src/assets/images/PortraitPlaceholder.png";
import Avatar from '../Root/Avatar';
import Badge from '../Root/Badge';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../Root/Dropdown';
import Icon from '../Root/Icon';

const HeaderDropdown = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const onSignOut = () => {
    dispatch({ type: 'setJWT', JWT: "" })
    dispatch({ type: 'setUser', user: {} })
    navigate("/")
  };

  return (
    <Dropdown variant="nav-item">
      <DropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <Avatar src={placeholder} size="md" />
      </DropdownToggle>

      <DropdownMenu className="pt-0" placement="bottom-end">
        <DropdownItem disabled>
          <Icon icon={faBell} className="me-2" />
          Notifications
          <Badge color="warning" className="ms-2">
            soon
          </Badge>
        </DropdownItem>

        <DropdownItem disabled>
          <Icon icon={faCheckCircle} className="me-2" />
          Reminders
          <Badge color="warning" className="ms-2">
            soon
          </Badge>
        </DropdownItem>

        <Link to="/profile">
          <DropdownItem>
            <Icon icon={faUser} className="me-2" />
            Profile
          </DropdownItem>
        </Link>

        <DropdownItem onClick={onSignOut}>
          <Icon icon={faLock} className="me-2" />
          Sign Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};

export default HeaderDropdown;
