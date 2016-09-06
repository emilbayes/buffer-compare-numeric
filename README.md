# `buffer-compare-numeric`

> Compare Buffers numerically

## Install

```sh
npm install buffer-compare-numeric
```

## Usage

Will compare `Buffer`s numerically, ignoring leading zeros.

```js
var cmp = require('buffer-compare-numeric')

var a = Buffer([16])
var b = Buffer([00, 17])

[a, b].sort(Buffer.compare) // [b, a]
[a, b].sort(cmp) // [a, b]

```

## License

[ISC](LICENSE.md)
