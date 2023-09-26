import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];
  try {
    const user = await signUpUser(firstName, lastName);
    results.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (err) {
    results.push({ status: 'rejected', value: err });
  }
  return results;
}

export default handleProfileSignup;
