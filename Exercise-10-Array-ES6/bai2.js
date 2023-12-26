const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(function (dog) {
  const recFood = dog.weight ** 0.75 * 28;
  dog.recFood = recFood;
});

// console.log(dogs);

const sarahDog = dogs.find(function (dog) {
  return dog.owners.includes("Sarah");
});

// if (sarahDog.curFood > sarahDog.recFood) {
//   console.log("an nhieu");
// } else console.log("an it");

const ownersEatTooMuch = dogs
  .filter((dog) => {
    return dog.curFood > dog.recFood;
  })
  .map((dog) => {
    return dog.owners;
  })
  .flat();

console.log(ownersEatTooMuch.join(" and ") + "'s dogs eat too much");

const dogCoppy = [...dogs];
dogCoppy.sort((a, b) => a.recFood - b.recFood);
console.log(dogCoppy);
