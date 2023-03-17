import { isNumber } from 'lodash';
const shuffleString = (value: string) => {
  // split string into array of characters
  const arr = value.split('');

  // shuffle array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // join shuffled array back into string
  return arr.join('');
};

export const shuffle = (value: string | number) => {
  if (isNumber(value)) {
    const newValue = shuffleString(value.toString());
    return Number(newValue);
  }
  return shuffleString(value);
};
