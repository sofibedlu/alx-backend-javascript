import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  return Promise.all(promises)
    .then((results) => {
      return results.map((result) => ({
       status: 'fulfilled',
       value: result,
      }));
    });
    .catch((errors) => {
      return errors.map(error => ({
        status: 'rejected',
        value: error,
      }));
    });
}
