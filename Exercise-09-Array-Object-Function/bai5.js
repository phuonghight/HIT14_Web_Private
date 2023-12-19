const arr = [0, 0, 12, 0 ,1, 3, 0];
const removeZero = (arr) => {
  let i = 0;
  let k = arr.length - 1;
  while (i < k) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
      arr.push(0);
      k--;
    } else i++;
  }
  return arr;
};

console.log(removeZero(arr));
