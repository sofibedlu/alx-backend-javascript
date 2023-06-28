import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((data) => data.body)
    .then((value) => createUser().then((obj) => {
      console.log(`${value} ${obj.firstName} ${obj.lastName}`);
    }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
