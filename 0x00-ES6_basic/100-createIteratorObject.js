export default function createIteratorObject(report) {
  const obj = report.allEmployees;
  const result = Object.values(obj).flatMap((namesArray) => namesArray);
  return result;
}
