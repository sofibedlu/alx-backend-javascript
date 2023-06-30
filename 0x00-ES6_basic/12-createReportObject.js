export default function createReportObject(employeesList) {
  const obj = {
    ...employeesList,
  };

  const result = {
    allEmployees: obj,
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };
  return result;
}
