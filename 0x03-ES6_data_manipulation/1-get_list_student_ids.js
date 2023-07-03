export default function getListStudentIds(arrayObj) {
  if (!Array.isArray(arrayObj)) {
    return [];
  }

  const ids = arrayObj.map((item) => item.id);

  return ids;
}
