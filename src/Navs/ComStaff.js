import { faBuildingCircleArrowRight, faBuildingCircleExclamation, faDashboard, faFileLines, faStar } from '@fortawesome/free-solid-svg-icons';
import Icon from '../components/Root/Icon';
import { NavItem } from '../components/Root/Nav';

const _nav = [
  {
    component: NavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Icon icon={faDashboard} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Opportunity Posts',
    to: '/company/opportunity-posts',
    icon: <Icon icon={faBuildingCircleArrowRight} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Company App Response',
    to: '/company/response',
    icon: <Icon icon={faBuildingCircleExclamation} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Company Reports',
    to: '/company/reports',
    icon: <Icon icon={faFileLines} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Company Ratings',
    to: '/company/company-rating-view',
    icon: <Icon icon={faStar} className="px-1" />,
  },
];

export default _nav;
