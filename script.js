function getTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours.toString().length < 2 ? hours = "0" + hours : hours;
    document.getElementById('hours').innerHTML = hours;

    minutes.toString().length < 2 ? minutes = "0" + minutes : minutes;
    document.getElementById('minutes').innerHTML = minutes;

    seconds.toString().length < 2 ? seconds = "0" + seconds : seconds;
    document.getElementById('seconds').innerHTML = seconds;
};
getTime();
setInterval(getTime, 1000);
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const hourRotation = (hours + minutes / 60) * 30;
    const minuteRotation = (minutes + seconds / 60) * 6;
    const secondRotation = (seconds + milliseconds / 1000) * 6;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 50);
updateClock();