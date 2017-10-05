/* 20171005 DM - LHL w1d4 - advanced sorting work.

  This file contains multipe exercises.
*/

//This sorts in lexigraphical/alphabetical order.
var array = [10, 2, 5, 1, 9];
array.sort();
//console.log(array);

//This sorts in the correct order.
var array = [10, 2, 5, 1, 9];
array.sort(function(i,j){
  return i - j;
});
//console.log(array);
/*
This works the way it does because whenever "a"
is less than "b", a negative value is returned,
which results in the smaller elements always appearing
to the left of the larger ones, in other words, ascending.
*/

////////////////////////////////////////////////////////////////

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// Sort by name ascending alphabetically and descending age.
students.sort(function(a,b) {
  if (a["name"].toLowerCase() === b["name"].toLowerCase()){
    return a["age"] < b["age"];
  } else {
    return a["name"].toLowerCase() > b["name"].toLowerCase();
  }
});

//Display sorted array.
console.log(students);
