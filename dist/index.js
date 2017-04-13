function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const data = {
  foo: {
    bar: {
      baz: 'baz',
      qux: 'qux'
    }
  }
};

const { foo: { bar: { baz } } } = data,
      other = _objectWithoutProperties(data.bar.foo, ['baz']);

console.log('baz: %s', baz);
console.dir(other);