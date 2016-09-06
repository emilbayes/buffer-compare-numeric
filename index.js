'use strict'
var assert = require('assert')

module.exports = function (lhs, rhs) {
  assert.ok(Buffer.isBuffer(lhs), 'lhs must be buffer')
  assert.ok(Buffer.isBuffer(rhs), 'rhs must be buffer')

  var i = 0
  var j = 0

  // Advance beyond leading zeros
  while (lhs[i] === 0) i++
  while (rhs[j] === 0) j++

  // If the numbers are not of equal magnitude, we already know
  if (lhs.length - i !== rhs.length - j) {
    if (lhs.length - i < rhs.length - j) return -1
    return 1
  }

  // compare each byte until we find a mismatch
  while (i < lhs.length) {
    if (lhs[i] < rhs[j]) return -1
    if (rhs[j] < lhs[i]) return 1
    i++
    j++
  }

  // Otherwise they're equal
  return 0
}
