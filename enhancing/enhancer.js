module.exports = {
  succeed,
  fail,
  repair,
  get
};

//SUCCEED FUNCTION
function succeed(item) {
  //typeof item, item.name, item.enhancement, item.durability
  if (typeof item !== 'object') {
    throw new Error('object required for item argument');
  }
  if (typeof item.name !== 'string') {
    throw new Error('string required for item name');
  }
  if (typeof item.enhancement !== 'number') {
    throw new Error('number required for item enhancement');
  }
  if (typeof item.durability !== 'number') {
    throw new Error('number required for item durability');
  }
  if (!(item.name && item.durability && item.enhancement)) {
    throw new Error('item name, durability and enhancement are required');
  }
  if (item.durability > 100) {
    throw new Error('durability should not be larger than 100 ');
  }
  if (item.enhancement > 20) {
    throw new Error('enhancement should not be larger than 20 ');
  }
  if (item.enhancement === 20) {
    return { ...item };
  }

  const { enhancement } = item;
  newEnhancement = enhancement + 1;
  return { ...item, enhancement: newEnhancement };
}

//FAIL FUNCTION
function fail(item) {
  return { ...item };
}

//REPAIR FUNCTION
function repair(item) {
  //typeof item, item.name, item.enhancement, item.durability
  if (typeof item !== 'object') {
    throw new Error('object required for item argument');
  }
  if (typeof item.name !== 'string') {
    throw new Error('string required for item name');
  }
  if (typeof item.enhancement !== 'number') {
    throw new Error('number required for item enhancement');
  }
  if (typeof item.durability !== 'number') {
    throw new Error('number required for item durability');
  }
  if (!(item.name && item.durability && item.enhancement)) {
    throw new Error('item name, durability and enhancement are required');
  }
  if (item.durability > 100) {
    throw new Error('durability should not be larger than 100 ');
  }
  if (item.enhancement > 20) {
    throw new Error('enhancement should not be larger than 20 ');
  }

  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
