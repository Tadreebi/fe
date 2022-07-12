import { faBuilding, faBuildingColumns, faBullseye, faClipboardQuestion, faCommentDots, faCommentMedical, faDashboard, faFileLines, faFilePen, faFire, faGraduationCap, faIdBadge, faNewspaper, faStar } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Root/Icon';
import { NavGroup, NavItem, NavTitle } from '../components/Root/Nav';

const _nav = [
  {
    component: NavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Icon icon={faDashboard} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'University Feedback',
    to: '/staff/feedback',
    icon: <Icon icon={faCommentDots} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'University Tips',
    to: '/staff/tips',
    icon: <Icon icon={faCommentMedical} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Report Remarks',
    to: '/university/report-remarks',
    icon: <Icon icon={faFileLines} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Company Reports',
    to: '/university/company-reports',
    icon: <Icon icon={faFileLines} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Proposal Remarks',
    to: '/university/proposal-remarks',
    icon: <Icon icon={faFileLines} className="px-1" />,
  },
];

export default _nav;
