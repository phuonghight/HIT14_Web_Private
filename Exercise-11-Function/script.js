function myReduce(arr, callbackFn, initValue) {
  initValue ??= arr[0];
  let t = initValue;
  for (let i = !!initValue ? 1 : 0; i < arr.length; i++) {
    t = callbackFn(t, arr[i], i);
  }
  return t;
}

function myFind(arr, callbackFn) {
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i], i)) {
      return arr[i];
    }
  }
}

function mySort(arr, callbackFn) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!!callbackFn && callbackFn(arr[i], arr[j]) > 0) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

const arr = [99, 1, 5, 5, 2, 4, 3];
// My Reduce
const sum = (preVal, curVal, curIdx) => {
  console.log(preVal, curVal, curIdx);
  return preVal + curVal;
};
console.log(arr.reduce(sum, 1000));
// console.log(myReduce(arr, sum));

// My Find
// console.log(arr.find((x) => x == 5));
// console.log(myFind(arr, (x) => x == 5));

// My Sort
// console.log(arr.sort((a, b) => b - a));
// console.log(mySort(arr, (a, b) => b - a));
