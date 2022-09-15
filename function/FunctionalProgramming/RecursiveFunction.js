// this is Recursive Function 
function sayHi(n){
    if(n=== 0){ //এখানে sayHi value যখন 0 হবে তখন return করবে 
        return
    }
    console.log('HI I\'m Recursive Function') 
    sayHi(n -1) // এখানে বলা হইছে যে  value দেওয়া হবে তার থেকে এক এক করে নামবে 
}

sayHi(10)

// বাকি টা একটা play list আছে