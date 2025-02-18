<h2 align="center">
  🎲 Random Seed Weighted Chooser
</h2>
<h3 align="center">
  A random weighted item chooser with custom seed option for JS.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/random-seed-weighted-chooser" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/random-seed-weighted-chooser.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/random-seed-weighted-chooser/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/random-seed-weighted-chooser/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/random-seed-weighted-chooser/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/random-seed-weighted-chooser/)**.

## Overview

A random weighted item chooser with custom seed option for JavaScript.

This package allows you to choose an index from an array of weights (simplest case), or an object from an array of objects that each have a customizable `"weight"` property. 

It also allows you to specify default weights, and to use your own seed for the pseudorandom number generator (PRNG).

### Features include:

- **🎲 Choose weighted items at random**
  - Randomly select items based on weights
- **💪 Flexible and customizable**
  - Choose an index from an array of weights, or an object from an array of objects with weight properties
- **🌱 Custom seed support**
  - Provide your own seed for full control of the PRNG results

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped save you time, please consider buying me a coffee, which powers my development (and life). Your support is much appreciated!

<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [Using An Array Of Weights](#using-an-array-of-weights)
  - [Using An Array Of Objects With Weight Properties](#using-an-array-of-objects-with-weight-properties)
- [Bad Input](#bad-input)
- [Examples](#examples)
  - [Weighted Random Index Choice Example](#weighted-random-index-choice-example)
  - [Weighted Random Item Choice Example](#weighted-random-item-choice-example)
  - [Lottery Example](#lottery-example)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i random-seed-weighted-chooser
```

## Quick Start

Two ways:

- Randomly choose an index from an **array of weights**.
- Randomly choose an object from an **array of objects with weight properties**.

### Using An Array Of Weights

You can use an array of weight numbers to randomly choose an index in that array.

```js

// ...
// Returns an index using the weights to determine chance, or -1 if empty.
Chooser.chooseWeightedIndex(arrayOfWeights);
// Optionally, you can use a custom seed. Math.random() is used as the default.
Chooser.chooseWeightedIndex(arrayOfWeights, seed);
// You can also specify a default weight to use if your array contains 
// non-numbers (this is a failsafe).
Chooser.chooseWeightedIndex(arrayOfWeights, seed, defaultWeight);
```

If all weights are 0, -1 is returned.

### Using An Array Of Objects With Weight Properties

You can use an array of objects, each with a weight property and number value, to randomly choose one of those objects.

```js
import Chooser from "random-seed-weighted-chooser";

// ...
// Expects each object to have a "weight" property. Returns null if array is empty.
Chooser.chooseWeightedObject(arrayOfObjects);
// Uses custom property key, default weight (if weight property is missing), and custom seed.
Chooser.chooseWeightedObject(
  arrayOfObjects,
  weightPropertyKey,
  defaultWeight,
  seed
);
```

If all weights are 0, null is returned.

## Bad Input

For any non-object where an object is expected, or non-number weight where a number is expected:

- That item will have the default weight. This will be `1` or the optional default value if provided.

All negative weights are treated as positive.

## Examples

### Weighted Random Index Choice Example

If all you need is an index, you can just use a number[] array of weights, like so:

```js
import Chooser from "random-seed-weighted-chooser";

let arrayOfWeights = [10, 50, 35, 5];

// Returns the randomly chosen index or -1 if the array is empty. 
// Uses Math.random() as the seed.
Chooser.chooseWeightedIndex(arrayOfWeights);
// 10% chance of returning 0
// 50% chance of returning 1
// 35% chance of returning 2
// 5% chance of returning 3
```

Under the hood, this project uses a pseudorandom number generator (PRNG) that allows the developer to provide their own seed.

So if you want to provide your own seed, you can. Seeds can be any value (strings, numbers, etc):

```js
// Returns the randomly chosen index or -1 if the array is empty.
// Will return the same result until the seed changes.
let seed = "myseed";
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // 3
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // 3
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // Always 3
seed = 12345;
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // 1
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // 1
Chooser.chooseWeightedIndex(arrayOfWeights, seed); // Always 1
```

### Weighted Random Item Choice Example

```js
let iceCreamFlavors = [
  { flavor: "chocolate", weight: 3 },
  { flavor: "vanilla", weight: 1 },
  { flavor: "piña colada", weight: 6 }
];

// Returns the randomly chosen object based on their weights.
// - Looks for a property called "weight"; default 1 if not found
// - Uses Math.random() as the seed.
Chooser.chooseWeightedObject(iceCreamFlavors);
// chocolate = 30% chance
// vanilla = 10% chance
// piña colada = 60% chance
```

You can use any number property as the weight. Just provide the property key as the second argument, like so:

```js
let restaurantRatings = [
  { name: "Chipotle", rating: 4.2 },
  { name: "Moe's", rating: 4.9 },
  { name: "Dirty Bill's", rating: 1.2 }
];

// This example uses restaurant ratings as weights.
Chooser.chooseWeightedObject(restaurantRatings, "rating");
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

// Uses "rating" as weight, a default weight of 2.5, and a custom seed.
let seed = "Brianna's pick";
Chooser.chooseWeightedObject(restaurantRatings, "rating", 2.5, seed);
// Chipotle = 36.2% chance
// Moe's = 42.2% chance
// Edgy Burrito = 21.6% chance (no rating property, so uses 2.5 default)
```

### Lottery Example

Below we have a lottery with 100000 items in the bag (weights total 100000).

```js
let lottery = [
  { name: "Impossible", weight: 0 },
  { name: "Nearly impossible", weight: 1 },
  { name: "Very low chance", weight: 9 },
  { name: "Low chance", weight: 90 },
  { name: "Medium chance", weight: 900 },
  { name: "High chance", weight: 9000 },
  { name: "Very high chance", weight: 90000 }
];

Chooser.chooseWeightedObject(lottery);
// "Nearly impossible" has 1/100000 odds of occurring.
```

**🎉 Happy Random Seed Weighted Choosing! 🎉**

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/random-seed-weighted-chooser/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/random-seed-weighted-chooser/stargazers): [👉⭐](https://github.com/justinmahar/random-seed-weighted-chooser/stargazers)

<!-- [lock:support] 🚫--------------------------------------- -->
Want to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:

<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:support] ---------------------------------------🚫 -->

## License

See [LICENSE.md](https://justinmahar.github.io/random-seed-weighted-chooser/?path=/docs/license--docs).