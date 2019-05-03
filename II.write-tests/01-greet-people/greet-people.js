function greetPeople(people) {
  var greeting = "Hello ";

  people.forEach(function(person){
    greeting = greeting + person;
     
  });

    return greeting;

}

module.exports = greetPeople;

// var mentors = ['Irina', 'Ashleigh', 'Etza'];
// var result = greetPeople(mentors)
// console.log(result);

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
   
  result : 'Hello IrinaAshleighEtza'



  // // people = ['Irina', 'Ashleigh', 'Etza']
  // var peopleWithGreeting = people.map(function(person) {
  //   return greeting + person;
  // });

  // return greeting + people.join(', ');

  ww have agreeting wich start hello we add the name of each person to the greeating and finally return the greeting which is string
*/
