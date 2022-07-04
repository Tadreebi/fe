import { lazy } from 'react';

// Modules
const Login = lazy(() => import('../views/Public/Auth/Login'));
const PasswordReset = lazy(() => import('../views/Public/Auth/PasswordReset'));
const PasswordChange = lazy(() => import('../views/Public/Auth/PasswordChange'));
const StudentRegister = lazy(() => import('../views/Public/Auth/StudentRegister'));
const UniversityRegister = lazy(() => import('../views/Public/Auth/UniversityRegister'));
const CompanyRegister = lazy(() => import('../views/Public/Auth/CompanyRegister'));
const StudentProfile = lazy(() => import('src/views/Public/StudentProfile'));
const OpportunityPosts = lazy(() => import('src/views/Public/OpportunityPosts'));
const ExperiencesList = lazy(() => import('src/views/Public/Experiences'));


// Errors
const Page404 = lazy(() => import('../views/Errors/404'));
const Page500 = lazy(() => import('../views/Errors/500'));

const routes = [
  { path: '/', exact: true, name: 'Home', element: Login },

  // Auth
  { path: '/login', name: 'Home', element: Login },
  { path: '/profile', name: 'Profile', element: StudentProfile },
  { path: '/posts', name: 'Opportunity Posts', element: OpportunityPosts },
  { path: '/posts', name: 'Experiences Posts', element: ExperiencesList },
  { path: '/password/reset', name: 'Reset Password', element: PasswordReset },
  { path: '/password/change', name: 'Change Password', element: PasswordChange },
  { path: '/register/student', name: 'Student Register', element: StudentRegister },
  { path: '/register/university', name: 'University Register', element: UniversityRegister },
  { path: '/register/company', name: 'Company Register', element: CompanyRegister },

  // Errors
  { path: '*', name: 'Error', element: Page404 },
]

export default routes
