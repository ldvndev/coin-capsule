import { createBrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { NotFound } from '../pages/NotFound';

export const router = createBrowserRouter([
  {
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