const container = document.querySelector('.container');

try{ 
    let gridSize = defineSize(size)*defineSize(size);
}catch(err){
    let gridSize = 16*16;
}

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

const clearButton = document.querySelector('#clrBtn');
clearButton.onclick = () => {
    size = prompt('Select new size (max 100)');
    //check to see if number is string or number itself
    while (size > 100){
        size = prompt('Invalid size. Select another (max 100)');
    }
    defineSize(size);
}

function defineSize (size) {
    let newSize = 0;
    if (size === undefined){
        newSize = 16;
    }else{
        newSize = size;
    }
    return newSize
}