// Code your solution in this file!
function distanceFromHqInBlocks(distance){
   return Math.abs(42-distance);
}
function distanceFromHqInFeet(somevalue){
    return Math.abs(somevalue-42)*264;
}
function distanceTravelledInFeet(somevalue1, somevalue2){
    return Math.abs(somevalue2-somevalue1)*264;
}
function calculatesFarePrice(somevalue1, somevalue2){
    if(Math.abs ((somevalue2-somevalue1)*264)<400){
        return 0;
    }
    else if((Math.abs (somevalue2-somevalue1)*264>400 && (Math.abs(somevalue2-somevalue1)*264)<2000)){
        return(Math.abs (somevalue2-somevalue1)*264-400)*0.02;
    }
    else if ((Math.abs (somevalue2-somevalue1)*264)>2000 && (Math.abs (somevalue2-somevalue1)*264)<2500){
        return 25
    }
    else if ((Math.abs (somevalue2-somevalue1)*264)>2500){
        return 'cannot travel that far'
    }
}