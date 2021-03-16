const container = document.querySelector('.container');
let size = 16; //we will be able to change this later
let gridSize = size*size;

for(let i = 1; i <= gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div)
}
