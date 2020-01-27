var assert = require('assert');
var multiplytime = require('../index.js');
describe('multiplytime', function(){
    describe('multuply', function(){
        it('multiply for 33', function(){
            var result = multiplytime.mul(11, 3);
            assert.equal(result, 33);
        });
    });
});