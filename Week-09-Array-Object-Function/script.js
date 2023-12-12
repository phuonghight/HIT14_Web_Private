const obj = {
  name: "Phuong",
  "has-girl-friend": false,
  age: 20,
  getAge: function () {
    return this.age;
  },
  obj2: {
    abc: "abc",
  },
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Function declarations
function f1() {}
// Function expressions
const f2 = function (a, b) {
  return a + b;
};
const f3 = (a, b) => ({
  sum: a + b,
});

f1();
f2();

// Default Parameter
function sum2number(a, b = 99) {
  console.log(b);
  return a + b;
}
console.log(sum2number(1));

// Rest Parameter
function sumUseRestParameter(a, b, ...p) {
  let sum = 0;
  for (let i = 0; i < p.length; i++) {
    sum += p[i];
  }
  return sum;
}

// arguments object
function sumUseArgumentsObject(a, b) {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum + a + b;
}
console.log(sumUseRestParameter(1, 2, 3, 4, 5));
console.log(sumUseArgumentsObject(1, 2, 3, 4, 5));

// Create a Callback function
function sumWhere(arr, callbackFn = true) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (callbackFn(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}
const checkOdd = function (x) {
  return x % 2 != 0;
};
const arr = [1, 2, 3, 4, 5, 6];
const sumOdd = sumWhere(arr, (x) => x % 2 != 0);
console.log(sumOdd);
