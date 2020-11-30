function displayDateTime() {
    let clock = document.querySelector("#clock");
    let date = document.querySelector("#date");
    let now = new Date();
    clock.textContent = now.toLocaleTimeString();
    date.textContent = now.toLocaleDateString();
}
displayDateTime()
setInterval(displayDateTime, 1000);
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
