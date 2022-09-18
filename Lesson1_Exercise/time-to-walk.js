function getTimeToWalk(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let speedInMetersPerSec = speed * (1000/3600);
    let time = distanceInMeters / speedInMetersPerSec;
    //breaks 1 min every 500m
    let breakMins = Math.floor(distanceInMeters / 500);

    let totalTimeInMins = Math.floor(time / 60) + breakMins;
    let totalTimeInSecs = Number((time + breakMins * 60) - totalTimeInMins * 60).toFixed(0);
    let totalTimeInH = Math.floor(totalTimeInMins / 60);

    let formattedH = totalTimeInH < 10 ? `0${totalTimeInH}` : `${totalTimeInH}`;
    let formattedM = totalTimeInMins < 10 ? `0${totalTimeInMins}` : `${totalTimeInMins}`;
    let formattedS = totalTimeInSecs < 10 ? `0${totalTimeInSecs}` : `${totalTimeInSecs}`;

    console.log(`${formattedH}:${formattedM}:${formattedS}`);
}

getTimeToWalk(4000, 0.60, 5);
getTimeToWalk(2564, 0.70, 5.5);