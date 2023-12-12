const a = 20,
  b = 10;

let ucln = 1;
for (let i = a > b ? a : b; i > 1; i--) {
  if (a % i == 0 && b % i == 0) {
    ucln = i;
    break;
  }
}
console.log(ucln, (a * b) / ucln);
