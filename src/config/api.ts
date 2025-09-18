export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENDPOINTS: {
    USER: '/api/user.json',
    PLANS: '/api/plans.json',
  },
} as const;

export const getApiUrl = (
  endpoint: keyof typeof API_CONFIG.ENDPOINTS
): string => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};
