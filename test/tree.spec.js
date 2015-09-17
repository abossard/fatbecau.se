var E = require('./tree');
var assert = require('chai').assert;

describe("Tree Shizzle", ()=> {
    it("treeize", ()=>{
        assert.deepEqual(E.treeize([{id:1,name:'root',p:null},{id:2,name:'child',p:1}]));
    });
});