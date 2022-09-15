// Multi Dimensional Array

 var arr = [
     [10,35,5,67,23,68,12,75,],
     [30,95,1,67,3,18,62,35,],
     [1,3,50,97,83,8,62,45,]
 ]
 
for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr[i].length; j++ ){
        console.log('Element '+ i + ': ' +arr[i][j])
    }
}