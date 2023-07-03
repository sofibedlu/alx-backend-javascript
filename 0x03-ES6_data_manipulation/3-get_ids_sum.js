export default function getStudentIdsSum(arrayObj) {
  const ids = arrayObj.map((item) => item.id);
  const result = ids.reduce((accumulator, currentValue) => accumulator + currentValue);
  return result;
}
