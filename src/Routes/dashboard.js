import React from 'react'

// Basic Pages
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));

// Modules
const TemplatePage = React.lazy(() => import('../views/templatePage'));
//// Students
const StudentReports = React.lazy(() => import('../views/StudentReports'));
const StudentGoals = React.lazy(() => import('../views/StudentGoals'));
const StudentProfile = React.lazy(() => import('../views/StudentProfile'));
const StudentApplication = React.lazy(() => import('../views/StudentApplication'));
const StudentProposals = React.lazy(() => import('../views/StudentProposals'));
const StudentExperiences = React.lazy(() => import('../views/StudentExperience'));

//// University
const UniversityTips = React.lazy(() => import('../views/UniversityTips'));
const UniversityFeedback = React.lazy(() => import('../views/UniversityFeedback'));

//// Company
const OpportunityPosts = React.lazy(() => import('../views/OpportunityPosts'));

//// Auth
const PasswordReset = React.lazy(() => import('../views/Public/PasswordReset'));
const PasswordChange = React.lazy(() => import('../views/Public/PasswordChange'));
const StudentRegister = React.lazy(() => import('../views/Public/StudentRegister'));
const UniversityRegister = React.lazy(() => import('../views/Public/UniversityRegister'));
const CompanyRegister = React.lazy(() => import('../views/Public/CompanyRegister'));

// Errors
const Page404 = React.lazy(() => import('../views/template/pages/page404'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  { path: '/example', name: 'Template Page', element: TemplatePage },

  //// Students
  { path: '/students/reports', name: 'Student Reports', element: StudentReports },
  { path: '/students/goals', name: 'Student Goals', element: StudentGoals },
  { path: '/students/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/students/application', name: 'Student Application', element: StudentApplication },
  { path: '/students/proposals', name: 'Student Proposals', element: StudentProposals },
  { path: '/students/experiences', name: 'Student Reports', element: StudentExperiences },

  //// Univerity
  { path: '/staff/tips', name: 'University Tips', element: UniversityTips },
  { path: '/staff/feedback', name: 'University Feedback', element: UniversityFeedback },

  //// Company
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },

  //// Auth
  { path: '/password/reset', name: 'Reset Password', element: PasswordReset },
  { path: '/password/change', name: 'Change Password', element: PasswordChange },
  { path: '/register/student', name: 'Student Register', element: StudentRegister },
  { path: '/register/university', name: 'University Register', element: UniversityRegister },
  { path: '/register/company', name: 'Company Register', element: CompanyRegister },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },

]

export default routes
