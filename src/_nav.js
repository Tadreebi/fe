import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { fa1, faBuilding, faBuildingColumns, faBullseye, faClipboardQuestion, faCommentDots, faCommentMedical, faDashboard, faFileLines, faFilePen, faFingerprint, faFire, faGraduationCap, faIdBadge, faLockOpen, faNewspaper, faUnlock, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FontAwesomeIcon icon={faDashboard} className="px-1" />,
  },
  {
    component: CNavItem,
    name: 'Template Page',
    to: '/example',
    icon: <FontAwesomeIcon icon={fa1} className="px-1" />,
    badge: {
      color: 'danger',
      text: 'Check',
    },
  },
  {
    component: CNavTitle,
    name: 'Model Pages',
    icon: <FontAwesomeIcon icon={faGraduationCap} className="px-1" />,
  },
  {
    component: CNavGroup,
    name: 'Students',
    to: '/students',
    icon: <FontAwesomeIcon icon={faGraduationCap} className="px-1" />,
    items: [
      {
        component: CNavItem,
        name: 'Student Reports',
        to: '/students/reports',
        icon: <FontAwesomeIcon icon={faNewspaper} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Goals',
        to: '/students/goals',
        icon: <FontAwesomeIcon icon={faBullseye} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Profile',
        to: '/students/profile',
        icon: <FontAwesomeIcon icon={faIdBadge} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Application',
        to: '/students/application',
        icon: <FontAwesomeIcon icon={faFilePen} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Proposals',
        to: '/students/proposals',
        icon: <FontAwesomeIcon icon={faClipboardQuestion} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Experience',
        to: '/students/experiences',
        icon: <FontAwesomeIcon icon={faFire} className="px-1" />,
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Company',
    to: '/company',
    icon: <FontAwesomeIcon icon={faBuilding} className="px-1" />,
    items: [
      {
        component: CNavItem,
        name: 'Opportunity Posts',
        to: '/company/opportunity-posts',
        icon: <FontAwesomeIcon icon={faFileLines} className="px-1" />,
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Univeristy',
    to: '/staff',
    icon: <FontAwesomeIcon icon={faBuildingColumns} className="px-1" />,
    items: [
      {
        component: CNavItem,
        name: 'University Feedback',
        to: '/staff/feedback',
        icon: <FontAwesomeIcon icon={faCommentDots} className="px-1" />,
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Auth Pages',
    to: '/auth',
    icon: <FontAwesomeIcon icon={faFingerprint} className="px-1" />,
    items: [
      {
        component: CNavItem,
        name: 'Reset Password',
        to: '/password/reset',
        icon: <FontAwesomeIcon icon={faUnlockKeyhole} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Student Register',
        to: '/register/student',
        icon: <FontAwesomeIcon icon={faLockOpen} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Change Password',
        to: '/password/change',
        icon: <FontAwesomeIcon icon={faUnlock} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'University Register',
        to: '/register/university',
        icon: <FontAwesomeIcon icon={faLockOpen} className="px-1" />,
      },
      {
        component: CNavItem,
        name: 'Company Register',
        to: '/register/company',
        icon: <FontAwesomeIcon icon={faLockOpen} className="px-1" />,
      },
    ]
  },
  {
    component: CNavItem,
    name: 'University Tips',
    to: '/university/tips',
    icon: <FontAwesomeIcon icon={faCommentMedical} className="px-1" />,
  },
];

export default _nav;
