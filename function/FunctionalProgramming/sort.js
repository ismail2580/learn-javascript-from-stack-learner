const arr = [2, 4, 7, 98, 23, 78, 23, 87, -5 , 1, 9, 12, 56, -2, -20];

var Small_To_Large = arr.sort(function (a, b) {
  return a - b;
});

// var Large_To_small = arr.sort(function(a,b){
//     return b - a
// })

// console.log(Large_To_small)//.///./return [ 98, 87, 78, 56, 23, 23, 20, 12, 9, 7, 4, 2, 1 ]

console.log(Small_To_Large); //////return [ 1, 2, 4, 7, 9, 12, 20, 23, 23, 56, 78, 87, 98 ]

const people = [
  {
    name: "ismail",
    age: 20,
  },
  {
    name: "mama Al Mahmmud",
    age: 12,
  },
  {
    name: "liton Das",
    age: 30,
  },
  {
    name: "khalif Al Mahmmud",
    age: 28,
  },
  {
    name: "suma Aktar",
    age: 92,
  },
  {
    name: "robal Khan",
    age: 46,
  },
];

// const peopleSort = people.sort(function (a, b) {
//     if(a.age > b.age){
//         return 1;
//     }else if(a.age < b.age) {
//         return -1
//     } else {
//         return 0
//     }
// });
// console.log(peopleSort)       //return [ { name: ' Mama Al Mahmmud', age: 12 }, { name: 'ismail', age: 20 }, { name: 'Khalif Al Mahmmud', age: 28 }, { name: 'liton Das', age: 30 }, { name: 'Robal Khan', age: 46 }, { name: 'Suma Aktar', age: 92 } ]

const peopleSort = people.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});

console.log(peopleSort);

console.log(arr);
