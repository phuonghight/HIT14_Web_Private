// const set = new Set([1, 2, 3, 3, 2, 1]);
// console.log([...set]);

// const person = {
//   fullName: "Person",
//   child: {
//     fullName: "Child",
//   },
//   child1: null,
// };

// console.log(person.child1?.fullName);

// function counter() {
//   let count = 9;

//   return {
//     count,
//     increase: function () {
//       return ++count;
//     },
//     decrease: function () {
//       return --count;
//     },
//   };
// }

// const useCounter = counter();
// console.log(useCounter.increase());
// console.log(useCounter.increase());
// console.log(useCounter.increase());
// console.log(useCounter.count);

// const person1 = {
//   fullName: "Person 1",
//   height: 1.7,
//   weight: 60,
//   calcBMI: function () {
//     console.log(this);
//     return this.weight / this.height ** 2;
//   },
//   test(a, b) {
//     return `${this.fullName}: ${a + b}`;
//   },
// };
// // console.log(person1.calcBMI());
// // console.log(this === window);

// const person2 = {
//   fullName: "Person 2",
//   height: 1.65,
//   weight: 70,
// };

// // person2.calcBMI = person1.calcBMI.bind(person2);
// // console.log(person2.calcBMI());

// console.log(person1.test(1, 1));
// console.log(person1.test.call(person2, 1, 9));
// console.log(person1.test.apply(person2, [1, 9]));

// person2.test = person1.test.bind(person2);
// console.log(person2.test(9, 9));

const arr = [1, 2, 3, 4, 5, 6, 7];
function myFilter(arr, condtion) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condtion(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function myMap(arr, callbackFn) {
  
}

console.log(myFilter(arr, (x) => x % 3 == 0));
console.log(arr.map((x) => x * 2));
console.log(myMap(arr, (x) => x * 2));
