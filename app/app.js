//** OBJECTS**//
var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'f';
dog.breed = 'lab';
console.log(dog);

var dog2 = {name: 'sam', age: 4,};
console.log(dog2);


var prompt = require('sync-prompt').prompt;

var breed = prompt('What kind of dog? ');
var name = prompt('What is its name? ');
var gender = prompt('Is it (m)ale or (f)emale? ');
var age = prompt('How old is it? '); 
var dog3  = {breed:breed,  name:name, gender:gender, age:age};
console.log(dog3);


var dogs = [];
var response = prompt('Enter a (d)og or (q)uit: ');
while(response !== 'q'){  
  var name = prompt('What is its name? ');
  var gender = prompt('Is it (m)ale or (f)emale? ');
  var age = prompt('How old is it? ');
  dog  = {name:name, gender:gender, age:age};
  dogs.push (dog);
  response = prompt('Enter a (d)og or (q)uit: ');
}
console.log(dogs);
