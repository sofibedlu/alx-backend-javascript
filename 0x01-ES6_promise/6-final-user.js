import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Use Promise.allSettled to wait for all promises to settle
  const results = await Promise.allSettled(promises);

  // Map the results to the desired format
  const formattedResults = results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));

  return formattedResults;
}

export default handleProfileSignup;
