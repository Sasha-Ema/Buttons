let before = document.getElementById("before");
let after = document.getElementById("after");
let inside = document.getElementById("inside");
let content = document.getElementById("content");
let container = document.getElementById("container");


container.style.background = "yellow";
container.style.height = "50px";

before.onclick = function (){
    container.before(content);
}
after.onclick = function () {
    container.after(content);
}

inside.onclick = function () {
    container.append(content);
}

// oncontextmenue is like right click 
// toggle is like add and remove class together 