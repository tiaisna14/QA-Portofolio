const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//Cara asserting menggunakan chai
describe('Welcome test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(),"welcome to QA course at mySkill")
    })
})