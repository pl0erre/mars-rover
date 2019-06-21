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

let movementSequence = "bbbbbbbbbbbb";

// ======================

function turnLeft(rover){

  console.log("Turning left");

    switch(rover.facing) {
      case "N":
        rover.facing = "W";
        break;
      case "W":
        rover.facing = "S";
        break;
      case "S":
        rover.facing = "E";
        break;
      case "E":
        rover.facing = "N";
        break;
    }
  }

function turnRight(rover) {

  console.log("Turning right");

  switch(rover.facing) {
    case "N":
      rover.facing = "E";
      break;
    case "E":
      rover.facing = "S";
      break;
    case "S":
      rover.facing = "W";
      break;
    case "W":
      rover.facing = "N"
      break;
  }
}

function moveForward(rover) {

  console.log("Moving forward")

  if (rover.y <= 4 && rover.y >= -4 && rover.x <= 4 && rover.x >= -4 ) {

    switch(rover.facing) {

      case "N":
        rover.y++;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "E":
        rover.x++;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "S":
        rover.y--;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "W":
        rover.x--;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;
    }

  } else {
    console.log("Cannot move forward: out of boundaries!")
  }

} 
function moveBackwards(rover) {

  console.log("Moving backwards")

  if (rover.y <= 4 && rover.y >= -4 && rover.x <= 4 && rover.x >= -4 ) {
  
    switch(rover.facing) {

      case "N":
        rover.y--;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "E":
        rover.x--;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "S":
        rover.y++;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;

      case "W":
        rover.x++;
        console.log("Current Position: " + rover.x + "/" + rover.y);
        rover.travellog.push([rover.x + "/" + rover.y]);
        break;
    }

  } else {
    console.log("Cannot move backwards: out of boundaries!");
  }

}

function movement(movementSequence) {
  
  for (i=0; i<movementSequence.length; i++) {
    
    let command = movementSequence[i]

    switch(command) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      
      default:
        console.log("Invalid Command. Check Sequence!"); 
    }
    
  }
}

movement(movementSequence);
console.log(rover.travellog);
console.log("Travellog: " + rover.travellog);