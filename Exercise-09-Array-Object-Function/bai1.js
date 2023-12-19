const person1 = {
  fullName: "Person 1",
  height: 1.7,
  weight: 60,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};
const person2 = {
  fullName: "Person 2",
  height: 1.65,
  weight: 70,
  calcBMI() {
    return this.weight / this.height ** 2;
  },
};
console.log(`${person1.fullName}'s BMI: ${person1.calcBMI().toFixed(2)}`);
console.log(`${person2.fullName}'s BMI: ${person2.calcBMI().toFixed(2)}`);
if (person1.calcBMI() > person2.calcBMI()) {
  console.log(`${person1.fullName} has BMI greater.`);
} else {
  console.log(`${person2.fullName} has BMI greater.`);
}
