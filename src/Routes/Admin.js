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
const OpportunityPostsList = lazy(() => import('src/views/Public/OpportunityPosts'));


//// University
const UniversityTips = lazy(() => import('../views/University/UniversityTips'));
const UniversityFeedback = lazy(() => import('../views/University/UniversityFeedback'));
const StudentReportRemarks = lazy(() => import('../views/University/StudentReportRemarks'));
const UniversityProposalRemarks = lazy(() => import('../views/University/StudentProposalRemarks'));


//// Company
const OpportunityPosts = lazy(() => import('../views/Company/OpportunityPosts'));
const CompanyReport = lazy(() => import('../views/Company/CompanyReport'));
const CompanyAppResponse = lazy(() => import('../views/Company/CompanyAppResponse'));
const CompanyRatingView = lazy(() => import('../views/Company/CompanyRating'));


// Errors
const Page404 = lazy(() => import('../views/Errors/404'));
const Page500 = lazy(() => import('../views/Errors/500'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  //// Students
  { path: '/students/reports', name: 'Student Reports', element: StudentReports },
  { path: '/students/goals', name: 'Student Goals', element: StudentGoals },
  { path: '/profile', name: 'Student Profile', element: StudentProfile },
  { path: '/students/application', name: 'Student Application', element: StudentApplication },
  { path: '/students/company-rating', name: 'Company Rating', element: CompanyRating },
  { path: '/students/proposals', name: 'Student Proposals', element: StudentProposals },
  { path: '/students/experiences', name: 'Student Experiences', element: StudentExperiences },
  { path: '/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPostsList },

  //// Univerity
  { path: '/staff/tips', name: 'University Tips', element: UniversityTips },
  { path: '/staff/feedback', name: 'University Feedback', element: UniversityFeedback },
  { path: '/university/report-remarks', name: 'Student Report Remarks', element: StudentReportRemarks },
  { path: '/university/proposal-remarks', name: 'Student Proposal Remarks', element: UniversityProposalRemarks },

  //// Company
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },
  { path: '/company/reports', name: 'Company Reports', element: CompanyReport },
  { path: '/company/response', name: 'Company App Response', element: CompanyAppResponse },
  { path: '/company/company-rating-view', name: 'Company Rating', element: CompanyRatingView },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },
]

export default routes
