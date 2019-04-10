"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This PRNG allows seeding, unlike the lame `Math.random()`.
 * Use it like so:
   ```js
   let seededRandFunc = new seedrandom(seed);
   seededRandFunc(); // Number from 0 to 1
   ```
 */
var seedrandom = require("seedrandom");
/**
 * Contains chooser functions.
 */
var Chooser = /** @class */ (function () {
    function Chooser() {
        var _this = this;
        /**
         * Choose an index based on the weights provided in the number array. Higher weights increase likeliness of being chosen.
         * Returns the chosen index, or `-1` if the array was empty or all weights were `0`.
         *
         * Only the first argument is required.
         *
         * Allows an optional random seed and default weight to use if array values are not numbers.
         *
         * All negative weights are converted to their absolute value.
         *
         * @param weights Weights as an array of numbers.
         * @param seed Optional. Seed used for pseudorandom number generator (PRNG). Defaults to `Math.random()`.
         * @param defaultWeight Optional. Default weight to use if one of the values is not a number. Defaults to `1`.
         *
         * @returns The chosen index as a number, or `-1` if the array was empty or all weights were `0`.
         */
        this.chooseWeightedIndex = function (weights, seed, defaultWeight) {
            if (seed === void 0) { seed = Math.random(); }
            if (defaultWeight === void 0) { defaultWeight = 1; }
            // If the array is falsy, not an array, or empty, return -1.
            if (!weights || !Array.isArray(weights) || weights.length <= 0) {
                return -1;
            }
            // Keep it positive.
            defaultWeight = Math.abs(defaultWeight);
            var cumulative = 0;
            // Add all weights to cumulative, and build an array of each cumulative value.
            // For example, if the weights are [5, 30, 10], this would build an array
            // containing [5, 35, 45], and cumulative=45.
            var ranges = weights.map(function (weight) {
                return (cumulative +=
                    typeof weight === "number" && weight >= 0
                        ? Math.abs(weight)
                        : defaultWeight);
            });
            // Get our PRNG function using the seed.
            var seededRandFunc = new seedrandom(seed);
            // Select our value.
            var selectedValue = seededRandFunc() * cumulative;
            // If the selected value is within one of the ranges, that's our choice!
            for (var index = 0; index < ranges.length; index++) {
                if (selectedValue < ranges[index]) {
                    return index;
                }
            }
            // If nothing was chosen, all weights were 0 or something went wrong.
            return -1;
        };
        /**
         * Choose an object based on the `"weight"` properties in the object within the provided array.
         * Higher weights increase likeliness of being chosen.
         * Returns the chosen object, or `null` if the array was empty or all weights were `0`.
         *
         * Only the first argument is required.
         *
         * Optionally, you can specify a weight property key, a default weight to use if weight values are not numbers, and random seed.
         *
         * All negative weights are converted to their absolute value.
         *
         * @param arrayOfObjects An array of objects to choose from. Each item should have a weight property.
         * @param weightPropertyKey Optional. The weight property key to use on each object. Defaults to `"weight"`.
         * @param defaultWeight Optional. Default weight to use if one of the values is not a number. Defaults to `1`.
         * @param seed Optional. Seed used for pseudorandom number generator (PRNG). Defaults to `Math.random()`.
         *
         * @returns The chosen object, or `null` if the array was empty or all weights were `0`.
         */
        this.chooseWeightedObject = function (arrayOfObjects, weightPropertyKey, defaultWeight, seed) {
            if (weightPropertyKey === void 0) { weightPropertyKey = "weight"; }
            if (defaultWeight === void 0) { defaultWeight = 1; }
            if (seed === void 0) { seed = Math.random(); }
            // If the array is falsy, not an array, or empty, return null.
            if (!arrayOfObjects ||
                !Array.isArray(arrayOfObjects) ||
                arrayOfObjects.length <= 0) {
                return null;
            }
            // Drop the sign. https://www.youtube.com/watch?v=I7Hea6tdg0c
            defaultWeight = Math.abs(defaultWeight);
            // Collect the weights from the objects into an array.
            var weights = arrayOfObjects.map(function (currItem) {
                // When in doubt, we'll use the default.
                var currWeight = defaultWeight;
                // We expect each item to be an object
                if (currItem && typeof currItem === "object") {
                    var propValue = currItem[weightPropertyKey];
                    // Use the abs of the prop value, but only if it's a number.
                    if (typeof propValue === "number") {
                        currWeight = Math.abs(propValue);
                    }
                }
                return currWeight;
            });
            // Choose an index based on the weights...
            var chosenIndex = _this.chooseWeightedIndex(weights, seed, defaultWeight);
            // If an index was chosen, return the object for that index.
            if (chosenIndex >= 0) {
                return arrayOfObjects[chosenIndex];
            }
            else {
                // Otherwise all weights were 0 or something went wrong. Return null.
                return null;
            }
        };
    }
    return Chooser;
}());
var chooser = new Chooser();
exports.default = chooser;
