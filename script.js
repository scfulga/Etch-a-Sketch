let promptInput = prompt('Enter the grid size (Between 1 - 100)');
const container = document.querySelector("#container");;

function createGrid(){
    let widthValue = `calc(600px / ${promptInput})`;
    let heightValue = widthValue;

    for(i = 0; i < (promptInput * promptInput); i++){
        let div = document.createElement("div"); 
        div.setAttribute("style", `width: ${widthValue}; height: ${heightValue}; border-color: black; border-width: 1px; border-style: solid; `);
        container.appendChild(div);
    }

}

while (isNaN(promptInput) || promptInput < 1 || promptInput > 100 ){
    alert('Invalid');
    promptInput = prompt('Enter the grid size (Between 1 - 100)');
    createGrid();

}

createGrid();
