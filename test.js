/*!
 * array-rest <https://github.com/jonschlinkert/array-rest>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var rest = require('./');

describe('rest', function () {
  it('should throw an error if the value passed is not an array:', function () {
    (function () {
      rest();
    }).should.throw('array-rest expects an array as the first argument.');
  });

  it('should return all but the first element in the array:', function () {
    rest(['a', 'b', 'c', 'd', 'e', 'f']).should.eql(['b', 'c', 'd', 'e', 'f']);
  });

  it('should all elements after the given number:', function () {
    rest(['a', 'b', 'c', 'd', 'e', 'f'], 3).should.eql(['d', 'e', 'f']);
  });
});

