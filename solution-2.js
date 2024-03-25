function checkSpeed(speed) {
    const speedLimit = 70;
    const pointLimit = 12;
  
    if (speed < speedLimit ) {
      console.log("Ok");
      
    }
    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= pointLimit) console.log("License suspended");
      
     else
      return points;
    
  }
   console.log(checkSpeed(80))