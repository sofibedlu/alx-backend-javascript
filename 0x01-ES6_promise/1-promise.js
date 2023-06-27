export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const stat = { status: 200, body: 'Success' };
    if (success) {
      resolve(stat);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
