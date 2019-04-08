module.exports = {
  succeed,
  fail,
  repair,
  get
};

//SUCCEED FUNCTION
function succeed(item) {
  checkItem(item);

  if (item.enhancement === 20) {
    return { ...item };
  }

  let newEnhancement = item.enhancement + 1;

  return { ...item, enhancement: newEnhancement };
}

//FAIL FUNCTION
function fail(item) {
  checkItem(item);
  if (item.enhancement < 15) {
    let newDurability = item.durability - 5;
    return { ...item, durability: newDurability };
  }

  if (item.enhancement <= 16) {
    let newDurability = item.durability - 10;
    return { ...item, durability: newDurability };
  }

  if (item.enhancement > 16) {
    let newDurability = item.durability - 10;
    let newEnhancement = item.enhancement - 1;
    return { ...item, enhancement: newEnhancement, durability: newDurability };
  }
}

//REPAIR FUNCTION
function repair(item) {
  checkItem(item);
  return { ...item, durability: 100 };
}

//GET FUNCTION
function get(item) {
  checkItem(item);
  if (item.enhancement === 0) {
    return { ...item };
  }
  if (item.enhancement > 0) {
    let newName = `[+${item.enhancement}] ${item.name}`;
    return { ...item, name: newName };
  }

  return { ...item };
}

//HELPER FUNCTIONS
function checkItem(item) {
  if (typeof item !== 'object') {
    throw new Error('object required for item argument');
  }
  if (typeof item.name !== 'string') {
    throw new Error('string required for item name');
  }
  if (typeof item.enhancement !== 'number' || isNaN(item.enhancement)) {
    throw new Error('number required for item enhancement');
  }
  if (typeof item.durability !== 'number' || isNaN(item.durability)) {
    throw new Error('number required for item durability');
  }
  if (!(typeof item.name && typeof item.durability && typeof item.enhancement)) {
    throw new Error('item name, durability and enhancement are required');
  }
  if (item.durability > 100) {
    throw new Error('durability should not be larger than 100 ');
  }
  if (item.enhancement > 20) {
    throw new Error('enhancement should not be larger than 20 ');
  }
}
