const enhancer = require('./enhancer.js');

describe('enhancers module', () => {
  describe('repair function', () => {
    it('returns item object with durability 100', () => {
      expect(enhancer.repair({ name: 'Hello', durability: 80 })).toEqual({ name: 'Hello', durability: 100 });
    });
    it('throws error if item is not an object', () => {
      expect(() => enhancer.repair(`durability`).toThrow());
    });
  });
});
