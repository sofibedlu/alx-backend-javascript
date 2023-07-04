export default function cleanSet(set, startString) {
  const newStr = [];
  if (startString === '') {
    return '';
  }
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      newStr.push(elem.slice(startString.length));
    }
  }
  return newStr.join('-');
}
