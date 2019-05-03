var removeVowels = require("./remove-vowels.js");

test("remove vowels from word", function() {
  // Arrange
  // Act
  // Assert
  var word = 'samuel';
  var result = '_a_ue_';

  var output = removeVowels(word);


   expect(output).toEqual(result);
});
