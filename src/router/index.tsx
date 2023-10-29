import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { NotFound } from '../pages/NotFound';
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details',
        element: <Details />
      },
      {
        path: '/not-found',
        element: <NotFound />
      },
    ]
  }
]);