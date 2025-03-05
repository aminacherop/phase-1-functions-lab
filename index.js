//Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    if(pickupLocation>=42){
        return  pickupLocation - 42;
    }else{
        return  42 - pickupLocation;
    }
    
}



console.log(distanceFromHqInBlocks(100));

function distanceFromHqInFeet(pickupLocation){

    return distanceFromHqInBlocks(pickupLocation) * 264;

}

function distanceTravelledInFeet(startBlock, endBlock){
    if(endBlock>=startBlock){
        return  (endBlock-startBlock) * 264;
    }else{
        return  (startBlock-endBlock) * 264;
    }
}

console.log(distanceTravelledInFeet(34,32));


 function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return  (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else{
        return `cannot travel that far`;
    }

    
 }
console.log(calculatesFarePrice());