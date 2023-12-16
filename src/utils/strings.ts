export const removeNonDigits = (str: string) => str.replace(/\D/g, "");

export const getCalibrationValue = (str: string) => {
  const digits = removeNonDigits(str);
  const first = digits[0];
  const last = digits[digits.length - 1];
  return Number(`${first}${last}`);
};

const strToDigit: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export const expandDigits = (str: string): string => {
  let expanded = str;
  for (const [key, value] of Object.entries(strToDigit)) {
    expanded = expanded.replaceAll(key, `${key}${value}${key}`);
  }
  return expanded;
};
