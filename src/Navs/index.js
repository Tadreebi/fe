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
    component: NavTitle,
    name: 'Model Pages',
    icon: <Icon icon={faGraduationCap} className="px-1" />,
  },
  {
    component: NavGroup,
    name: 'Students',
    to: '/students',
    icon: <Icon icon={faGraduationCap} className="px-1" />,
    items: [
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
        name: 'Opportunity Posts',
        to: '/opportunity-posts',
        icon: <Icon icon={faFilePen} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Experiences',
        to: '/experiences-posts',
        icon: <Icon icon={faFilePen} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Student Application',
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
        name: 'Student Experience',
        to: '/students/experiences',
        icon: <Icon icon={faFire} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Company Rating',
        to: '/students/company-rating',
        icon: <Icon icon={faStar} className="px-1" />,
      },
    ]
  },
  {
    component: NavGroup,
    name: 'Company',
    to: '/company',
    icon: <Icon icon={faBuilding} className="px-1" />,
    items: [
      {
        component: NavItem,
        name: 'Opportunity Posts',
        to: '/company/opportunity-posts',
        icon: <Icon icon={faFileLines} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Company App Response',
        to: '/company/response',
        icon: <Icon icon={faFileLines} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Opportunity Reports',
        to: '/company/reports',
        icon: <Icon icon={faFileLines} className="px-1" />,
      },
    ]
  },
  {
    component: NavGroup,
    name: 'Univeristy',
    to: '/staff',
    icon: <Icon icon={faBuildingColumns} className="px-1" />,
    items: [
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
        name: 'Student Proposal Remarks',
        to: '/university/proposal-remarks',
        icon: <Icon icon={faFileLines} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Faculty',
        to: '/faculty',
        icon: <Icon icon={faFire} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Supervised By',
        to: '/supervised-by',
        icon: <Icon icon={faFire} className="px-1" />,
      },
    ]
  },
];

export default _nav;
