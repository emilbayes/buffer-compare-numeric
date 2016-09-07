var test = require('tape')
var cmp = require('.')

test('equal', function (assert) {
  assert.strictEqual(cmp(Buffer('00FF', 'hex'), Buffer('FF', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('FF', 'hex'), Buffer('00FF', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('FF', 'hex'), Buffer('FF', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('000000AB', 'hex'), Buffer('0000AB', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('000000', 'hex'), Buffer('0000', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('BADA55', 'hex'), Buffer('BADA55', 'hex')), 0)
  assert.strictEqual(cmp(Buffer('00', 'hex'), Buffer('00000000', 'hex')), 0)
  assert.end()
})

test('less', function (assert) {
  assert.strictEqual(cmp(Buffer('00AA', 'hex'), Buffer('FF', 'hex')), -1)
  assert.strictEqual(cmp(Buffer('AA', 'hex'), Buffer('00FF', 'hex')), -1)
  assert.strictEqual(cmp(Buffer('AA', 'hex'), Buffer('FFFF', 'hex')), -1)
  assert.strictEqual(cmp(Buffer('00AA', 'hex'), Buffer('FFFF', 'hex')), -1)
  assert.strictEqual(cmp(Buffer('1337', 'hex'), Buffer('BADA55', 'hex')), -1)
  assert.strictEqual(cmp(Buffer('00000000', 'hex'), Buffer('01', 'hex')), -1)
  assert.end()
})

test('greater', function (assert) {
  assert.strictEqual(cmp(Buffer('FF', 'hex'), Buffer('00AA', 'hex')), 1)
  assert.strictEqual(cmp(Buffer('00FF', 'hex'), Buffer('AA', 'hex')), 1)
  assert.strictEqual(cmp(Buffer('FFFF', 'hex'), Buffer('AA', 'hex')), 1)
  assert.strictEqual(cmp(Buffer('FFFF', 'hex'), Buffer('00AA', 'hex')), 1)
  assert.strictEqual(cmp(Buffer('BADA55', 'hex'), Buffer('1337', 'hex')), 1)
  assert.strictEqual(cmp(Buffer('01', 'hex'), Buffer('00000000', 'hex')), 1)

  assert.end()
})
