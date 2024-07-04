const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid");
let promptInput = 0;
function createGrid(promptInput){

    let widthValue = `calc(600px / ${promptInput})`;
    let heightValue = widthValue;

    for(i = 0; i < (promptInput * promptInput); i++){
        let div = document.createElement("div");
        div.setAttribute("style", `width: ${widthValue}; height: ${heightValue}; background-color: #f2efdf;`);
        container.appendChild(div);
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
            div.style.opacity = (getComputedStyle(div).getPropertyValue("opacity") - 0.1);
        });
    }
}

function randomColor(){
    let randomColor = Math.floor(Math.random() * 256);
    return randomColor;
}


gridBtn.addEventListener('click', () => {
    while (container.firstChild) {
        container.firstChild.remove();
      }

    promptInput = Number(promptInput); 
    promptInput = prompt('Enter the grid size (Between 1 - 100)');
    if(promptInput >= 1 && promptInput <= 100){
        createGrid(promptInput);
    }
    else {
        alert("Invalid, defaulting to size 16");
        createGrid(16);
    }
})

createGrid(16);
