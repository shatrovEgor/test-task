import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ChangePasswordPage from './pages/ChangePasswordPage';

export const privateRoutes = [
  { path: '*', element: <ChangePasswordPage />, id: 1 },
  { path: 'change_pass', element: <ChangePasswordPage />, id: 2 },
];

export const publicRoutes = [
  { path: '/', element: <LoginPage />, id: 1 },
  { path: '*', element: <LoginPage />, id: 2 },
  { path: 'registration', element: <RegistrationPage />, id: 3 },
];
