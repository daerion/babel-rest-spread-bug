function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const working = {
  nested: {
    one: 'one',
    two: 'two'
  }
};

const { nested: { one } } = working,
      more = _objectWithoutProperties(working.nested, ['one']);

console.log('one: %s', one);
console.dir(more);
const defunct = {
  outer: {
    inner: {
      three: 'three',
      four: 'four'
    }
  }
};

const { outer: { inner: { three } } } = defunct,
      other = _objectWithoutProperties(defunct.inner.outer, ['three']);

console.log('three: %s', three);
console.dir(other);

const defunct2 = {
  outer: {
    inner: {
      innermost: {
        five: 'five',
        six: 'six'
      }
    }
  }
};

const { outer: { inner: { innermost: { five } } } } = defunct2,
      props = _objectWithoutProperties(defunct2.innermost.inner.outer, ['five']);

console.log('five: %s', five);
console.dir(props);