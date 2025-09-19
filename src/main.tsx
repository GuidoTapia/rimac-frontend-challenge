import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/main.scss';

import { router } from './router';
import { UserProvider } from './shared/user/user-provider';

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
