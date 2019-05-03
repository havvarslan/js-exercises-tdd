var removeVowelsForWords = require("./remove-vowels-in-array.js");

test("remove vowels from all words in array", function() {

  var array = ["Irina", "Etza", "Daniel"];

  var result = ["__i_a", "___a", "_a_ie_"];


  var output = removeVowelsForWords(array);


   expect(output).toEqual(result);


  // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
