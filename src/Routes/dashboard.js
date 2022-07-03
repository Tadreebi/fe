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

//// University
const Faculty = lazy(() => import('../views/University/Faculty'));
const SupervisedBy = lazy(() => import('../views/University/SupervisedBy'));
const UniversityTips = lazy(() => import('../views/University/UniversityTips'));
const UniversityFeedback = lazy(() => import('../views/University/UniversityFeedback'));
const StudentReportRemarks = lazy(() => import('../views/University/StudentReportRemarks'));

//// Company
const OpportunityPosts = lazy(() => import('../views/Company/OpportunityPosts'));
const CompanyReport = lazy(() => import('../views/Company/CompanyReport'));

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
  { path: '/students/company-rating', name: 'Company Rating', element: CompanyRating },
  { path: '/students/proposals', name: 'Student Proposals', element: StudentProposals },
  { path: '/students/experiences', name: 'Student Reports', element: StudentExperiences },

  //// Univerity
  { path: '/staff/tips', name: 'University Tips', element: UniversityTips },
  { path: '/staff/feedback', name: 'University Feedback', element: UniversityFeedback },
  { path: '/faculty', name: 'Faculty', element: Faculty },
  { path: '/supervised-by', name: 'Supervised By', element: SupervisedBy },
  { path: '/university/report-remarks', name: 'Student Report Remarks', element: StudentReportRemarks },

  //// Company
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },
  { path: '/company/reports', name: 'Company Reports', element: CompanyReport },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },

]

export default routes
