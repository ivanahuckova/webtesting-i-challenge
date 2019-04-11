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
const correctItemWithEnhancement0 = { name: 'item', durability: 80, enhancement: 0 };
const correctItemWithEnhancement10 = { name: 'item', durability: 80, enhancement: 10 };
const correctItemWithEnhancement15 = { name: 'item', durability: 80, enhancement: 15 };
const correctItemWithEnhancement17 = { name: 'item', durability: 80, enhancement: 17 };
const correctItemWithEnhancement20 = { name: 'item', durability: 80, enhancement: 20 };

testInput = () => {
  describe('test inputs', () => {
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
};

describe('enhancers module', () => {
  testInput();
  describe('repair function', () => {
    it('returns item object with durability 100', () => {
      expect(repair(correctItem)).toEqual({ name: 'item', durability: 100, enhancement: 10 });
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
  });

  //Fail function
  describe('fail function', () => {
    it('returns decreased durability by 5 if enhancement is less than 15', () => {
      expect(fail(correctItemWithEnhancement10)).toEqual({ name: 'item', durability: 75, enhancement: 10 });
    });
    it('returns decreased durability by 10 if enhancement is more than 15', () => {
      expect(fail(correctItemWithEnhancement15)).toEqual({ name: 'item', durability: 70, enhancement: 15 });
    });
    it('returns decreased durability by 10 and enhancement by 1 if enhancement is more than 16', () => {
      expect(fail(correctItemWithEnhancement17)).toEqual({ name: 'item', durability: 70, enhancement: 16 });
    });
    it('returns decreased durability by 10 and enhancement by 1 if enhancement 20', () => {
      expect(fail(correctItemWithEnhancement20)).toEqual({ name: 'item', durability: 70, enhancement: 19 });
    });
  });

  //Get function
  describe('get function', () => {
    it('returns changed name to include enhancement', () => {
      expect(get(correctItemWithEnhancement10)).toEqual({ name: '[+10] item', durability: 80, enhancement: 10 });
    });
    it('returns not changed name to when enhancement equals 0', () => {
      expect(get(correctItemWithEnhancement0)).toEqual({ name: 'item', durability: 80, enhancement: 0 });
    });
  });
});
