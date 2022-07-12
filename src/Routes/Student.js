import { lazy } from 'react';

// Basic Pages
const Dashboard = lazy(() => import('../views/dashboard'));

// Modules
//// Students
const StudentReports = lazy(() => import('../views/Students/StudentReports'));
const StudentGoals = lazy(() => import('../views/Students/StudentGoals'));
const StudentProfile = lazy(() => import('src/views/Public/StudentProfile'));
const StudentApplication = lazy(() => import('../views/Students/StudentApplication'));
const CompanyRating = lazy(() => import('../views/Students/CompanyRating'));
const StudentProposals = lazy(() => import('../views/Students/StudentProposals'));
const StudentExperiences = lazy(() => import('../views/Students/StudentExperience'));
const UniverityFeedbacks = lazy(() => import('../views/Students/UniversityFeedback'));
const UniverityTips = lazy(() => import('../views/Students/UniversityTips'));

// Errors
const Page404 = lazy(() => import('../views/Errors/404'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  { path: '/students/reports', name: 'Student Reports', element: StudentReports },
  { path: '/students/goals', name: 'Student Goals', element: StudentGoals },
  { path: '/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/students/application', name: 'Student Application', element: StudentApplication },
  { path: '/students/company-rating', name: 'Company Rating', element: CompanyRating },
  { path: '/students/proposals', name: 'Student Proposals', element: StudentProposals },
  { path: '/students/experiences', name: 'Student Experiences', element: StudentExperiences },
  { path: '/students/univerity-feedbacks', name: 'Univerity Feedbacks', element: UniverityFeedbacks },
  { path: '/students/univerity-tips', name: 'Univerity Tips', element: UniverityTips },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },
]

export default routes
