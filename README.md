# Weighted Chooser With Random Seed

A random weighted item chooser with custom seed option for JavaScript and TypeScript.

## Installation

```bash
$ npm i random-seed-weighted-chooser
```

## Usage

Two ways: 

- Array of weights. Randomly choose an index based on weights.
- Array of objects with weight properties. Randomly choose an object based on weights.

### Array Of Weights

You can use an array of weights to randomly choose an index in that array.

```js
const chooser = require("random-seed-weighted-chooser").default;
// ...
// Returns an index using the weights to determine chance, or -1 if empty.
chooser.chooseWeightedIndex(arrayOfWeights);
// Optionally, you can use a custom seed. Math.random() is used as the default.
chooser.chooseWeightedIndex(arrayOfWeights, seed);
```

### Array Of Objects With Weight Properties

You can use an array of objects, each with a weight property, to randomly choose one of those objects.

```js
const chooser = require("random-seed-weighted-chooser").default;
// ...
// Expects each object to have a "weight" property. Returns null if array is empty.
chooser.chooseWeightedObject(arrayOfObjects);
// Uses custom property key, default weight if weight property is missing, and custom seed.
chooser.chooseWeightedObject(arrayOfObjects, weightPropertyKey, defaultWeight, seed);
```

## Examples

### Weighted Random Index Choice

If all you need is an index, you can just use a number[] array of weights, like so:

```js
const chooser = require("random-seed-weighted-chooser").default;

let arrayOfWeights = [10, 50, 45, 5];

// Returns the randomly chosen index or -1 if the array is empty. Uses Math.random() as the seed.
chooser.chooseWeightedIndex(arrayOfWeights);
// 10% chance of returning 0
// 50% chance of returning 1
// 45% chance of returning 2
// 5% chance of returning 3
```

Under the hood, this project uses a pseudorandom number generator (PRNG) that allows the developer to provide their own seed.

So if you want to provide your own seed, you can. Seeds can be any value (strings, numbers, etc):

```js
// Returns the randomly chosen index or -1 if the array is empty.
// Will return the same result until the seed changes.
let seed = "myseed";
chooser.chooseWeightedIndex(arrayOfWeights, seed); // 3
chooser.chooseWeightedIndex(arrayOfWeights, seed); // 3
chooser.chooseWeightedIndex(arrayOfWeights, seed); // Always 3
seed = 12345;
chooser.chooseWeightedIndex(arrayOfWeights, seed); // 1
chooser.chooseWeightedIndex(arrayOfWeights, seed); // 1
chooser.chooseWeightedIndex(arrayOfWeights, seed); // Always 1
```

### Weighted Random Item Choice

```js
let iceCreamFlavors = [
  { flavor: "chocolate", weight: 3 },
  { flavor: "vanilla", weight: 1 },
  { flavor: "piña colada", weight: 6 }
];

// Returns the randomly chosen object based on their weights.
// - Looks for a property called "weight"; default 1 if not found
// - Uses Math.random() as the seed.
chooser.chooseWeightedObject(iceCreamFlavors);
// chocolate = 30% chance
// vanilla = 10% chance
// piña colada = 60% chance
```

You can use any number property as the weight. Just provide it as the second argument, like so:

```js
let restaurantRatings = [
  { name: "Chipotle", rating: 4.2 },
  { name: "Moe's", rating: 4.9 },
  { name: "Dirty Bill's", rating: 1.2 }
];

// This example uses restaurant ratings as weights.
chooser.chooseWeightedObject(restaurantRatings, "rating");
// Chipotle = 40.8% chance
// Moe's = 47.6% chance
// Dirty Bill's = 11.7% chance
```

If the property is not found, the default weight is `1`. You can provide a default if you'd like. The seed defaults to `Math.random()`, but you can provide your own seed if you'd like as well:

```js
let restaurantRatings = [
  { name: "Chipotle", rating: 4.2 },
  { name: "Moe's", rating: 4.9 },
  { name: "Edgy Burrito" } // Unrated restaurant
];

// Uses a default weight of 2.5 and a custom seed.
let seed = "Brianna's pick";
chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed);
// Chipotle = 36.2% chance
// Moe's = 42.2% chance
// Edgy Burrito = 21.6% chance
```

## ISC License

Copyright 2019 Justin Mahar

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
