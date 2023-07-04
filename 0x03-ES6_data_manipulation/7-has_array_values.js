export default function hasValuesFromArray(set, array) {
  const setArray = new Set(array);
  for (const elem of setArray) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
