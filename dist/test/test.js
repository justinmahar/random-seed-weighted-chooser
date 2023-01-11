"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
describe("Chooser function test", () => {
    it("should choose a weighted index", () => {
        let arrayOfWeights = [10, 50, 45, 5];
        let index = index_1.default.chooseWeightedIndex(arrayOfWeights);
        expect(index)
            .to.be.gte(0)
            .and.lte(4);
    });
    it("should choose an object based on weight properties", () => {
        let iceCreamFlavors = [
            { flavor: "chocolate", weight: 3 },
            { flavor: "vanilla", weight: 1 },
            { flavor: "poop", weight: 0 },
            { flavor: "piña colada", weight: 6 }
        ];
        let item = index_1.default.chooseWeightedObject(iceCreamFlavors);
        expect(["chocolate", "vanilla", "poop", "piña colada"]).to.include(item.flavor);
    });
    it("should choose an object based on custom weight properties", () => {
        let restaurantRatings = [
            { name: "Chipotle", rating: 4.2 },
            { name: "Moe's", rating: 4.9 },
            { name: "Edgy Burrito", rating: 3.4 }
        ];
        let item = index_1.default.chooseWeightedObject(restaurantRatings, "rating");
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should handle missing custom weight properties", () => {
        let restaurantRatings = [
            { name: "Chipotle", rating: 4.2 },
            { name: "Moe's", rating: 4.9 },
            { name: "Edgy Burrito" }
        ];
        let item = index_1.default.chooseWeightedObject(restaurantRatings, "rating");
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should use a default weight property when missing", () => {
        let restaurantRatings = [
            { name: "Chipotle", rating: 0.00000001 },
            { name: "Moe's", rating: 0.00000001 },
            { name: "Edgy Burrito" }
        ];
        let item = index_1.default.chooseWeightedObject(restaurantRatings, "rating", 100000000000);
        expect("Edgy Burrito").to.equal(item.name);
    });
    it("should use a default weight when no weights are specified", () => {
        let restaurants = [
            { name: "Chipotle" },
            { name: "Moe's" },
            { name: "Edgy Burrito" }
        ];
        let item = index_1.default.chooseWeightedObject(restaurants);
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should return null when choosing weighted object from an empty list", () => {
        let restaurants = [];
        let val = index_1.default.chooseWeightedObject(restaurants);
        expect(val).to.be.null;
    });
    it("should return null when choosing weighted object from a null value", () => {
        let restaurants = null;
        let val = index_1.default.chooseWeightedObject(restaurants);
        expect(val).to.be.null;
    });
    it("should return null when choosing weighted object from a non-array", () => {
        let val = { mykey: "someval" };
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = "blah";
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = 12345;
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = 3.14159;
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
    });
    it("should return null when choosing weighted object from a list of objects all with weights of 0", () => {
        let greetings = [{ value: "hi", weight: 0 }, { value: "hello", weight: 0 }, { value: "hey there!", weight: 0 }];
        let val = index_1.default.chooseWeightedObject(greetings);
        expect(val).to.be.null;
    });
    it("should return -1 when choosing weighted index from an empty list", () => {
        let restaurants = [];
        let val = index_1.default.chooseWeightedIndex(restaurants);
        expect(val).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from null value", () => {
        let restaurants = null;
        let val = index_1.default.chooseWeightedIndex(restaurants);
        expect(val).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from a non-array", () => {
        let val = { mykey: "someval" };
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = "blah";
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = 12345;
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = 3.14159;
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from a list of weights all with a value of 0", () => {
        let weights = new Array(10).fill(0);
        let val = index_1.default.chooseWeightedIndex(weights);
        expect(val).to.equal(-1);
    });
});
