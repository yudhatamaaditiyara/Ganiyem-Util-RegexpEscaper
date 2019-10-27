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
const {escape, unescape} = require('../../');
const escapedSyntaxCharacter = '\\^\\$\\\\\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|';
const unescapedSyntaxCharacter = '^$\\.*+?()[]{}|';

/**
 */
describe('index', () => {
	/**
	 */
	it('typeof(escape) === "function"', () => {
		assert.strictEqual(typeof escape, 'function');
	});
	
	/**
	 */
	it('typeof(unescape) === "function"', () => {
		assert.strictEqual(typeof unescape, 'function');
	});

	/**
	 */
	it('escape(unescapedSyntaxCharacter) === escapedSyntaxCharacter', () => {
		assert.strictEqual(escape(unescapedSyntaxCharacter), escapedSyntaxCharacter);
	});

	/**
	 */
	it('unescape(escapedSyntaxCharacter) === unescapedSyntaxCharacter', () => {
		assert.strictEqual(unescape(escapedSyntaxCharacter), unescapedSyntaxCharacter);
	});

	/**
	 */
	it('escape("{foo[]}") === "\\{foo\\[\\]\\}"', () => {
		assert.strictEqual(escape('{foo[]}'), '\\{foo\\[\\]\\}');
	});

	/**
	 */
	it('unescape("\\{foo\\[\\]\\}") === "{foo[]}"', () => {
		assert.strictEqual(unescape('\\{foo\\[\\]\\}'), '{foo[]}');
	});

	/**
	 */
	it('escape(123) ...catch(e)', () => {
		try {
			escape(123);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, 'The value must be type of string');
		}
	});

	/**
	 */
	it('unescape(123) ...catch(e)', () => {
		try {
			unescape(123);
			assert.ok(false);
		} catch (e) {
			assert.strictEqual(e.message, 'The value must be type of string');
		}
	});
});