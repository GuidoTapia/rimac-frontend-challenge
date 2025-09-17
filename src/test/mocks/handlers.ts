import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'https://rimac-front-end-challenge.netlify.app/api/user.json',
    () => {
      return HttpResponse.json({
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
      });
    }
  ),

  http.get(
    'https://rimac-front-end-challenge.netlify.app/api/plans.json',
    () => {
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
    }
  ),
];
