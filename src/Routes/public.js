import React from 'react'

// Modules
const Login = React.lazy(() => import('../views/Public/Login'))
const PasswordReset = React.lazy(() => import('../views/Public/PasswordReset'))
const PasswordChange = React.lazy(() => import('../views/Public/PasswordChange'))
const StudentRegister = React.lazy(() => import('../views/Public/StudentRegister'))
const UniversityRegister = React.lazy(() => import('../views/Public/UniversityRegister'))
const CompanyRegister = React.lazy(() => import('../views/Public/CompanyRegister'))
const Page404 = React.lazy(() => import('../views/template/pages/page404'))
const Page500 = React.lazy(() => import('../views/template/pages/page500/Page500'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Login },

  // Auth
  { path: '/login', name: 'Home', element: Login },
  { path: '/password-reset', name: 'Reset Password', element: PasswordReset },
  { path: '/password-change', name: 'Change Password', element: PasswordChange },
  { path: '/register/student', name: 'Student Register', element: StudentRegister },
  { path: '/register/university', name: 'University Register', element: UniversityRegister },
  { path: '/register/company', name: 'Company Register', element: CompanyRegister },
  { path: '*', name: 'Error', element: Page404 },
]

export default routes
