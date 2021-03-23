//This sets the initial grid at 16x16 with the black selection
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
    makeBoxesBlack();
}


/* TRYING TO SEE IF WE CAN GET THE CHOICES BUTTONS WORKING */
const choiceButtons = document.querySelectorAll('.choiceButtons');
choiceButtons.forEach((input) => {
    input.addEventListener('click', (e) => {
        if (input.id == 'blackButton'){
            makeBoxesBlack();
        }else if (input.id == 'randomColorsButton'){
            makeBoxesRandomColors();
        }else if (input.id == 'shadesOfBlackButton'){
            makeBoxesShadesOfBlack();
        }else if (input.id == 'eraserButton'){
            erase();
        }else if (input.id == 'chooseColorButton'){
            let color = document.getElementById('chooseColorButton').value;
            chooseColor(color);

        }
    });
});


//need to fix this function
function chooseColor(color){
    //console.log(color);
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            //this turns on the hovered class and makes it black
            //div.classList.add('hovered');
            div.style.backgroundColor = color;    
        });
});
}

function makeBoxesBlack(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            //this turns on the hovered class and makes it black
            //div.classList.add('hovered');
            e.currentTarget.style.backgroundColor = "rgb(0, 0, 0)";    
        });
});
}

function erase(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "rgb(255, 255, 255)";    
        });
});
}

function makeBoxesRandomColors(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            //this turns on the hovered class and makes it black
            e.currentTarget.style.backgroundColor = "rgb(" + (Math.random() * 255) + ", " + (Math.random() * 255) + ", " + (Math.random() * 255) + ")"; 
            });
});
}

function makeBoxesShadesOfBlack (){
    const boxes = document.querySelectorAll('.box');
    //let lightness = 0;
    boxes.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
            if ((e.currentTarget.style.backgroundColor == 'rgb(0, 0, 0)') || (e.currentTarget.style.backgroundColor == 'rgb(255, 255, 255)')){
                console.log('found!');
            }else{
                console.log('not working');
            }
            //div.style.backgroundColor = "hsl(0, 0%, " + lightness + "%)";
            //lightness = lightness + 10;
            //if (lightness == 100){
                //lightness = 0;
            //}
        });
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
    clearBoxes()});

function clearBoxes(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => {
        //removes any hovered class added to the grid
        div.classList.remove('hovered');
        //removes any style attribute added to the grid
        div.removeAttribute('style');
    })
}
