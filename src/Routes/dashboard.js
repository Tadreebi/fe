import { lazy } from 'react';

// Basic Pages
const Dashboard = lazy(() => import('../views/dashboard'));

// Modules
//// Students
const StudentReports = lazy(() => import('../views/Students/StudentReports'));
const StudentGoals = lazy(() => import('../views/Students/StudentGoals'));
const StudentProfile = lazy(() => import('src/views/Public/StudentProfile'));
const StudentApplication = lazy(() => import('../views/Students/StudentApplication'));
const StudentProposals = lazy(() => import('../views/Students/StudentProposals'));
const StudentExperiences = lazy(() => import('../views/Students/StudentExperience'));

//// University
const UniversityTips = lazy(() => import('../views/University/UniversityTips'));
const UniversityFeedback = lazy(() => import('../views/University/UniversityFeedback'));

//// Company
const OpportunityPosts = lazy(() => import('../views/Company/OpportunityPosts'));

// Errors
const Page404 = lazy(() => import('../views/Errors/404'));
const Page500 = lazy(() => import('../views/Errors/500'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  //// Students
  { path: '/students/reports', name: 'Student Reports', element: StudentReports },
  { path: '/students/goals', name: 'Student Goals', element: StudentGoals },
  { path: '/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/students/application', name: 'Student Application', element: StudentApplication },
  { path: '/students/proposals', name: 'Student Proposals', element: StudentProposals },
  { path: '/students/experiences', name: 'Student Reports', element: StudentExperiences },

  //// Univerity
  { path: '/staff/tips', name: 'University Tips', element: UniversityTips },
  { path: '/staff/feedback', name: 'University Feedback', element: UniversityFeedback },

  //// Company
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },

]

export default routes
