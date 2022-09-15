// this evrery methods()
var arr = [2, 6, 70, 20, 98, 7, 6, 2];

var Result = arr.every(function (value) {
  return value % 2 === 0; // এটা দেখবে সব গোল জোড় সংখ্যা কি না?  যদি হয় তাহলে true না হলে  false
});
console.log(Result);

var Result2 = arr.every(function (value) {
  return value > 0; // এটা দেখবে সব গোল পজিটিভ  সংখ্যা কি না?  যদি হয় তাহলে true না হলে  false
});

console.log(Result2);

// this some methods()

var ar2 = [12, 67, 6, 5, 1, 23, 4, 5, 6, 7, 8, 90, 98, 7, 6, 98, 76, 5, -4, 32];

var Result3 = ar2.some(function (value) {
  return value % 2 === 1; // এটা দেখবে সব গোল বিজোড় সংখ্যা কি না?  যদি হয় তাহলে true না হলে  false
});
console.log(Result3);

var Result4 = ar2.some(function (value) {
    
  return value < 0; // এটা দেখবে সব গোল নেগিটিভ সংখ্যা কি না?  যদি হয় তাহলে true না হলে  false
});

console.log(Result4)