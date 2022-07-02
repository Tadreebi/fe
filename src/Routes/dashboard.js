import React from 'react'

// Basic Pages
const Dashboard = React.lazy(() => import('../views/dashboard'));

// Modules
//// Students
const StudentReports = React.lazy(() => import('../views/Students/StudentReports'));
const StudentGoals = React.lazy(() => import('../views/Students/StudentGoals'));
const StudentProfile = React.lazy(() => import('../views/Students/StudentProfile'));
const StudentApplication = React.lazy(() => import('../views/Students/StudentApplication'));
const StudentProposals = React.lazy(() => import('../views/Students/StudentProposals'));
const StudentExperiences = React.lazy(() => import('../views/Students/StudentExperience'));

//// University
const UniversityTips = React.lazy(() => import('../views/University/UniversityTips'));
const UniversityFeedback = React.lazy(() => import('../views/University/UniversityFeedback'));
const Faculty = React.lazy(() => import('../views/University/Faculty'));
const SupervisedBy = React.lazy(() => import('../views/University/SupervisedBy'));

//// Company
const OpportunityPosts = React.lazy(() => import('../views/Company/OpportunityPosts'));

// Errors
const Page404 = React.lazy(() => import('../views/Errors/404'));
const Page500 = React.lazy(() => import('../views/Errors/500'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
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
  { path: '/faculty', name: 'Faculty', element: Faculty },
  { path: '/supervised-by', name: 'Supervised By', element: SupervisedBy },

  //// Company
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },

]

export default routes
