const container = document.querySelector('.container');

let size = 16;
let gridSize = size * size;
container.style.gridTemplateColumns = "repeat("+size+", auto)"
container.style.gridTemplateRolumns = "repeat("+size+", auto)"
for(let i = 1; i <= gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div)
}


const boxes = document.querySelectorAll('.box');
boxes.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    });
});

const clearButton = document.querySelector("#clearButton");
clearButton.onclick = ( () => {
    size = prompt('Select new size (max 100)');
    //check to see if number is string or number itself
    while (size > 100){
        size = prompt('Invalid size. Select another (max 100)');
    }
});

function clearBoxBackground (){
    boxes.forEach((div) => {
        div.classList.remove('hovered');
    })
}

function makeNewGrid (){
    let newSize = prompt('Select new size (min 2, max 100)');
    while ((newSize > 100) || (newSize < 2)){
        newSize = prompt('Invalid size, Select another (min 2, max 100)')
    }

}

function deleteOldGrid(){
    while(container.hadChildNodes()){
        container.removeChild(div);
    }
}

function defineSize(size){
    if(arguments[0] == undefined){
        return 16;
    }else{
        return size;
    }
}
