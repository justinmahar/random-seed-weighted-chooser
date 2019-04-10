/**
 * Contains static weighted chooser functions.
 */
export default class Chooser {
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
    static chooseWeightedIndex: (weights: number[], seed?: any, defaultWeight?: number) => number;
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
    static chooseWeightedObject: (arrayOfObjects: object[], weightPropertyKey?: any, defaultWeight?: number, seed?: any) => object | null;
}
