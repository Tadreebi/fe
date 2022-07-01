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
  {
    component: CNavTitle,
    name: 'Template',
  },
  {
    component: CNavGroup,
    name: 'Components',
    to: '/base',
    items: [
      {
        component: CNavItem,
        name: 'Colors',
        to: '/theme/colors',
      },
      {
        component: CNavItem,
        name: 'Typography',
        to: '/theme/typography',
      },
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
      {
        component: CNavItem,
        name: 'Charts',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
      {
        component: CNavItem,
        name: 'Widgets',
        to: '/widgets',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    to: '/base',
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
