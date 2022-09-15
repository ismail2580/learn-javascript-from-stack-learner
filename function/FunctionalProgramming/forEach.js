var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;

// this is  forEach methods
arr.forEach(function(value, index, arr){
    console.log(value,index,arr)
    return sum +=value
})
console.log(sum)

// this is manually forEach methods

// function forEach(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }
// forEach(arr, function (value, index, arr) {
//     console.log(value,index,arr)
//   sum += value;
// });
// console.log(sum);
