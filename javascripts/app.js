// Rover Object Goes Here
// ======================

let rover = {
  facing: "N",
  x: 0,
  y: 0,
  travellog: []
};

// Movement Sequence
// ======================

let movementSequence = "bb";

// ======================

function turnLeft(rover){

  console.log("Turning left");

  if (rover.facing === "N") {
    rover.facing = "W";
  
  } else if (rover.facing === "W") {
    rover.facing = "S";

  } else if (rover.facing === "S") {
    rover.facing = "E";
  
  } else if (rover.facing === "E") {
    rover.facing = "N";
  
  }

}

function turnRight(rover) {

  console.log("Turning right");

  if (rover.facing === "N") {
    rover.facing = "E";
  
  } else if (rover.facing === "E") {
    rover.facing = "S";
  
  } else if (rover.facing === "S") {
    rover.facing = "W";
  
  } else if (rover.facing === "W") {
    rover.facing = "N";
  
  }

}

function moveForward(rover) {

  console.log("Moving forward")

  if (rover.facing === "N" && rover.y <= 9) {
    rover.y++;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.facing === "E" && rover.x <= 9) {
    rover.x++;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.facing === "S" && rover.y >= -9) {
    rover.y--;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.facing === "W" && rover.x >= -9) {
    rover.x--;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else {
    console.log("Cannot move forward: out of boundaries!")
  }

}

function moveBackwards(rover) {

  console.log("Moving backwards")

  if (rover.facing === "N" && rover.y >= -9) {
    rover.y--;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.facing === "E" && rover.x >= -9) {
    rover.x--;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.faving === "S" && rover.y <= 9) {
    rover.y++;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else if (rover.facing === "W" && rover.x <= 9) {
    rover.x++;
    console.log("Current Position: " + rover.x + "/" + rover.y);
    rover.travellog.push([rover.x + "/" + rover.y]);

  } else {
    console.log("Cannot move backwards: out of boundaries!");
  }

}

function movement(movementSequence) {
  
  for (i=0; i<movementSequence.length; i++) {
    
    let command = movementSequence[i]

    if (command === "f") {
      moveForward(rover);

    } else if (command === "r") {
      turnRight(rover);

    } else if (command === "l") {
      turnLeft(rover);

    } else if (command === "b") {
      moveBackwards(rover);
      
    } else {
      console.log("Invalid Command. Check Sequence!");
    }
  }

}

movement(movementSequence);
console.log(rover.travellog);
console.log("Travellog: " + rover.travellog);