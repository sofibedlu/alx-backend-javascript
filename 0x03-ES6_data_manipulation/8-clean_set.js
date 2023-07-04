export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const newStr = [];
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      newStr.push(elem.slice(startString.length));
    }
  }
  return newStr.join('-');
}
