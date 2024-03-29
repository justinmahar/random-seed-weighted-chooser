import Chooser from '../index';
import chai from 'chai';

const expect = chai.expect;

describe('Chooser function test', () => {
  it('should choose a weighted index', () => {
    const arrayOfWeights = [10, 50, 45, 5];
    const index = Chooser.chooseWeightedIndex(arrayOfWeights);
    expect(index).to.be.gte(0).and.lte(4);
  });

  it('should choose an object based on weight properties', () => {
    const iceCreamFlavors = [
      { flavor: 'chocolate', weight: 3 },
      { flavor: 'vanilla', weight: 1 },
      { flavor: 'poop', weight: 0 },
      { flavor: 'piña colada', weight: 6 },
    ];
    const item: any = Chooser.chooseWeightedObject(iceCreamFlavors);
    expect(['chocolate', 'vanilla', 'poop', 'piña colada']).to.include(item.flavor);
  });

  it('should choose an object based on custom weight properties', () => {
    const restaurantRatings = [
      { name: 'Chipotle', rating: 4.2 },
      { name: "Moe's", rating: 4.9 },
      { name: 'Edgy Burrito', rating: 3.4 },
    ];
    const item: any = Chooser.chooseWeightedObject(restaurantRatings, 'rating');
    expect(['Chipotle', "Moe's", 'Edgy Burrito']).to.include(item.name);
  });

  it('should handle missing custom weight properties', () => {
    const restaurantRatings = [
      { name: 'Chipotle', rating: 4.2 },
      { name: "Moe's", rating: 4.9 },
      { name: 'Edgy Burrito' },
    ];
    const item: any = Chooser.chooseWeightedObject(restaurantRatings, 'rating');
    expect(['Chipotle', "Moe's", 'Edgy Burrito']).to.include(item.name);
  });

  it('should use a default weight property when missing', () => {
    const restaurantRatings = [
      { name: 'Chipotle', rating: 0.00000001 },
      { name: "Moe's", rating: 0.00000001 },
      { name: 'Edgy Burrito' },
    ];
    const item: any = Chooser.chooseWeightedObject(restaurantRatings, 'rating', 100000000000);
    expect('Edgy Burrito').to.equal(item.name);
  });

  it('should use a default weight when no weights are specified', () => {
    const restaurants = [{ name: 'Chipotle' }, { name: "Moe's" }, { name: 'Edgy Burrito' }];
    const item: any = Chooser.chooseWeightedObject(restaurants);
    expect(['Chipotle', "Moe's", 'Edgy Burrito']).to.include(item.name);
  });

  it('should return null when choosing weighted object from an empty list', () => {
    const restaurants: any = [];
    const val: any = Chooser.chooseWeightedObject(restaurants);
    expect(val).to.be.null;
  });

  it('should return null when choosing weighted object from a null value', () => {
    const restaurants: any = null;
    const val: any = Chooser.chooseWeightedObject(restaurants);
    expect(val).to.be.null;
  });

  it('should return null when choosing weighted object from a non-array', () => {
    let val: any = { mykey: 'someval' };
    expect(Chooser.chooseWeightedObject(val)).to.be.null;
    val = 'blah';
    expect(Chooser.chooseWeightedObject(val)).to.be.null;
    val = 12345;
    expect(Chooser.chooseWeightedObject(val)).to.be.null;
    val = 3.14159;
    expect(Chooser.chooseWeightedObject(val)).to.be.null;
  });

  it('should return null when choosing weighted object from a list of objects all with weights of 0', () => {
    const greetings: any = [
      { value: 'hi', weight: 0 },
      { value: 'hello', weight: 0 },
      { value: 'hey there!', weight: 0 },
    ];
    const val: any = Chooser.chooseWeightedObject(greetings);
    expect(val).to.be.null;
  });

  it('should return -1 when choosing weighted index from an empty list', () => {
    const restaurants: any = [];
    const val: any = Chooser.chooseWeightedIndex(restaurants);
    expect(val).to.equal(-1);
  });

  it('should return -1 when choosing weighted index from null value', () => {
    const restaurants: any = null;
    const val: any = Chooser.chooseWeightedIndex(restaurants);
    expect(val).to.equal(-1);
  });

  it('should return -1 when choosing weighted index from a non-array', () => {
    let val: any = { mykey: 'someval' };
    expect(Chooser.chooseWeightedIndex(val)).to.equal(-1);
    val = 'blah';
    expect(Chooser.chooseWeightedIndex(val)).to.equal(-1);
    val = 12345;
    expect(Chooser.chooseWeightedIndex(val)).to.equal(-1);
    val = 3.14159;
    expect(Chooser.chooseWeightedIndex(val)).to.equal(-1);
  });

  it('should return -1 when choosing weighted index from a list of weights all with a value of 0', () => {
    const weights: any = new Array(10).fill(0);
    const val: any = Chooser.chooseWeightedIndex(weights);
    expect(val).to.equal(-1);
  });
});
