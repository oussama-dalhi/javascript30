const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    // seconds to degrees
    const seconds = now.getSeconds();
    const secondsToDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsToDeg}deg)`;

    if (seconds === 0) {
     secondHand.style.transition = 'none';
    } else if (seconds === 1) {
     secondHand.style.transition = '';
    }
    // minutes to degrees
    const minutes = now.getMinutes();
    const minutesToDeg = ((minutes +  seconds / 60) / 60 * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesToDeg}deg)`;
    // hours to degrees
    const hour = now.getHours();
    const hourToDeg = ((hour % 12 + minutes / 60) / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
}
setInterval(setDate, 1000);