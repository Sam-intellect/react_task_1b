export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const getNonNullValue = (value) => {
  return value ? value : undefined;
};
