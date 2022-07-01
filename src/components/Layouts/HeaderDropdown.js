import { faBell, faCheckCircle, faComments, faCreditCard, faFile, faGear, faLock, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import avatar8 from 'src/assets/images/avatars/8.jpg';
import Avatar from '../Root/Avatar';
import Badge from '../Root/Badge';
import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from '../Root/Dropdown';
import Icon from '../Root/Icon';

const HeaderDropdown = () => {
  return (
    <Dropdown variant="nav-item">
      <DropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <Avatar src={avatar8} size="md" />
      </DropdownToggle>
      <DropdownMenu className="pt-0" placement="bottom-end">
        <DropdownHeader className="bg-light fw-semibold py-2">Account</DropdownHeader>
        <DropdownItem href="#">
          <Icon icon={faBell} className="me-2" />
          Updates
          <Badge color="info" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faSquareEnvelope} className="me-2" />
          Messages
          <Badge color="success" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faCheckCircle} className="me-2" />
          Tasks
          <Badge color="danger" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faComments} className="me-2" />
          Comments
          <Badge color="warning" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownHeader className="bg-light fw-semibold py-2">Settings</DropdownHeader>
        <DropdownItem href="#">
          <Icon icon={faUser} className="me-2" />
          Profile
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faGear} className="me-2" />
          Settings
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faCreditCard} className="me-2" />
          Payments
          <Badge color="secondary" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownItem href="#">
          <Icon icon={faFile} className="me-2" />
          Projects
          <Badge color="primary" className="ms-2">
            42
          </Badge>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem href="#">
          <Icon icon={faLock} className="me-2" />
          Lock Account
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
};

export default HeaderDropdown;
