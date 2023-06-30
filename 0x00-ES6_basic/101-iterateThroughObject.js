export default function iterateThroughObject(reportWithIterator) {
  let nameStr = '';
  let count = 0;
  for (const name of reportWithIterator) {
    nameStr += name;
    if (count !== reportWithIterator.length - 1) {
      nameStr += ' | ';
    }
    count += 1;
  }
  return nameStr;
}
