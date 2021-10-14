// Code your solution in this file!
function distanceFromHqInBlocks(location){

    const hqStreet = 42;
    let blocksDistance = Math.abs(location - hqStreet);
    return blocksDistance;
}

function distanceFromHqInFeet(location){

    let feetDistance =  distanceFromHqInBlocks(location) * 264  
    return feetDistance;

}

function distanceTravelledInFeet(startBlock, endBlock){

    let feetTraveled = (Math.abs(endBlock - startBlock)) * 264;
    return feetTraveled;

}

function calculatesFarePrice(start, end){
    let feetTraveled = distanceTravelledInFeet(start,end);
    let fare;
   
    if(feetTraveled <= 400){
        fare = 0;
    }
    else if(feetTraveled >= 401 && feetTraveled <= 2000){
        fare = (feetTraveled - 400) * 0.02;
    }
    else if(feetTraveled > 2000 && feetTraveled < 2500){
        fare = 25;
    }
    else if(feetTraveled >= 2500){
        return ("cannot travel that far")
    }

    return fare;
}
