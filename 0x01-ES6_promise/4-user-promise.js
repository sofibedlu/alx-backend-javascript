export default function signUpUser(firstName, lastName) {
  const data = { firstName, lastName };
  return Promise.resolve(data);
}
