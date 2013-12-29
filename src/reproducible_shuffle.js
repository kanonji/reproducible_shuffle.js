var MersenneTwister = require('mersennetwister');
var reproducible_shuffle = function(ary, seed){
    var mt = new MersenneTwister(seed);
    function random(min, max){
        if (void 0 === max) {
            max = min;
            min = 0;
        }
        return min + Math.floor(mt.rnd() * (max - min + 1));
    }
    var randomPicked;
    var shuffled = [];

    for (var i=0, l=ary.length; i<l; ++i){
        randomPicked = random(i);
        shuffled[i] = shuffled[randomPicked];
        shuffled[randomPicked] = ary[i];
    }
    return shuffled;
};
module.exports = reproducible_shuffle;
