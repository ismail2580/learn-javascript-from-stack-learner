// // // // this loop with dom Element


// // // let listItem = document.getElementsByTagName('li')

// // // // this is 1st way convert array  
// // // // let listItems = Array.from(listItem);

// // // // this is 2nd way convert array  
// // // // let listItems = Array.prototype.slice.apply(listItem)

// // // // this is 3rd way and easy and es6way convert array  
// // // let listItems = [...listItem]
// // // listItems.forEach((li, index) =>{
// // //     let text = li.innerHTML
// // //     li.innerHTML = `(${index + 1}) ${text}`
// // // })





// // // // this is create a new Elements 

// // // let li = document.createElement('li')
// // // // this add tag class 
// // // li.className ='list-item-group'
// // // // this is set setAttribute
// // // li.setAttribute('style', 'color:#fff; list-style : none;')
// // // // this set inner text
// // // li.innerHTML = 'six'



// // // this call a function
// // let li = createElement('li', 'six', 'list-item-group')
// // li.setAttribute('style', 'color:#fff; list-style : none;')
// // let list = document.getElementById('list')
// // list.appendChild(li)
// // console.log(list)

// // // this is createElement 
// // let h1 = createElement('h1', 'This reuse function', 'list-item-group')
// // h1.setAttribute('style', 'color:#fff; list-style : none;')
// // let liste = document.getElementById('list')
// // list.appendChild(h1)
// // console.log(list)



// // //// this is createElement with function 
// // function createElement(tagName, innerHTML, className, ){
// //     let tag = document.createElement(tagName);
// //     tag.innerHTML = innerHTML|| '';
// //     tag.className = className || '';
// //     return tag
// // }
// // let p1 = createElement('p', `this p1 this element parent div `, 'lead')

// // let p2 = createElement('p', `this is p2 this element parent div`, 'lead')

// // let div = createElement('div')
// // append(div, [p1,p2])
// // div.setAttribute('style', 'color:#fff; font-size : 25px;')
// // console.log(div)
// // // this is create parent Element
// // let container = document.getElementById('container')
// // container.appendChild(div)

// // // this controll position beforebegin, beforeend, afterbegin, afterend
// // list.insertAdjacentElement('beforebegin', div)
// // function append(parent, children){
// //     children.forEach(child => parent.appendChild(child));
// // }




// // // . Update & Remove any DOM Elements

// // // this is a child selector
// // let firstChild = list.firstElementChild

// // // this is update 
// // setTimeout(() => {
// //     firstChild.innerHTML = firstChild.innerHTML + '(Modified )'
// //     firstChild.style.backgroundColor = 'gray'
// // }, 5000);

// // // this is remove Element
// // // firstChild.remove()



// // // this is clone Element 
// // let lastItem = list.lastElementChild.cloneNode(true)
// // // this is inner value 
// // lastItem.innerHTML = 'cloneNode'
// // // this push a Element
// // list.appendChild(lastItem)



// // // this is get Attribute methods

// // // console.log(list.attributes)
// // // console.log(list.getAttributeNames())
// // // console.log(list.getAttributeNode('id'))//this is return one attribute
// // // console.log(list.getAttribute('id'))//this is return one attribute value



// // //  Styling DOM

// let list = document.getElementById('list');
// // title.style.color = '#f00';
// // title.style.fontSize = '4rem';
// // title.style.background = '#fff';
// // title.style.width = '50%';
// // title.style.borderRadius = '10px'
// // title.style.display = 'flex'
// // title.style.justifyContent ='center'

// let styleObj ={
//     color : '#f00',
//     fontSize : '4rem',
//     background : '#fff',
//     width : '50%',
//     borderRadius : '10px',
//     display : 'flex',
//     justifyContent :'center',
//     flexDirection:'column',
//     alignItems :'center'
// };
// [...list.children].forEach(li => Object.assign(li.style, styleObj))
// Object.assign(list.style, styleObj)