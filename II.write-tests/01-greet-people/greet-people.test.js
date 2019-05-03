
var greetPeople = require("./greet-people.js");

test("print list of names prefixed with Hello", function() {
 
var mentors = ['Irina', 'Ashleigh', 'Etza'];
var result = 'Hello IrinaAshleighEtza';

var output = greetPeople(mentors);

expect(output).toEqual(result);

});
