import { useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import { DashboardPage } from './elements';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [{ element: <DashboardPage />, index: true }],
    },
  ]);
}
