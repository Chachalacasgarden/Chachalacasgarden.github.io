const greeting = document.getElementById("greeting");
const username = window.prompt("What's your name? ", "Rosa");
if (username && username.trim() !== "") { greeting.textContent = "Welcome to my website, " + username.trim() + "!"; }
else { greeting.textContent = "Welcome to my website!"; }


