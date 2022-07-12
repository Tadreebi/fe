import { faBuilding, faBuildingColumns, faCommentDots, faCommentMedical, faDashboard, faFileLines, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Root/Icon';
import { NavGroup, NavItem } from '../components/Root/Nav';
import StudentNavs from "./Students";
import CompNav from "./ComStaff";
import UniNav from "./UniStaff";

const _nav = [
  {
    component: NavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Icon icon={faDashboard} className="px-1" />,
  },
  {
    component: NavGroup,
    name: 'Students',
    to: '/students',
    icon: <Icon icon={faGraduationCap} className="px-1" />,
    items: StudentNavs.filter(nav => nav.name !== "Dashboard")
  },
  {
    component: NavGroup,
    name: 'Company',
    to: '/company',
    icon: <Icon icon={faBuilding} className="px-1" />,
    items: CompNav.filter(nav => nav.name !== "Dashboard")
  },
  {
    component: NavGroup,
    name: 'Univeristy',
    to: '/staff',
    icon: <Icon icon={faBuildingColumns} className="px-1" />,
    items: UniNav.filter(nav => nav.name !== "Dashboard")
  },
];

export default _nav;
