// Nested Loop js 

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var n = prompt(100);
for( var i = 1; i <= n ; i++ ){
    var result = ''
    for(var j = 1; j<= i; j++ ){
        result += "*" + ' '
    }
    console.log(result)
}