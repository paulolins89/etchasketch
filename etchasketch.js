//This sets the initial grid at 16x16
const container = document.querySelector('.container');
let size = 16;
makeGrid(size);

function makeGrid(size){
    let gridSize = size * size;
    container.style.gridTemplateColumns = "repeat("+size+", auto)"
    container.style.gridTemplateRolumns = "repeat("+size+", auto)"
    for(let i = 1; i <= gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div)
    }
    //sets an eventlistener for hovering
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add('hovered');
        });
});
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', () => {
    makeNewGrid();
});

function makeNewGrid (){
    let newSize = prompt('Select new size (min 2, max 100)');
    while ((newSize > 100) || (newSize < 2)){
        newSize = prompt('Invalid size, Select another (min 2, max 100)')
    }
    deleteOldGrid();
    makeGrid(newSize);
}

function deleteOldGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function clearBoxBackground (){
    boxes.forEach((div) => {
        div.classList.remove('hovered');
    })
}
