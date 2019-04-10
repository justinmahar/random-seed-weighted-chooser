"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var arrayOfWeights = [10, 50, 45, 5];
// Returns the randomly chosen index or -1 if the array is empty. Uses Math.random() as the seed.
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
console.log(index_1.default.chooseWeightedIndex(arrayOfWeights));
// 10% chance of returning 0
// 50% chance of returning 1
// 45% chance of returning 2
// 5% chance of returning 3
var iceCreamFlavors = [
    { flavor: "chocolate", weight: 3 },
    { flavor: "vanilla", weight: 1 },
    { flavor: "poop", weight: 0 },
    { flavor: "piña colada", weight: 6 }
];
// Returns the randomly chosen object based on their weights.
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
console.log(index_1.default.chooseWeightedObject(iceCreamFlavors));
// chocolate = 30% chance
// vanilla = 10% chance
// poop = 0% chance
// piña colada = 60% chance
var allZeroesObj = [
    { flavor: "chocolate", weight: 0 },
    { flavor: "vanilla", weight: 0 },
    { flavor: "poop", weight: 0 },
    { flavor: "piña colada", weight: 0 }
];
var arrayOfZeroes = [0, 0, 0, 0];
console.log(index_1.default.chooseWeightedIndex(arrayOfZeroes)); // -1
console.log(index_1.default.chooseWeightedIndex([])); // -1
console.log(index_1.default.chooseWeightedObject(allZeroesObj)); // null
console.log(index_1.default.chooseWeightedObject([])); // null
var restaurantRatings = [
    { name: "Chipotle", rating: 4.2 },
    { name: "Moe's", rating: 4.9 },
    { name: "Edgy Burrito" } // Unrated restaurant
];
// Uses "rating" as weight, a default weight of 2.5
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, Math.random()));
console.log("Next 5 use the same seed:");
var seed = "Brianna's pick"; // Custom seed
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed));
// Chipotle = 36.2% chance
// Moe's = 42.2% chance
// Edgy Burrito = 21.6% chance (no rating property, so uses 2.5 default)
console.log("Next 5 use missing property (equal chance of all happening):");
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "blah blah missing property"));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "blah blah missing property"));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "blah blah missing property"));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "blah blah missing property"));
console.log(index_1.default.chooseWeightedObject(restaurantRatings, "blah blah missing property"));
console.log("Powers of 10 lottery (max weight 100000):");
var lottery = [
    { name: "Impossible", weight: 0 },
    { name: "Nearly impossible", weight: 1 },
    { name: "Very low chance", weight: 9 },
    { name: "Low chance", weight: 90 },
    { name: "Medium chance", weight: 900 },
    { name: "High chance", weight: 9000 },
    { name: "Very high chance", weight: 90000 }
];
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log(index_1.default.chooseWeightedObject(lottery));
console.log('Lottery with seed "RaNdom-Seed-WeiGHted-CHooser":');
console.log(index_1.default.chooseWeightedObject(lottery, "weight", 1, "RaNdom-Seed-WeiGHted-CHooser"));
