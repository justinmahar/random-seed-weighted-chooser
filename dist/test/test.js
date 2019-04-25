"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
describe("Chooser function test", function () {
    it("should choose a weighted index", function () {
        var arrayOfWeights = [10, 50, 45, 5];
        var index = index_1.default.chooseWeightedIndex(arrayOfWeights);
        expect(index)
            .to.be.gte(0)
            .and.lte(4);
    });
    it("should choose an object based on weight properties", function () {
        var iceCreamFlavors = [
            { flavor: "chocolate", weight: 3 },
            { flavor: "vanilla", weight: 1 },
            { flavor: "poop", weight: 0 },
            { flavor: "piña colada", weight: 6 }
        ];
        var item = index_1.default.chooseWeightedObject(iceCreamFlavors);
        expect(["chocolate", "vanilla", "poop", "piña colada"]).to.include(item.flavor);
    });
    it("should choose an object based on custom weight properties", function () {
        var restaurantRatings = [
            { name: "Chipotle", rating: 4.2 },
            { name: "Moe's", rating: 4.9 },
            { name: "Edgy Burrito", rating: 3.4 }
        ];
        var item = index_1.default.chooseWeightedObject(restaurantRatings, "rating");
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should handle missing custom weight properties", function () {
        var restaurantRatings = [
            { name: "Chipotle", rating: 4.2 },
            { name: "Moe's", rating: 4.9 },
            { name: "Edgy Burrito" }
        ];
        var item = index_1.default.chooseWeightedObject(restaurantRatings, "rating");
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should use a default weight property when missing", function () {
        var restaurantRatings = [
            { name: "Chipotle", rating: 0.00000001 },
            { name: "Moe's", rating: 0.00000001 },
            { name: "Edgy Burrito" }
        ];
        var item = index_1.default.chooseWeightedObject(restaurantRatings, "rating", 100000000000);
        expect("Edgy Burrito").to.equal(item.name);
    });
    it("should use a default weight when no weights are specified", function () {
        var restaurants = [
            { name: "Chipotle" },
            { name: "Moe's" },
            { name: "Edgy Burrito" }
        ];
        var item = index_1.default.chooseWeightedObject(restaurants);
        expect(["Chipotle", "Moe's", "Edgy Burrito"]).to.include(item.name);
    });
    it("should return null when choosing weighted object from an empty list", function () {
        var restaurants = [];
        var val = index_1.default.chooseWeightedObject(restaurants);
        expect(val).to.be.null;
    });
    it("should return null when choosing weighted object from a null value", function () {
        var restaurants = null;
        var val = index_1.default.chooseWeightedObject(restaurants);
        expect(val).to.be.null;
    });
    it("should return null when choosing weighted object from a non-array", function () {
        var val = { mykey: "someval" };
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = "blah";
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = 12345;
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
        val = 3.14159;
        expect(index_1.default.chooseWeightedObject(val)).to.be.null;
    });
    it("should return null when choosing weighted object from a list of objects all with weights of 0", function () {
        var greetings = [{ value: "hi", weight: 0 }, { value: "hello", weight: 0 }, { value: "hey there!", weight: 0 }];
        var val = index_1.default.chooseWeightedObject(greetings);
        expect(val).to.be.null;
    });
    it("should return -1 when choosing weighted index from an empty list", function () {
        var restaurants = [];
        var val = index_1.default.chooseWeightedIndex(restaurants);
        expect(val).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from null value", function () {
        var restaurants = null;
        var val = index_1.default.chooseWeightedIndex(restaurants);
        expect(val).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from a non-array", function () {
        var val = { mykey: "someval" };
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = "blah";
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = 12345;
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
        val = 3.14159;
        expect(index_1.default.chooseWeightedIndex(val)).to.equal(-1);
    });
    it("should return -1 when choosing weighted index from a list of weights all with a value of 0", function () {
        var weights = new Array(10).fill(0);
        var val = index_1.default.chooseWeightedIndex(weights);
        expect(val).to.equal(-1);
    });
});
