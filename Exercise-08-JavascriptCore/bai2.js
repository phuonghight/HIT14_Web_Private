const a = 3,
  b = 4,
  c = 5;

if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a)
  console.log(true);
else console.log(false);
