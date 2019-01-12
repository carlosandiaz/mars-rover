// Rover Object Goes Here
// ======================


var rover = {
  direction: "N",
  }


// Turn left

function turnLeft(rover){
  
  console.log("turnLeft was called!");
  
    switch (rover.direction) {
      case "N":
      rover.direction = "W";
      break;
      case "E":
      rover.direction = "N";
      break;
      case "S":
      rover.direction = "E";
      break;
      case "W":
      rover.direction = "S";
      break;
  }
}


// Turn right

function turnRight(rover){

  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
}


function moveForward(rover){
  console.log("moveForward was called")
}
