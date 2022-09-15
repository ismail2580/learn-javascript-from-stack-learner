// // const a = 10;
// // const b = 20;
// // const sum = (a, b) => a + b;

// const {
//   javascript
// } = require("webpack");

// // console.log(sum(a, b));

// // // this is String
// // const str = `                                           i'm ismail Hossain, i'm form bangladash                            `;

// // console.log(str.trim()); //trim() samna pisona are space remove kore

// // const age = 23;
// // const name = "ismail hossain somrat";

// // // 1st way
// // // console.log('My Name is ' + name + ' and My age is ' + age + ' yars Old')

// // // 2nd way And This is  Es6 Way

// // console.log(
// //   `My Name Is ${name} And I'm a ${age < 18 ? "Not " : ""}Adult My age is ${age}`
// // );

// // console.log(name.padStart(30, " *")); // akhane vola hoisa 30cletter are kom hoila bakita * pilap hoba

// // console.log(name.padEnd(30, " 0")); // akhane vola hoisa 30cletter are kom hoila bakita 0 pilap hoba

// // console.log("ismail ".repeat(20)); //ata 20 bar ata output deba

// // // this is arow function

// // // var obj = {
// // //     name:'ismail Hossain',
// // //     print:function(){
// // //         setTimeout(function(){
// // //             console.log(`Hello ${this.name}`)//return Hello undefined this problam
// // //         })
// // //     }
// // // }
// // // obj.print()

// // // 1st awy normal function with bind this
// // var obj = {
// //   name: "ismail Hossain",
// //   print: function () {
// //     setTimeout(
// //       function () {
// //         console.log(`Hello ${this.name}`); //return Hello ismail Hossain
// //       }.bind(this),
// //       1000
// //     );
// //   },
// // };
// // obj.print();

// // // 2nd awy normal function with this store var
// // var obj = {
// //   name: "ismail Hossain",
// //   print: function () {
// //     let storeThis = this;
// //     setTimeout(function () {
// //       console.log(`Hello ${storeThis.name}`); //return Hello undefined this problam
// //     }, 2000);
// //   },
// // };
// // obj.print();

// // // 3rd awy arow function
// // var obj = {
// //   name: "ismail Hossain",
// //   print: function () {
// //     setTimeout(() => {
// //       // akhana this sa tar perant ARE object khoja
// //       console.log(`Hello ${this.name}`); //return Hello undefined this problam
// //     }, 3000);
// //   },
// // };
// // obj.print();

// // // Default Parameters
// // function sqr(n = 1) {
// //   return n * n;
// // }
// // console.log(sqr()); //return Default Parameters n=1

// // function user(msg = "hello", name = "BitByte") {
// //   console.log(`${msg} ! ${name}`);
// // }
// // user(null, "ismail");

// // // Custom Iteratable Object in Javascript

// let objI = {
//   start: 1,
//   end: 5,
//   // this is 1st  way
//   // [Symbol.iterator]: function () {
//   //   let currentValue = this.start;
//   //   let self = this;
//   //   return {
//   //     next() {
//   //       return {
//   //         done: currentValue > self.end,
//   //         value: currentValue > self.end ? undefined : currentValue++,
//   //       };
//   //     },
//   //   };
//   // },

//   // 2nd way 
//   // [Symbol.iterator]: function* (){
//   //   let currentValue = this.start;
//   //   while(currentValue <= this.end){
//   //     yield currentValue++
//   //   }
//   // }
// };

// // // 1str way
// // for(let i of objI){
// //     console.log(i)
// // }

// // // 2nd way
// // const iterator = objI[Symbol.iterator]();

// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// // // Rest & Spread Operato..........

// // function sum(...rest) {
// //   return rest.reduce((a, b) => a + b);
// // }

// // console.log(sum(1, 2, 3, 4, 5)); //return total sum 15

// // let t = [1, 2, 3];

// // console.log(...t); //return 1 2 3

// // let SpreadObj = {
// //   a: 10,
// //   b: 20,
// //   c: 45,
// // };

// // let SpreadObj2 = {
// //   ...SpreadObj, //created new object
// // };

// // console.log(SpreadObj2);

// // this short head Object

// let objValue = (a = 10),
//   b = 20;

// // // this fullObj
// // let fullObj = {
// //     a:a,
// //     b:b,
// //     print : function(){

// //     }
// // }

// // this is  short head Object

// let short = {
//   a,
//   b,
//   print() {},
// };

// console.log(short); //this return same OutPut {a: 10, b: 20, print: ƒ}a: 10b: 20print: ƒ print()[[Prototype]]: Object

// // this is  Destructuring Object

// let LogIn = {
//   name: "ismial Hossain",
//   email: "ismailsomrat2580@gmail.com",
//   address: {
//     city: "Dhaka",
//     country: "Bangladash",
//   },
// };

// let {
//   name,
//   email,
//   address: { city, country },
// } = LogIn;

// console.log(name, email, city, country); //return ismail Hossian ismailsomrat2580@gmail.com Dhaka Bangladash

// let arr = [1, 2, 3, 4, 5];

// let [first, second, , , , last] = arr;

// console.log(first, second, last); //return 1 2 5

// // Object From Entries and fromEntries

// let ObjArr = {
//   a: 30,
//   b: 24,
// };

// console.log(Object.entries(ObjArr)); //return Array like data ['a', 30]  ['b', 24]

// let ArrObj = [
//   ["a", 20],
//   ["b", 25],
// ];

// console.log(Object.fromEntries(ArrObj)); // return Object like data {a: 20, b: 25}

// // this is iterator manually

// let array = [1, 2, 3, 4, 5, 6];

// function createIteratoe(collection) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i > collection.length,
//         value: collection[i++],
//       };
//     },
//   };
// }

// // let iterat = createIteratoe(array);

// /////// this is iterator method
// let iterat = array[Symbol.iterator]()

// console.log(iterat.next()) //return done: false value: 1[[Prototype]]: Object
// console.log(iterat.next())//return done: false value: 2[[Prototype]]: Object
// console.log(iterat.next())//return done: false value: 3[[Prototype]]: Object
// console.log(iterat.next())//return done: false value: 4[[Prototype]]: Object
// console.log(iterat.next())//return done: false value: 5[[Prototype]]: Object
// console.log(iterat.next())//return done: false value: 6[[Prototype]]: Object
// console.log(iterat.next())//return done: true value: undefined[[Prototype]]: Object

// // this is iterat string
// let string = 'TEXT'

// let strIterat = string[Symbol.iterator]()

// console.log(strIterat.next())//return {done: false, value: T }[[Prototype]]: Object
// console.log(strIterat.next())//return {done: false, value: E }[[Prototype]]: Object
// console.log(strIterat.next())//return {done: false, value: X }[[Prototype]]: Object
// console.log(strIterat.next())//return {done: false, value: T}[[Prototype]]: Object
// console.log(strIterat.next())//return done: true value: undefined[[Prototype]]: Object

// this for of loop why of of is a find only value

// // this for of loop with Array
// const arr = [1, 2, 3, 4, 5, 6, 7];


// for(let v of arr){
//   console.log(v) //this is return just only value 1, 2, 4, 5, 6, 7
// }

// // this is for of loop with string

// const myName = 'ismail Hossain'

// for(let v of myName){
//   console.log(v)//i, s, m, a, i, l, , H, o, s, s, a, i, n
// }

// const obj ={
//   a:10,
//   b:20
// }

// for(let v of obj){
//   console.log(v) //return error because  this not iterable
// }



// Any function with a star is a generator 

// this is generator


// function* generate(){
//   yield 1
//   yield 2
//   yield 3

// }

// const arr = [1,2,3]

// function* generate(collection){
//   for(let i =0; i<=collection.length; collection++){
//     yield collection[i]
//   }
// }

// let it = generate(arr)

// console.log(it.next())  //return done: false value: 1[[Prototype]]: Object
// console.log(it.next())  //return done: false value: 2[[Prototype]]: Object
// console.log(it.next())  //return done: false value: 3[[Prototype]]: Object
// console.log(it.next())  //return done: true value: undefinde [[Prototype]]: Object



// // data structure in javascript 

// //  this set 

// const set = new Set([1,2,3,])
// set.add(4),
// set.add(5),
// set.add(1)//1 Add kora jabe na karon 1 all radey ase 
// set.add(2)//2 Add kora jabe na karon 2 all radey ase

// // set.clear() // this is return all data 0

// // set.delete(3) // this remove 3

// // console.log(set.has(5)) //this is finde any digit

// console.log(set.keys())//this is return { [iterator] }
// console.log(set.values())//this is lock like keys return { [iterator] }
// console.log(set)//return set {1, 2, 3, } 
// console.log(set.size) //return 5


// // this map 
// let map = new Map([
//   ['a', 10],
//   ['b', 20],
//   ['c', 30]
// ])

// // map.set('d', 40) //this is add new key and value

// // map.delete('c') //this is remove c key and value
// // console.log(map.size)//return 3
// // console.log(map)// this return Map { 'a' => 10, 'b' => 20, 'c' => 30 }
// // console.log(map.get('b')) //this is output 'b' key are value 
// // console.log(map.values()) //this is return only value 
// // console.log(map.keys())//this is return only keys
// // console.log(map.entries()) // this is return Iterator keys and value
// map.forEach((v, k) => {
//   console.log(k, v)// this is return smoth keys and value a 10 b 20 c 30
// })

// //  this is Weak Set  


// // this is javascript class 

// class Rectangle {
//   constructor(width, height){
//     this.width = width;
//     this.height = height
//     //this is proparty
//     this.method1 = function(){
//       console.log('Methods 1') //return function 
//     }
//   }
//   name = 'ismail' //this is not a prototype this is proparty
//   method = function(){
//     console.log('teast method2') //return function
//   }

//   //this is add a Prototypepe 
//   drow(){
//     console.log('Drawing')
//   }
// }

// const Rect1 = new Rectangle(45, 30)

// console.log(Rect1) //return Rectangle { width: 45, height: 30 }
// // console.log(Rect1.drow()) // this prototype



// Static Method

// class Person {
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//   }

//   print(){
//     console.log(this.name, this.email )
//   }
//   static create(str) {
//      let person = JSON.parse(str)
//      return new Person (person.name, person.email )
//   }
// }

// let str = '{"name": "ismail", "email": "ismailsomrat2580@gmail.com"}'

// let p1 = Person.create(str)

// console.log(p1) //return Person { name: 'ismail', email: 'ismailsomrat2580@gmail.com' }


// //this is class Data Private with Symbol

// let _name = Symbol() //this is privet symbol
// let _reduce = Symbol()//this is privet symbol
// let _Drow = Symbol()//this is privet symbol

// class Circle {
//   constructor(name, reduce ){
//     this[_reduce] = reduce //return this is proparty privet 
//     this[_name] = name//return this is proparty privet
//   }
//   [_Drow](){ //return this is method privet
//     console.log('Drawing....')
//   }
// }

// let c1 = new Circle('ismail hossain', 20)

// console.log(c1) // return Circle { [Symbol()]: 20, [Symbol()]: 'ismail hossain' }


// // this is Private Properties with WeakMap 

// let _name = new WeakMap() //this is privet WeakMap
// let _reduce = new WeakMap() //this is privet WeakMap
// let _resize = new WeakMap() // this is privet method  WeakMap

// class Circle {
//   constructor(reduce, name) {
//     this.size = 100
//     _reduce.set(this, reduce) //return this is proparty privet 
//     _name.set(this, name) //return this is proparty privet
//     _resize.set(this, () => { //Here is allow only arow function
//       console.log(this.size)
//     })
//   }
//   get reduce(){
//     return _reduce.get(this)//this is get a proparty
//   }
//   set reduce(v){
//     _reduce.set(this, v)//this change a value acsses
//   }
//   Drow() {
//     console.log('Drawing....')
//     console.log(_reduce.get(this), _name.get(this)) // this get value
//     _resize.get(this)() //this get value
//   }
// }

// let c1 = new Circle(20, 'ismail hossain')

// c1.Drow()
// c1.reduce = 100 //this reduce value change
// console.log(c1.reduce)


// // this Inheritance in ES6

// import Shap from "./shap";

// class Rect extends Shap {
//   constructor(color,width, height){
//     super(color)
//     this.width = width;
//     this.height = height;
//   }

//   // this is  Method Overriding  with Es6....
//   drow(){
//     console.log("this is  Method Overriding  with Es6....")
//   }

//   calculate(){
//     return this.width * this.height
//   }
// }

// let r = new Rect('Green', 4, 5)

// console.log(r)// Rect {color: 'color' width: 4, height: 5 }
// r.drow() //return Drawing.... 

// import * as all_func from './allExport'

// console.log(all_func.add(10,20))


// // this just 2 function import
// import { add, div } from "./allExport";

// console.log (add(12,12))
// console.log(div(32,40)


// function changeToInt(v){
//   let result = Number.parseInt(v)

//   if(result !== NaN){
//     return 'this Not a Number'
//   }
//   return result
// }

// let result = changeToInt('errjerjn')

// console.log(result)



// this is try catch Error

// function makeWords(text){
//   try{
//   let str = text.trim()
//   let worde = str.split(' ')
//   return worde
//   }catch(Err){
//     // console.dir(Err.message)
//     console.log('please provide a valid Text')
//   }
// }


// // let words = makeWords('   i\'m ismail hossain           ')
// let words = makeWords(32) //this is Error

// console.log(words)



// this is theow Error and finally 
// try{
//   console.log('i\'m  your string')
//   // this is barack point and throw catch block
//   throw new Error('i am Your Error')
//   console.log('i\'m  your string')
//   console.log('i\'m  your string')
//   console.log('i\'m  your string')
// }catch(Err){
//   console.log(Err.message)
// }finally{
//   console.log('i\'m finally block')
// }


// // this is a custom Error

// class CustomError extends Error {
//   constructor(message){
//     super(message)

//     if(Error.captureStackTrace){
//       Error.captureStackTrace(this, CustomError)
//     }
//   }
// }


// try{
//   console.log('i\'m  your string')
//   // this is barack point and throw catch block
//   throw new CustomError('i am Your Error')
//   console.log('i\'m  your string')
//   console.log('i\'m  your string')
//   console.log('i\'m  your string')
// }catch(Err){
//   console.dir(Err)
//   console.log('i am your custom Error')
// }finally{
//   console.log('i\'m finally block')
// }

import './AsynchronousProgramming/1st'
import './AsynchronousProgramming/AJAX'
import './AsynchronousProgramming/Promise'
import './AsynchronousProgramming/Fetch_API'
import './AsynchronousProgramming/AsyncIterator'
import './dom'
import './Dom_Event'