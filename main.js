var clicks = 0;
var rebirths = 0;

const plusOne = document.createElement("label");
plusOne.innerHTML = "+1";
plusOne.style.position = "fixed";
plusOne.style.display = "none";
plusOne.style.top = "20px";
plusOne.style.right = "122.5px";

const counter = document.createElement("label");
counter.innerHTML = "0";
counter.style.position = "fixed";
counter.style.display = "block";
counter.style.top = "15px";
counter.style.right = "195px";

const gameWindow = document.createElement("div");
gameWindow.style.backgroundColor = "grey";
gameWindow.style.width = "120px";
gameWindow.style.height = "120px";
gameWindow.style.border = "2px solid darkgrey";
gameWindow.style.position = "fixed";
gameWindow.style.top = "10px";
gameWindow.style.right = "100px";

const ducky = document.createElement("img");
ducky.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rubber_duck.svg/1935px-Rubber_duck.svg.png";
ducky.style.width = "100px";
ducky.style.height = "100px";
ducky.style.position = "fixed";
ducky.style.top = "20px";
ducky.style.right = "112.5px";
ducky.alt = "Rubber Ducky";
ducky.style.textAlign = "center";

ducky.onclick = function() {
    if (clicks >= 999) {
        rebirths = rebirths + 1;
        if (rebirths == 1) {
            clicks = 0;
            ducky.src = "https://i.ibb.co/N3FQsq8/1935px-Rubber-duck-svg.png";
        } else if (rebirths > 1) {
            window.alert("You've reached max rebirths!  Don't worry though, you can keep going!");
        }
    }

    plusOne.style.display = "block";

    ducky.style.width = "90px";
    ducky.style.height = "90px";
    ducky.style.position = "fixed";
    ducky.style.top = "25px";
    ducky.style.right = "117.5px";

    counter.innerHTML = clicks;

    setTimeout(function() {
        plusOne.style.display = "none";

        ducky.style.width = "100px";
        ducky.style.height = "100px";
        ducky.style.position = "fixed";
        ducky.style.top = "20px";
        ducky.style.right = "112.5px";
    }, 250);
    clicks = clicks + 1;
};

document.body.appendChild(gameWindow);
document.body.appendChild(ducky);
document.body.appendChild(plusOne);
document.body.appendChild(counter);