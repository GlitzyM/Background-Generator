let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let css = document.querySelector("h3");
let body = document.querySelector("body");

function colorSelector() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;  //Template strings
    css.textContent = body.style.background;
}

colorSelector() //To set the background color and the h3 element values during page load.

color1.addEventListener("input", colorSelector);
color2.addEventListener("input", colorSelector);

let button = document.createElement("button");
button.appendChild(document.createTextNode("Random"));
body.appendChild(button);


function randomNumber() {
    let styleLeft = css.textContent.split("(")[2].split(")")[0].split(",");
    let styleRight = css.textContent.split("(")[3].split(",");
    styleRight[2].replace("))", "");

    styleRightNew = []

    for (i = 0; i < styleRight.length; i++) {
        if (styleRight[i].includes("))")) {
            styleRightNew.push(styleRight[i].replace("))", ""));
        } else if (styleRight[i].includes(" ")) {
            styleRightNew.push(styleRight[i].replace(" ", ""));
        } else {
            styleRightNew.push(styleRight[i]);
        }
    }

    let listItem1 = document.createElement("li")
    listItem1.appendChild(document.createTextNode(Math.floor(Math.random() * styleLeft[0])));
    listItem1.style.listStyle = "none";
    body.appendChild(listItem1);
    let listItem2 = document.createElement("li")
    listItem2.appendChild(document.createTextNode(Math.floor(Math.random() * styleRightNew[0])));
    listItem2.style.listStyle = "none";
    body.appendChild(listItem2);
}


button.addEventListener("click", randomNumber)
