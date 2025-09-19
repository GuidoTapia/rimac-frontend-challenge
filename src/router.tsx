import { Navigate, createBrowserRouter } from 'react-router-dom';

import { paths } from './shared/paths';
import { Layout } from './components';
import { Home, Plans } from './pages';

export const routerConfig = [
  {
    element: <Layout variant='login' />,
    children: [
      {
        path: paths.home,
        element: <Home />,
      },
    ],
  },
  {
    element: <Layout variant='default' />,
    children: [
      {
        path: paths.plans,
        element: <Plans />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={paths.home} />,
  },
];

export const router = createBrowserRouter(routerConfig);
