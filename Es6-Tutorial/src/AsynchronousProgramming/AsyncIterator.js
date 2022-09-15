// let AsyncIterable = {
//     [Symbol.asyncIterator](){
//         let i= 0;
//         return { 
//             next(){
//                 if(i < 5){
//                     return Promise.resolve({
//                         value: i++ ,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done:true
//                     })
//                 }
//             }
//         }
//     }
// }

// let Iterator = AsyncIterable[Symbol.asyncIterator]();

// // this is IFE OUTPUT Value 1st and normal way

// // (async function(){
// //     // let v= await Iterator.next()
// //     // console.log(v)
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// //     console.log(await Iterator.next())
// // })()//this is return Iterator
// //  {value: 0, done: false}
// //  {value: 1, done: false}
// //  {value: 2, done: false}
// //  {value: 3, done: false}
// //  {value: 4, done: false}
// //  {done: true}
// //  {done: true}

// // this is IFE OUTPUT only Value 2nd and Await way

// (async function(){
//     for await (let v of AsyncIterable){
//         console.log(v)
//     }
// })()return 0,1,2,3,4,




// this is Async Generators

async function* myAsyncGenerators(){
    let i =0;
    
    while (true){
        if(i > 5) return 
        yield await Promise.resolve(i++) 
    }
};

(async function(){
    for await (let v of myAsyncGenerators()){
        console.log(v)
    }
})()//this return same output 0,1,2,3,4,5