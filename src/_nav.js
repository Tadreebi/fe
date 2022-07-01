import { fa1, faBuilding, faBuildingColumns, faBullseye, faClipboardQuestion, faCommentDots, faCommentMedical, faDashboard, faFileLines, faFilePen, faFingerprint, faFire, faGraduationCap, faIdBadge, faLockOpen, faNewspaper, faUnlock, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Root/Icon';
import { NavGroup, NavItem, NavTitle } from './components/Root/Nav';

const _nav = [
  {
    component: NavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <Icon icon={faDashboard} className="px-1" />,
  },
  {
    component: NavItem,
    name: 'Template Page',
    to: '/example',
    icon: <Icon icon={fa1} className="px-1" />,
    badge: {
      color: 'danger',
      text: 'Check',
    },
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
        name: 'Student Profile',
        to: '/students/profile',
        icon: <Icon icon={faIdBadge} className="px-1" />,
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
    ]
  },
  {
    component: NavGroup,
    name: 'Auth Pages',
    to: '/auth',
    icon: <Icon icon={faFingerprint} className="px-1" />,
    items: [
      {
        component: NavItem,
        name: 'Reset Password',
        to: '/password/reset',
        icon: <Icon icon={faUnlockKeyhole} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Student Register',
        to: '/register/student',
        icon: <Icon icon={faLockOpen} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Change Password',
        to: '/password/change',
        icon: <Icon icon={faUnlock} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'University Register',
        to: '/register/university',
        icon: <Icon icon={faLockOpen} className="px-1" />,
      },
      {
        component: NavItem,
        name: 'Company Register',
        to: '/register/company',
        icon: <Icon icon={faLockOpen} className="px-1" />,
      },
    ]
  },
  {
    component: NavItem,
    name: 'University Tips',
    to: '/university/tips',
    icon: <Icon icon={faCommentMedical} className="px-1" />,
  },
];

export default _nav;
