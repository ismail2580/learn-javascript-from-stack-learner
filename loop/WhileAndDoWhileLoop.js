//--------------------------------------------------------this while loop------------------------------------ 
// var i = 0;
// while(i < 10){
//     console.log( 'this  is while loop')
//     i++
// }


var isRunnig = true;
while(isRunnig){
    var rand = Math.floor(Math.random() *10 + 1 )
    if (rand == 9){
        console.log('Winner Winner Chicken Dinner')
        isRunnig = false
    }else{
        console.log('You Have Got = ' + rand)
    }
}

//------------------------------------ this do while loop ----------------------------

var doWhileLoop = false
// do mane aghe  ata sesh koro
do {        //fast output do and then output while
    console.log('this do while loop ')
}while(doWhileLoop)