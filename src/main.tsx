import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import HomePage from './pages';
import InternalServerErrorPage from './pages/500';
import CalendarPage from './pages/apps/calendar';
import ChartPage from './pages/apps/chart';
import TablePage from './pages/apps/table';
import SignInPage from './pages/auth/sign-in';
import SignUpPage from './pages/auth/sign-up';
import ForgetPasswordPage from './pages/password/forget';
import ResetPasswordPage from './pages/password/reset';
import ProfilePage from './pages/user/profile';
import SettingsPage from './pages/user/settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/apps/calendar',
    element: <CalendarPage />,
    errorElement: <InternalServerErrorPage />,
  },
  {
    path: '/apps/chart',
    element: <ChartPage />,
  },
  {
    path: '/apps/table',
    element: <TablePage />,
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/auth/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/password/forget',
    element: <ForgetPasswordPage />,
  },
  {
    path: '/password/reset',
    element: <ResetPasswordPage />,
  },
  {
    path: '/user/profile',
    element: <ProfilePage />,
  },
  {
    path: '/user/settings',
    element: <SettingsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
