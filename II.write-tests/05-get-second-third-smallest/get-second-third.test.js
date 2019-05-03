// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

var getSecondThird = require('./get-second-third');

test('get the new array', function(){

    var input = [90, 5, 11, 8, 6];

    var result = [6, 8];

    var output = getSecondThird(input);

    expect(output).toEqual(result);
});

