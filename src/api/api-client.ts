import { initContract, tsRestFetchApi } from '@ts-rest/core';
import { initTsrReactQuery } from '@ts-rest/react-query/v5';
import { z } from 'zod';

import { userSchema } from './services/users/users.dto';
import { planSchema } from './services/plans/plans.dto';

const c = initContract();

export const contract = c.router({
  users: {
    method: 'GET',
    path: '/user.json',
    responses: {
      200: userSchema,
    },
    summary: 'Signup for admin or a organization',
  },
  plans: {
    method: 'GET',
    path: '/plans.json',
    responses: {
      200: z.object({
        list: planSchema.array(),
      }),
    },
  },
});

export const tsr = initTsrReactQuery(contract, {
  baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
  baseHeaders: {},
  api: tsRestFetchApi,
});
