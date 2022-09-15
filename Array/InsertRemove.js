// Array Insert Remove and Replace 

var array = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
// array[3] = 9 // remove 3 no index and  push 9


// add and remove end Number
// array.push(9) // push end add new number
// array.pop() // remove end number

// add and remove start Number
// array.unshift(2) // unshift start add new number 
// array.shift()


array.splice(3, 0, 9 ) //it is splice not slice 3 index no, 0 How much do you want to remove?,  then nex add any Number any digit  
console.log(array)