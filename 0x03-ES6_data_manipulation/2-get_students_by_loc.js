export default function getStudentsByLocation(arrayObj, city) {
  const filterd = arrayObj.filter((item) => item.location === city);
  return filterd;
}
