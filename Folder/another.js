console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = "sasha";
console.log(document.title);
console.log(document.body);
console.log(document.all);
console.log(document.body);
document.all[1].textContent = "123";
console.log(document.all[1].textContent);
console.log(document.forms);
console.log(document.links);
console.log(document.images);


// get elements
let hid = document.getElementById("header-1");
console.log(hid);
// textcontent shows and pays attention to styling if you for ex have a span inside an element
// apart from innertext , innerhtml to add elements just the content not element inside the element
hid.style.borderBottom = "solid 3px black";


let pehi = document.getElementsByClassName("list");
console.log(pehi[0]);
// pehi[0].textContent = "seseesefghv";
// pehi[0].style.backgroundColor = "green";
// pehi.style.backgroundColor = "#f4f4f4";

for (let i = 0; i < pehi.length; i++) {
    pehi[i].style.backgroundColor = "#f4f4f4";
}

let peehi = document.getElementsByTagName("h1");


let queee = document.querySelector("p"); // u can selelct a class or an element
queee.style.borderBottom = " 5px solid blue";

let inputt = document.querySelector("input");
inputt.value = "Hello"; // grabed the first one cuz the sumbit is the second

let lastele = document.querySelector("input:last-child");
lastele.style.color = "black";

let sectele = document.querySelector("input:nth-child(1)");
sectele.style.color = "black";

let allqu = document.querySelectorAll("input");
console.log(allqu);

// if you wanna change all inputs using dom this is what u do loop on them
for (let i = 0; i < allqu.length; i++){
    allqu[i].style.backgroundColor = "#ccc";
    allqu[i].style.color= "black";
}




// traversing the dom
// how to parent children and siblings and all of that

let itemlist = document.querySelector("#items");
console.log(itemlist.parentNode); // it gives u the parent
itemlist.parentNode.style.backgroundColor = "gray";
console.log(itemlist.parentNode.parentNode);
console.log(itemlist.parentNode.parentNode.parentNode);

console.log(itemlist.parentElement.parentElement);

// same parentnode same parent element

console.log(itemlist.childNodes);

console.log(itemlist.childElementCount);

console.log(itemlist.children[1]);

itemlist.children[1].style.borderBottom = "3px dotted yellow";

itemlist.firstElementChild.style.backgroundColor = "green";
itemlist.firstElementChild.textContent= "Hello first";

itemlist.lastElementChild.textContent= "Hello last";

itemlist.lastElementChild.style.backgroundColor= "yellow";

console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

console.log(itemlist.previousElementSibling);






// create elements and classes inside and ids , content and abend

let newelement = document.createElement("div");
console.log(newelement);
newelement.className = "divclass";
newelement.id = "idiv";
newelement.setAttribute("title", "divtitle");

let divtext = document.createTextNode("this is a text inside a text");

newelement.appendChild(divtext);
console.log(newelement);

document.body.appendChild(newelement);

newelement.style.fontSize = "55px";

// insert a class 

// events 
// the old way <button class="btn" onclick="buttonClick(1)">click here</button> + fun in js
function funbtn(){
    console.log("clicked");
}
// so here when u press on click all of these actions will occure
let buttonn = document.getElementById("button").addEventListener("click", function(){
    console.log("clicked");
    document.querySelector("h3").textContent = "changed";
    document.querySelector("span").style.backgroundColor = "white";
    document.querySelector("span").style.margin = "25px";
    document.querySelector("span").style.padding= "15px";
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
});
// another event like click is dbclick which occures when u double click on the element
// another event is mousedown as soon as the mouse goes down it works
// mouseup is another event as well
// mouseenter
// mouseleave
// mouseover
// mouseout
// mousemove

// let buttonnn = document.getElementById("button").addEventListener("click",  funbtn());
// mouse events 
// submit event 
// addEvenetListener 
// e.target
// e.preventDefault(); its a fun like addeventlistener 



// form submit event 
// function (e) {
// e.preventDefault()};


// get input value 
// ver newitem = document.getElementById("item").value;



// create new li element
// var li = document.createElement("li");

// add class
// li.className = "thisisaclasssname";

// add text node with input value 
// li.appenedChild(document.createTextNode(newitem));

// itemlist.appenedChild(li);

// create delete button element
// let deletebutton = document.createElement("button");
// add classes to delete button 
// deletebutton.className = "deleteclass";
// deletebutton.appendChild(document.createtextnode("x"));
// append button to li 
// li.appendchild(deletebutton);
// append li to list
// listitem.appendchild(li);



// delete event 
// itemlist.addEventListener("click", removeItem);

//function () removeItem{
  //  if (e.tareget.classList.contains("delete")){
    //    if( confirm("are you sure?")){
      //      let liii = e.target.parentElement;
        //    itemlist.removeChild(liii);
        //}
 //   } // btw all buttons contain the class delete

//}


// the way it works you get the ele and creatre a var for it then make a func for the action u wanna put in it
// then put the action like click or anything with the fun in addeventlistener to add the action
// keyup event     
// search for addEenentListener Events 
// function addSomething (e) {
// let k = e.target.value.toUpperCase();
// console.log(k);
//}
// get list
// let elelist = getElementByTagName("li");
// console.log()

















