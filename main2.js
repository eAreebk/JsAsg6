/*Create a webpage with a div element. Add an event listener tothediv so that when the mouse hovers over it, the background color
changes. When the mouse moves out, the background color shouldrevert to its original state*/

const myDiv = document.getElementById("myDiv");

myDiv.addEventListener("mouseenter", function() {
    myDiv.style.backgroundColor = "lightgreen";
});

myDiv.addEventListener("mouseleave", function() {
    myDiv.style.backgroundColor = "lightblue";
});
