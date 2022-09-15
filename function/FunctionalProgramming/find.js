const arr = [2,5,6,78,9,20,3,8,9,50,23,8]

const findM = arr.find(function(value){
    return value === 9
})
console.log(findM) //return 9 value

const findIndex = arr.findIndex(function(value){
    return value === 9
}) 

console.log(findIndex)//return 4 index

function myFind(arr, callBack){
    for(var i = 0; i<arr.length; i++){
        if(callBack(arr[i])){
            // return arr[i] //this is return find value
            return [i] // this is return find index
        }
    }
}

const myFindResult = myFind(arr,function(value){
    return value === 9
})
console.log(myFindResult)