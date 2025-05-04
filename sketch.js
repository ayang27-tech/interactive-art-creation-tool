// Interactive Art Creation Tool with p5.js  
let artPiece;  

function setup() {  
    createCanvas(800, 600);  
    artPiece = new ArtPiece();  

    // Setup User Interface  
    createUserInterface();  
}  

// ArtPiece class  
class ArtPiece {  
    constructor() {  
        this.shapes = [];  
        this.colors = [];  
        this.backgroundColor = color(255); // white background  
    }  

    draw() {  
        background(this.backgroundColor);  
        for (let shape of this.shapes) {  
            fill(shape.color);  
            if (shape.type === 'circle') {  
                ellipse(shape.x, shape.y, shape.size);  
            } else if (shape.type === 'rectangle') {  
                rect(shape.x, shape.y, shape.size, shape.size);  
            }  
        }  
    }  

    addShape(type, color, size) {  
        this.shapes.push({ type, color, size, x: random(width), y: random(height) });  
        this.draw();  
    }  

    clearArt() {  
        this.shapes = [];  
        this.draw();  
    }  

    saveArt() {  
        saveCanvas('myArt', 'png');  
    }  
}  

// Function to create the user interface  
function createUserInterface() {  
    const colorPicker = createColorPicker('#ff0000');  
    colorPicker.position(10, height + 10);  

    const sizeSlider = createSlider(10, 100, 50);  
    sizeSlider.position(10, height + 40);  

    const circleButton = createButton('Add Circle');  
    circleButton.position(10, height + 70);  
    circleButton.mousePressed(() => {  
        artPiece.addShape('circle', colorPicker.color(), sizeSlider.value());  
    });  

    const rectangleButton = createButton('Add Rectangle');  
    rectangleButton.position(10, height + 100);  
    rectangleButton.mousePressed(() => {  
        artPiece.addShape('rectangle', colorPicker.color(), sizeSlider.value());  
    });  

    const clearButton = createButton('Clear Art');  
    clearButton.position(10, height + 130);  
    clearButton.mousePressed(() => {  
        artPiece.clearArt();  
    });  

    const saveButton = createButton('Save Art');  
    saveButton.position(10, height + 160);  
    saveButton.mousePressed(() => {  
        artPiece.saveArt();  
    });  
}  

// Draw loop  
function draw() {  
    artPiece.draw();  
}  