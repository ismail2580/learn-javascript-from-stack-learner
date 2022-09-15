// Search Data

var arr = [5 , 50 , 8 , 4 , 69 , 3 , 6 , 8 , 9 , 30 , 20];

var find = 4;
var isFound = false
for (var i = 0; i< arr.length; i++){
    if(arr[i] == find){
        console.log('Data Found At Index ' + i) 
        isFound = true
        break
    }
}
if(!isFound){
    console.log('Data Not Found')
}