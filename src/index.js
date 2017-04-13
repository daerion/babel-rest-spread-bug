// Nesting only one level works
const working = {
  nested: {
    one: 'one',
    two: 'two'
  }
}

const { nested: { one, ...more } } = working

console.log('one: %s', one)  // 'one'
console.dir(more) // { two: 'two' }

// Nesting two or more levels does not work
const defunct = {
  outer: {
    inner: {
      three: 'three',
      four: 'four'
    }
  }
}

const { outer: { inner: { three, ...other } } } = defunct

console.log('three: %s', three) // 'three'
console.dir(other) // { four: 'four' }

const defunct2 = {
  outer: {
    inner: {
      innermost: {
        five: 'five',
        six: 'six'
      }
    }
  }
}

const { outer: { inner: { innermost: { five, ...props } } } } = defunct2

console.log('five: %s', five) // 'five'
console.dir(props) // { six: 'six' }
