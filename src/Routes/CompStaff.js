import { lazy } from 'react';

// Basic Pages
const Dashboard = lazy(() => import('../views/dashboard'));

// Modules
const OpportunityPosts = lazy(() => import('../views/Company/OpportunityPosts'));
const CompanyReport = lazy(() => import('../views/Company/CompanyReport'));
const CompanyAppResponse = lazy(() => import('../views/Company/CompanyAppResponse'));

// Errors
const Page404 = lazy(() => import('../views/Errors/404'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  { path: '/company/opportunity-posts', name: 'Opportunity Posts', element: OpportunityPosts },
  { path: '/company/reports', name: 'Company Reports', element: CompanyReport },
  { path: '/company/response', name: 'Company App Response', element: CompanyAppResponse },

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },
]

export default routes
