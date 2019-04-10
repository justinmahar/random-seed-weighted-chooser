import chooser from "./index";

let arrayOfWeights = [10, 50, 45, 5];

// Returns the randomly chosen index or -1 if the array is empty. Uses Math.random() as the seed.
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
console.log(chooser.chooseWeightedIndex(arrayOfWeights));
// 10% chance of returning 0
// 50% chance of returning 1
// 45% chance of returning 2
// 5% chance of returning 3

let iceCreamFlavors = [
  { flavor: "chocolate", weight: 3 },
  { flavor: "vanilla", weight: 1 },
  { flavor: "poop", weight: 0 },
  { flavor: "piña colada", weight: 6 }
];

// Returns the randomly chosen object based on their weights.
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
console.log(chooser.chooseWeightedObject(iceCreamFlavors));
// chocolate = 30% chance
// vanilla = 10% chance
// poop = 0% chance
// piña colada = 60% chance

let allZeroesObj = [
  { flavor: "chocolate", weight: 0 },
  { flavor: "vanilla", weight: 0 },
  { flavor: "poop", weight: 0 },
  { flavor: "piña colada", weight: 0 }
];

let arrayOfZeroes = [0, 0, 0, 0];
console.log(chooser.chooseWeightedIndex(arrayOfZeroes)); // -1
console.log(chooser.chooseWeightedIndex([])); // -1
console.log(chooser.chooseWeightedObject(allZeroesObj)); // null
console.log(chooser.chooseWeightedObject([])); // null

let restaurantRatings = [
  { name: "Chipotle", rating: 4.2 },
  { name: "Moe's", rating: 4.9 },
  { name: "Edgy Burrito" } // Unrated restaurant
];

// Uses "rating" as weight, a default weight of 2.5
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random())
);
console.log("Next 5 use the same seed:");
let seed = "Brianna's pick"; // Custom seed
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed)
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed)
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed)
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed)
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed)
);
// Chipotle = 36.2% chance
// Moe's = 42.2% chance
// Edgy Burrito = 21.6% chance (no rating property, so uses 2.5 default)

console.log("Next 5 use missing property (equal chance of all happening):");
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "blah blah missing property")
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "blah blah missing property")
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "blah blah missing property")
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "blah blah missing property")
);
console.log(
  chooser.chooseWeightedObject(restaurantRatings, "blah blah missing property")
);

console.log("Powers of 10 lottery (max weight 100000):");

let lottery = [
  { name: "Impossible", weight: 0 },
  { name: "Nearly impossible", weight: 1 },
  { name: "Very low chance", weight: 9 },
  { name: "Low chance", weight: 90 },
  { name: "Medium chance", weight: 900 },
  { name: "High chance", weight: 9000 },
  { name: "Very high chance", weight: 90000 }
];

console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));
console.log(chooser.chooseWeightedObject(lottery));

console.log('Lottery with seed "RaNdom-Seed-WeiGHted-CHooser":');
console.log(
  chooser.chooseWeightedObject(
    lottery,
    "weight",
    1,
    "RaNdom-Seed-WeiGHted-CHooser"
  )
);
