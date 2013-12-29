var reproducible_shuffle = require('../src/reproducible_shuffle.js');

describe('Main spec', function(){
    it('Shuffled to expected order.', function(){
        var seed;
        var ary = [1,2,3,4,5];
        seed = 1;
        expect(reproducible_shuffle(ary, seed)).toEqual([5,2,3,4,1]);
        seed = 2;
        expect(reproducible_shuffle(ary, seed)).toEqual([3,1,5,4,2]);
        seed = 3;
        expect(reproducible_shuffle(ary, seed)).toEqual([2,5,3,4,1]);
        seed = 2;
        expect(reproducible_shuffle(ary, seed)).toEqual([3,1,5,4,2]);
    });

    it('Reproducibly shuffled.', function(){
        var ary = [1,2,3,4,5];
        var seed = 5;
        expect(reproducible_shuffle(ary, seed)).toEqual(reproducible_shuffle(ary, seed));
    });
});
