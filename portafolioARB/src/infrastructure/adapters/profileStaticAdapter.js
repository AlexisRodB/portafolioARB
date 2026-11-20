import { profile } from '@/infrastructure/data/profile';

export const profileStaticAdapter = {
  getProfile: () => profile,
};
