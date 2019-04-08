const enhancer = require('./enhancer.js');

const { repair, succeed, fail, get } = enhancer;
const itemIsNotObject = 'item';
const itemDoesNotHaveReqKeys = { item: 'item' };
const itemNameIsNotString = { name: 70, durability: 10, enhancement: 10 };
const itemDurabilityIsNotNumber = { name: 'item', durability: 'item', enhancement: 10 };
const itemEnhancementIsNotNumber = { name: 'item', durability: 10, enhancement: 'item' };
const itemEnhancementIsLargerThan20 = { name: 'item', durability: 90, enhancement: 25 };
const itemDurabilityIsLargerThan100 = { name: 'item', durability: 110, enhancement: 19 };

const correctItem = { name: 'item', durability: 80, enhancement: 10 };
const correctItemWithEnhancement20 = { name: 'item', durability: 80, enhancement: 20 };

describe('enhancers module', () => {
  //Repair function
  describe('repair function', () => {
    it('returns item object with durability 100', () => {
      expect(repair(correctItem)).toEqual({ name: 'item', durability: 100, enhancement: 10 });
    });
    //err
    it('throws error if item is not an object', () => {
      expect(() => repair(itemIsNotObject).toThrow());
    });
    it('throws error if item does not have name, enhancement or durability', () => {
      expect(() => repair(itemDoesNotHaveReqKeys).toThrow());
    });
    it('throws error if item name is not a string', () => {
      expect(() => repair(itemNameIsNotString).toThrow());
    });
    it('throws error if item durability is not a number', () => {
      expect(() => repair(itemDurabilityIsNotNumber).toThrow());
    });
    it('throws error if item enhancement is not a number', () => {
      expect(() => repair(itemEnhancementIsNotNumber).toThrow());
    });
    it('throws error if item durability is larger than 100', () => {
      expect(() => repair(itemDurabilityIsLargerThan100).toThrow());
    });
    it('throws error if item enhancement is larger than 20', () => {
      expect(() => repair(itemEnhancementIsLargerThan20).toThrow());
    });
  });

  //Succeed function
  describe('succeed function', () => {
    it('returns item object with enhancement + 1', () => {
      expect(succeed(correctItem)).toEqual({ name: 'item', durability: 80, enhancement: 11 });
    });
    it('returns item object with enhancement 20 if previous state is 20', () => {
      expect(succeed(correctItemWithEnhancement20)).toEqual({ name: 'item', durability: 80, enhancement: 20 });
    });
    //err
    it('throws error if item is not an object', () => {
      expect(() => succeed(itemIsNotObject).toThrow());
    });
    it('throws error if item does not have name, enhancement or durability', () => {
      expect(() => succeed(itemDoesNotHaveReqKeys).toThrow());
    });
    it('throws error if item name is not a string', () => {
      expect(() => succeed(itemNameIsNotString).toThrow());
    });
    it('throws error if item durability is not a number', () => {
      expect(() => succeed(itemDurabilityIsNotNumber).toThrow());
    });
    it('throws error if item enhancement is not a number', () => {
      expect(() => succeed(itemEnhancementIsNotNumber).toThrow());
    });
    it('throws error if item durability is larger than 100', () => {
      expect(() => succeed(itemDurabilityIsLargerThan100).toThrow());
    });
    it('throws error if item enhancement is larger than 20', () => {
      expect(() => succeed(itemEnhancementIsLargerThan20).toThrow());
    });
  });
});
