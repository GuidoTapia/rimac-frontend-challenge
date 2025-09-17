import { http, HttpResponse } from 'msw';
import { getApiUrl } from '../../config/api';

export const handlers = [
  http.get(getApiUrl('USER'), () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
    });
  }),

  http.get(getApiUrl('PLANS'), () => {
    return HttpResponse.json([
      {
        id: '1',
        name: 'Basic Plan',
        description: 'Basic insurance coverage',
        price: 100,
        features: ['Feature 1', 'Feature 2'],
      },
      {
        id: '2',
        name: 'Premium Plan',
        description: 'Premium insurance coverage',
        price: 200,
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
      },
    ]);
  }),
];
