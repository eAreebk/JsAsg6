/* Create a webpage with a button. Attach a JavaScript event listener to the button, 
 so when it is clicked, an alert is displayed saying "Button Clicked! */

 const but = document.getElementById("btn");

 function namee(){
   but.innerHTML = "Button is clicked";
}

 but.addEventListener("click", namee);

 