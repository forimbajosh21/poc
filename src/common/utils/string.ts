export const getInitial = (name: string): string => {
  const result = name.match(/(\b\S)?/g)?.join('').match(/(^\S|\S$)?/g)?.join('')
    .toUpperCase();

  return result || '';
};

export const capitalize = (value: string): string => value && value.charAt(0).toUpperCase() + value.slice(1);

export const makeUpper = (value: string): string => value && value.toUpperCase();
