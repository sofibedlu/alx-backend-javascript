import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoR, userR] = await Promise.all([
      uploadPhoto(), createUser()]);

    return {
      photo: photoR,
      user: userR,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
