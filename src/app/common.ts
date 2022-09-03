export function isArrayEmpty(array: any[]) {
  const isArray = checkIsArray(array);
  if (isArray) {
    return !(array.length > 0);
  }
  return true;
}

export function checkIsArray(array: any[]) {
  return Array.isArray(array);
}
