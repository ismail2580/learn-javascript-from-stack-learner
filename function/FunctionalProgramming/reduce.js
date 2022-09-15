const arr = [68,3,4,5,6,7,8,90,87,53,33,]

const sum = arr.reduce(function(previous, current){
    return previous + current
})

console.log(sum)


const max =arr. reduce(function(prev, curr){
    return Math.max(prev,curr)
})
console.log(max)


const min =arr. reduce(function(prev, curr){
    return Math.min(prev,curr)
})
console.log(min)



var product= [
    {
        Name:'pen',
        Amount:5,
        price:10
    },
    {
        Name:'pad',
        Amount:3,
        price:60
    },
    {
        Name:'Book',
        Amount:8,
        price:300
    }
]

const totalTk = product.reduce(function(previousValue, currentValue){
    return previousValue + currentValue.Amount*currentValue.price
},0)
console.log("Total Amount: "+totalTk)



// advance reduce()
const votes = ['Yes', 'No','Yes','No','Yes','No','Yes','No','Yes','No','Yes','No','Yes','No','Yes','No', 'No Votes', 'Absent','No Votes','Absent','No Votes','Absent','Absent',]

var Result = votes.reduce(function(previousValue, votes){
    if(previousValue[votes]){
        previousValue[votes]++
    }else{
        previousValue[votes]= 1
    }
    return previousValue
},{})
console.log(Result)


// this is manually Reduce() methods

function MyReduce(arr, callBack, acc){
    for(let i = 0; i < arr.length; i++){
        acc = callBack( acc, arr[i] )
    }
    return acc
}

const totalSum = MyReduce(arr, function(prev, curr){
    return prev + curr
}, 0)

console.log(totalSum)

const maxNumber = MyReduce(arr, function(prev, curr){
    return Math.max(prev,curr)
}, 0)

console.log(maxNumber)


const minNumber = MyReduce(arr, function(prev, curr){
    return Math.min(prev,curr)
}, arr[0])
console.log(minNumber)