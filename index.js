// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(42 - pickupLocation);
}


function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const differenceInBlocks = Math.abs(destination - start);
  return differenceInBlocks * 264;
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet > 2500) {
    return "cannot travel that far";
  } else if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else {
    return 25;
  }
}
