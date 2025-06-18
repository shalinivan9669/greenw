import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatBlockName } from '../utils/formatBlockName.js';

test('formats block names with numbers', () => {
  assert.equal(formatBlockName('block12'), 'Блок 12');
});

test('returns original name when no number', () => {
  assert.equal(formatBlockName('main'), 'main');
});
