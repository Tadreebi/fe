import { lazy } from 'react';
import ComRoutes from "./CompStaff";
import StudentRoutes from "./Student";
import UniRoutes from "./UniStaff";

// Basic Pages
const Dashboard = lazy(() => import('../views/dashboard'));

// Errors
const Page404 = lazy(() => import('../views/Errors/404'));
const Page500 = lazy(() => import('../views/Errors/500'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Modules
  //// Students
  ...StudentRoutes.filter(route => route.name !== "Dashboard" && route.name !== "Error 404"),

  //// Univerity
  ...UniRoutes.filter(route => route.name !== "Dashboard" && route.name !== "Error 404"),

  //// Company
  ...ComRoutes.filter(route => route.name !== "Dashboard" && route.name !== "Error 404"),

  //// Errors
  { path: '*', name: 'Error 404', element: Page404 },
]

export default routes
