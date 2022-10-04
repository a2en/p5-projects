


// Define some global variables
let segments;
let length;
let x;
let y;
// Define the intitialization function
function setup() {
  createCanvas(512, 512);
}

// Define the main rendering function
function draw() {
  // Redraw the background each frame
  background(69, 39, 160);

  //for loop to draw lines
  for (let i = 0; i < 20; i++) {
    drawLine(random_color(), random_color())
    splash()
  }

  // Draw oval
  noStroke();
  fill('white');
  ellipse(width / 2, height / 2, width * 0.5, height * 0.5);

  //for loop to draw lines
  for (let i = 0; i < 20; i++) {
    drawLine(random_color(), random_color())
    splash()
  }

   // Draw oval
   noStroke();
   fill(69, 39, 160);
   ellipse(width / 2, height / 2, width * 0.2, height * 0.2);

  //for loop to draw lines
  for (let i = 0; i < 5; i++) {
    drawLine(random_color(), random_color())
    splash()
  }


  // Draw the lines once and stop
  noLoop();
}

function drawLine(pointColor,lineColor) {

  // Constrain our lines to 3/4 canvas size
  length = width;

  // Define segments
  segments = 6;

  // Define starting points
  x = length / segments;
  x =0;
  y = height * random(0, 1);

  // Loop through creating line segments
  beginShape()
  noFill()

  // Add the first point
  stroke(lineColor)
  strokeWeight(2)
  curveVertex(x, y)
  curveVertex(x, y)  // duplicate start point

  // Save points for visualization later
  let points = [{ x: x, y: y }]

  // Draw line
  for (let i = 0; i < segments; i++) {

    // Get random y
    yRand = random(-(height * 0.125), height * 0.125);

    // Add point to curve
    curveVertex(x += length / segments, y += yRand);

    // Save point
    points.push({ x: x, y: y })

  }
  vertex(x, y)  // Duplicate ending point
  endShape()
}

function random_color(){
  var rint = Math.floor( 0x100000000 * Math.random());
  return '#' + ('00000'   + rint.toString(16)).slice(-6).toUpperCase();

}

function splash() {
  noStroke();
  fill(random_color());
  circle(random(0,width),random(0,height),random(15));
}

