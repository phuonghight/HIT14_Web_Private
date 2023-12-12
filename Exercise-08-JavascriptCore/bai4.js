const n = 12321;
const s = `${n}`;
let check = true;
for (let i = 0; i < s.length / 2; i++) {
  if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
    check = false;
  }
}
console.log(check);
