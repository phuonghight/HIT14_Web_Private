const s1 = "000",
  s2 = "abc",
  p = 100;

console.log(s2.slice(0, p - 1) + s1 + s2.slice(p - 1));
