var arr = [2,4,5,8,10,3,6,1,7]

var newArrayfilter =arr.filter(function(value){
    return value%2 === 0;
})
console.log(newArrayfilter)

// this is manually filter() methods

function myFilter(arr){
    var newArray =[];
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2===0){
            newArray.push(arr[i])
        }
    } 
    return newArray
}
console.log(myFilter(arr))