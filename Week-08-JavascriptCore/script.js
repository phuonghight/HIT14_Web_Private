const a = 1;
const b = "b";
console.log(a);
const s = `${a} a`; // 1 a
const ss = "1234aavvvbbbaaasdfsfaaaaafShnasfg sa";
console.log(ss.length);

const slice = ss.slice(-10, -5);
const substring = ss.substring(-10, -5);
const substr = ss.substr(1, 5);
console.log(slice);
console.log(substring);
console.log(substr);
console.log(ss.replace(/[a-zA-Z]/g, "A"));

console.log(ss.concat("1234", "44444", "9999"));
const giay = 7;
console.log(s.padStart(10, "ab"));
console.log(`${giay}`.padStart(2, "0"));
console.log(ss.charCodeAt(1));
const string = "1,2,3,4,5,6";
console.log(string.split(","));
console.log(string.includes("1,2,3"));
console.log(string.startsWith("1,"));
console.log(string.indexOf(","));

// +, -, *, /, %, **, ++, --, ?, &&, ||, !, ==, ===

// ?., !., ?=, !=, ..., ~, ^

if (1 == 1) {
  console.log(1 == 1);
} else {
}
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// let n = 0;
// while (n < 10) {
//   console.log(n);
//   n++;
// }

const arr = [1, 2, 9, 4, 9, 6];

for (let i = 0; i < arr.length; ++i) {
  console.log(arr[i]);
}

const obj = {
  name: "P",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

for (const key of obj) {
  console.log(key);
}