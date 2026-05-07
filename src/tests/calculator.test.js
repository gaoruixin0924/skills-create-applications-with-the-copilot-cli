const test = require('node:test');
const assert = require('node:assert/strict');

const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('../calculator');

test('addition adds two numbers', () => {
  assert.equal(addition(5, 7), 12);
});

test('subtraction subtracts two numbers', () => {
  assert.equal(subtraction(10, 4), 6);
});

test('multiplication multiplies two numbers', () => {
  assert.equal(multiplication(3, 6), 18);
});

test('division divides two numbers', () => {
  assert.equal(division(12, 3), 4);
});

test('division throws on division by zero', () => {
  assert.throws(() => division(12, 0), /Cannot divide by zero/);
});
