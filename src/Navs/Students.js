import { faBullseye, faClipboardQuestion, faCommentDots, faComments, faDashboard, faFileAlt, faFilePen, faNewspaper, faStar } from '@fortawesome/free-solid-svg-icons';
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
    name: 'Student Reports',
    to: '/students/reports',
    icon: <Icon icon={faNewspaper} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Goals',
    to: '/students/goals',
    icon: <Icon icon={faBullseye} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Applications',
    to: '/students/application',
    icon: <Icon icon={faFilePen} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Proposals',
    to: '/students/proposals',
    icon: <Icon icon={faClipboardQuestion} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Student Experiences',
    to: '/students/experiences',
    icon: <Icon icon={faComments} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Company Rating',
    to: '/students/company-rating',
    icon: <Icon icon={faStar} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Univerity Feedbacks',
    to: '/students/univerity-feedbacks',
    icon: <Icon icon={faFileAlt} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Univerity Tips',
    to: '/students/univerity-tips',
    icon: <Icon icon={faCommentDots} className="px-1" />,
  },
];

export default _nav;
