
module.exports = function (word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}



/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');
  expected :  _a_ue_
  what is the value of result?
*/
