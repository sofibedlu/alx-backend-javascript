export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const data = { status: 200, body: 'success' };
    console.log('Got a response from the API');
    return data;
  },
  () => new Error());
}
