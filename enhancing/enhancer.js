module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (typeof item !== 'object') {
    throw new Error('object required for item argument');
  }
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
