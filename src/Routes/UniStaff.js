import { lazy } from 'react';

// Basic Pages
const Dashboard = lazy(() => import('../views/dashboard'));

// Modules
const UniversityTips = lazy(() => import('../views/University/UniversityTips'));
const UniversityFeedback = lazy(() => import('../views/University/UniversityFeedback'));
const StudentReportRemarks = lazy(() => import('../views/University/StudentReportRemarks'));
const UniversityProposalRemarks = lazy(() => import('../views/University/StudentProposalRemarks'));

// Errors
const Page404 = lazy(() => import('../views/Errors/404'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  { path: '/staff/tips', name: 'University Tips', element: UniversityTips },
  { path: '/staff/feedback', name: 'University Feedback', element: UniversityFeedback },
  { path: '/university/report-remarks', name: 'Student Report Remarks', element: StudentReportRemarks },
  { path: '/university/proposal-remarks', name: 'Student Proposal Remarks', element: UniversityProposalRemarks },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },
]

export default routes
