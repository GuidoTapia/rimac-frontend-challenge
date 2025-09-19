import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/main.scss';

import { router } from './router';
import { UserProvider } from './shared/user/user-provider';
import {
  QueryClient,
  QueryClientProvider,
} from '@ts-rest/react-query/tanstack';

const queryClient = new QueryClient();

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
