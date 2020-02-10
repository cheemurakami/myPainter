'use strict';
let canvasElement = document.querySelector('#canvas');
let colorPickerElement = document.querySelector('#color-picker');
let drawingEnabled = false; //default
let color = 'black';



canvasElement.addEventListener('click', () => {
    drawingEnabled = !drawingEnabled;
})

colorPickerElement.addEventListener('change', () => {
    color = colorPickerElement.value;
})

for (let i = 0; i < 10000; i++){
    let pixelElement = document.createElement('div');
    pixelElement.classList.add('pixel');
    canvasElement.appendChild(pixelElement);

    pixelElement.addEventListener('mousemove', () => {
        if(drawingEnabled){
            pixelElement.style.background = color;
        }
    })
}