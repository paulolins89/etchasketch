//This sets the initial grid at 16x16
const container = document.querySelector('.container');
let size = 16;
makeGrid(size);

function makeGrid(size){
    let gridSize = size * size;
    container.style.gridTemplateColumns = "repeat(" + size + ", auto)"
    container.style.gridTemplateRolumns = "repeat(" + size + ", auto)"
    for(let i = 1; i <= gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div)
    }
    //sets an eventlistener for hovering and changing the color of the boxes
    const boxes = document.querySelectorAll('.box');
    let idNumber = 1;
    boxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.id = idNumber;
            const hoveredColor = document.getElementById(idNumber);
            hoveredColor.style.backgroundColor = "rgb(" + (Math.random() * 256) + ", " + (Math.random() * 256) + ", " + (Math.random() * 256) + ")"; 
            idNumber++;
            //div.classList.add('hovered');
            });
        //const hoveredColor = document.querySelector('.hovered');
        //hoveredColor.style.backgroundColor = "rgb(" + (Math.random() * 256) + ", " + (Math.random() * 256) + ", " + (Math.random() * 256) + ")";    
    });
}

//eventlistener to see if button is pressed to change the size of the grid
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener('click', () => {
    makeNewGrid();
});


//function to make a new grid taking into consideration the input from the user
function makeNewGrid (){
    let newSize = prompt('Select new size (min 2, max 100)');
    while ((newSize > 100) || (newSize < 2)){
        newSize = prompt('Invalid size, Select another (min 2, max 100)')
    }
    deleteOldGrid();
    makeGrid(newSize);
}

//function to delete the old grid
function deleteOldGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

//eventListen to clear the boxes in the same size
const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.classList.remove('hovered');
        div.removeAttribute('style');
    })
});
