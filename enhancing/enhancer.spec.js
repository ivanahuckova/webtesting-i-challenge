const enhancer = require('./enhancer.js');

describe('enhancers module', () => {
  //Repair function
  describe('repair function', () => {
    it('returns item object with durability 100', () => {
      expect(enhancer.repair({ name: 'Hello', durability: 80, enhancement: 10 })).toEqual({ name: 'Hello', durability: 100, enhancement: 10 });
    });
    //err
    it('throws error if item is not an object', () => {
      expect(() => enhancer.repair(`item`).toThrow());
    });
    it('throws error if item does not have name, enhancement or durability', () => {
      expect(() => enhancer.repair({ item }).toThrow());
    });
    it('throws error if item name is not a string', () => {
      expect(() => enhancer.repair({ name: 70, durability: 10, enhancement: 10 }).toThrow());
    });
    it('throws error if item durability is not a number', () => {
      expect(() => enhancer.repair({ name: 'John', durability: 'string', enhancement: 10 }).toThrow());
    });
    it('throws error if item enhancement is not a number', () => {
      expect(() => enhancer.repair({ name: 'John', durability: 10, enhancement: 'string' }).toThrow());
    });
    it('throws error if item durability is larger than 100', () => {
      expect(() => enhancer.repair({ name: 'John', durability: 110, enhancement: 10 }).toThrow());
    });
    it('throws error if item enhancement is larger than 20', () => {
      expect(() => enhancer.repair({ name: 'John', durability: 100, enhancement: 25 }).toThrow());
    });
  });

  //Succeed function
  describe('succeed function', () => {
    it('returns item object with enhancement + 1', () => {
      expect(enhancer.succeed({ name: 'Hello', durability: 80, enhancement: 10 })).toEqual({ name: 'Hello', durability: 80, enhancement: 11 });
    });
    it('returns item object with enhancement 20 if previous state is 20', () => {
      expect(enhancer.succeed({ name: 'Hello', durability: 80, enhancement: 20 })).toEqual({ name: 'Hello', durability: 80, enhancement: 20 });
    });
    //err
    it('throws error if item is not an object', () => {
      expect(() => enhancer.succeed(`item`).toThrow());
    });
    it('throws error if item does not have name, enhancement or durability', () => {
      expect(() => enhancer.succeed({ item }).toThrow());
    });
    it('throws error if item name is not a string', () => {
      expect(() => enhancer.succeed({ name: 70, durability: 10, enhancement: 10 }).toThrow());
    });
    it('throws error if item durability is not a number', () => {
      expect(() => enhancer.succeed({ name: 'John', durability: 'string', enhancement: 10 }).toThrow());
    });
    it('throws error if item enhancement is not a number', () => {
      expect(() => enhancer.succeed({ name: 'John', durability: 10, enhancement: 'string' }).toThrow());
    });
    it('throws error if item durability is larger than 100', () => {
      expect(() => enhancer.succeed({ name: 'John', durability: 110, enhancement: 10 }).toThrow());
    });
    it('throws error if item enhancement is larger than 20', () => {
      expect(() => enhancer.succeed({ name: 'John', durability: 100, enhancement: 25 }).toThrow());
    });
  });
});
