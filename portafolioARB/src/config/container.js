import { createGetProfile } from '@/application/use-cases/getProfile';
import { profileStaticAdapter } from '@/infrastructure/adapters/profileStaticAdapter';

export const getProfile = createGetProfile(profileStaticAdapter);
