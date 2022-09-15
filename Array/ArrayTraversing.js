// Traversing an Array

var arr = [2,3,4,6,3,1,78,8,9];


for (var i =0; i <arr.length; i++ ){
    arr[i] = arr [i] + 1;
    console.log(arr[i]) //return Array carent Number + 3

}

var sum = 0;
for (var p = 0; p <arr.length; p++ ) {
    sum = sum + arr[p] 
}
console.log(sum) //return total + full Array

for ( var e = 0; e < arr.length; e++){
    if(arr[e] % 2 == 0){
        console.log(arr[e]) //Event Number output
    }
} 

