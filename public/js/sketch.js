
let angle = 0;
let rect_width = 45;
let maxDistance;
let cnv;
 
if(window.matchMedia("(max-width: 320px)").matches) {
    rect_width = 15;
} else if(window.matchMedia("(max-width: 375px) and (min-width: 321px)").matches) {
    rect_width = 20;
} else if(window.matchMedia("(max-width: 425px) and (min-width: 376px)").matches) {
    rect_width = 25;
} else if(window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
    rect_width = 30;
} else if(window.matchMedia("(max-width: 1024px) and (min-width: 769px)").matches) {
    rect_width = 35;
} else if(window.matchMedia("(max-width: 1440px) and (min-width: 1025px)").matches) {
    rect_width = 45;
}



function setup(){
    const padding = displayWidth * (2 / 100);
    const window_width = displayWidth - (padding * 2);
    const window_height = (displayHeight - (padding * 2)) - 400;
    cnv = createCanvas(window_width, window_height, WEBGL);
    cnv.parent('sketch-holder');
    maxDistance = dist(0, 0, 800, 800);
}

function draw() {
    background('#fff350');
    // set up ligthing 
    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    ambientLight(8, 8, 8);
    pointLight(255, 215, 0, locX, locY, 90);

    translate(width / 50 , height / 2, -80);
    rotateX(PI - 0.2);
    rotateY(PI / 2);
    
    for(let z = 0; z < width; z += rect_width) {
        for(let x = 0; x < width; x += rect_width) {
            // update values to canvas
            push();
            // calculate the distance for offset value 
            let distance = dist(x, z, width / 2, width / 2);
            let offset = map(distance, 0, maxDistance, 5, -5);
            //create rectangle height and map it to new range, points 1 and -1 gives sin wave
            const rect_height = map(sin(angle + offset), -1, 1, 0, 200);
            //material type and color
            ambientMaterial(255,209,49);
            //create the view with user perspective 
            let xCoord = (x - width);
            let yCoord = 0;
            let zCoord = (z - (width / 2));
            translate(xCoord,yCoord,zCoord);
            //create box 
            box(rect_width, rect_height, rect_width);
            //clear all updated values
            pop();
        }
    }
    // The angle is used to control the speed of the animation
    angle -= 0.04; 
}