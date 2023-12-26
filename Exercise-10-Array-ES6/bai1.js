const cats = [6, 8, 10, 1, 12, 14, 2, 16, 18];

const human = cats.map(function (cat) {
  if (cat <= 2) return 2 * cat;
  else return 4 * cat + 16;
});

console.log(human);

const adult = human.filter(function (h) {
  return h >= 18;
});

console.log(adult);

const avg =
  adult.reduce(function (preValue, curValue, curIdx) {
    return preValue + curValue;
  }, 0) / adult.length;

console.log(avg);
