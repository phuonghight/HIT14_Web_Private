const arr = [1, 2, 3, 4, 5];
const arr1 = [7, 6, 5, 4, 3, 2, 1];

// arr.forEach(function (x, i) {
//   console.log(x, i);
// });

// // xoa phan tu ma phan truoc no la chan
// const a = arr.filter(function (x, i) {
//   if (i == 0) return true;
//   if (arr[i - 1] % 2 == 0) return false;
//   else return true;
// });
// console.log(a);

// const check = arr.every(function (x) {
//   console.log(x);
//   return x < 0;
// });
// console.log(check);

// const check = arr.some(function (x) {
//   console.log(x);
//   return x < 0;
// });
// console.log(check);

// const a = arr.map(function (x) {
//   if (x % 2 == 0) return x;
// });
// console.log(a);

// const sum = arr.reduce(function (preVal, curVal, curIdx) {
//   console.table([preVal, curVal, curIdx]);
//   return curVal + preVal;
// });
// console.log(sum);

// const x = arr.find(function (e, i) {
//   console.log(e);
//   return e % 2 == 0;
// });
// console.log(x);

// const x = arr.findLast(function (e, i) {
//   console.log(e);
//   return e % 2 == 0;
// });
// console.log(x);

// console.log([-5, -4, -3, -2 - 1, 0].concat(arr));
// console.log([-5, -4, -3, -2 - 1, 0, ...arr]);
// const arr2 = [...arr];
// arr2[0] = 99;
// console.log(arr);
// console.log(arr2);

// const a = arr[0];
// const b = arr[1];
// console.log(a, b);

// const [a, b, ...p] = arr;
// console.log(a, b);
// console.log(p);

const person1 = {
  fullName: "Person 1",
  height: 1.7,
  weight: 60,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};
const { fullName: name } = person1;
console.log(name);
