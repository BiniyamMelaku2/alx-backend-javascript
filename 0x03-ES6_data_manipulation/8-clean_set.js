export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  let concat = '';
  set.forEach((value) => {
    if (value && value.startsWith(startString)) concat += `${value.slice(startString.length)}-`;
  });
  return concat;
}
