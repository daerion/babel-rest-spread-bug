const data = {
  foo: {
    bar: {
      baz: 'baz',
      qux: 'qux'
    }
  }
}

const { foo: { bar: { baz, ...other } } } = data

console.log('baz: %s', baz)
console.dir(other)
