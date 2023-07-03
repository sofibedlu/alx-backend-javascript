export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  const int8Array = new Int8Array(buffer);
  if (position < 0 || position > int8Array.length - 1) {
    throw new Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}
