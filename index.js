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
'use strict';

const {IllegalArgumentError} = require('ganiyem-error');

/**
 * "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"
 * [reference](https://www.ecma-international.org/ecma-262/10.0/index.html#prod-SyntaxCharacter)
 */
const escapeRegexp = /[\^$\\.*+?()[\]{}|]/g;
const unescapeRegexp = /\\(.)/g;

/**
 * @param {string} value
 * @throws {IllegalArgumentError}
 * @return {string}
 */
function escape(value){
	if (typeof value !== 'string') {
		throw new IllegalArgumentError('The value must be type of string');
	}
	return value.replace(escapeRegexp, '\\$&');
}

/**
 * @param {string} value
 * @throws {IllegalArgumentError}
 * @return {string}
 */
function unescape(value){
	if (typeof value !== 'string') {
		throw new IllegalArgumentError('The value must be type of string');
	}
	return value.replace(unescapeRegexp, '$1');
}

/**
 * @+
 */
module.exports = {escape, unescape};