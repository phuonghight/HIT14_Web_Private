const digit = 999999999999;

const plusOne = (digit) => {
  digit++;
  return digit.toString().split("");
};
console.log(plusOne(digit));
