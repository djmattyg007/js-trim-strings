trim-strings
============

This package is simply a standalone version of lodash's trim functions.
Credit goes to them for the implementation.

Usage
-----

Usage is simple:

```typescript
const { trim, trimStart, trimEnd } = require("strtrim");

console.log(trim(" abc ")); // outputs "abc"
console.log(trimStart(" abc ")); // outputs "abc "
console.log(trimEnd(" abc ")); // outputs " abc"

console.log(trim("-a b c-", "-")); // outputs "a b c"
console.log(trimStart("-_-abc_-_", "-_")); // outputs "abc_-_"
console.log(trimEnd("--abc__", "--")); // outputs "--abc__"
```

Tests
-----

To run the test suite, run ``yarn run test`` in the root of this repository.
