/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = require('assert');
const {IllegalArgumentError} = require('ganiyem-error');
const {escape, unescape} = require('../../');

const escapedSyntaxCharacter = '\\^\\$\\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|';
const unescapedSyntaxCharacter = '^$\\.*+?()[]{}|';

it('must be typeof escape === "function"', () => {
  assert.ok(typeof escape === 'function');
});

it('must be typeof unescape === "function"', () => {
  assert.ok(typeof unescape === 'function');
});

it('must be escape(unescapedSyntaxCharacter) === escapedSyntaxCharacter', () => {
  assert.strictEqual(escape(unescapedSyntaxCharacter), escapedSyntaxCharacter);
});

it('must be unescape(escapedSyntaxCharacter) === unescapedSyntaxCharacter', () => {
  assert.strictEqual(unescape(escapedSyntaxCharacter), unescapedSyntaxCharacter);
});

it('must be escape("{foo[]}") === "\\{foo\\[\\]\\}"', () => {
  assert.strictEqual(escape('{foo[]}'), '\\{foo\\[\\]\\}');
});

it('must be unescape("\\{foo\\[\\]\\}") === "{foo[]}"', () => {
  assert.strictEqual(unescape('\\{foo\\[\\]\\}'), '{foo[]}');
});

it('must be escape(123) throw IllegalArgumentError()', () => {
  try {
    escape(123);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof IllegalArgumentError);
  }
});

it('must be unescape(123) throw IllegalArgumentError()', () => {
  try {
    unescape(123);
    assert.ok(false);
  } catch (e) {
    assert.ok(e instanceof IllegalArgumentError);
  }
});