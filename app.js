
var end = Date.now() + (15 * 1000);

var interval = setInterval(function() {
    if (Date.now() > end) {
        return clearInterval(interval);
    }

    confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        shapes: ['square'],
        origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2
        }
    });
}, 250);



const endDate = new Date("Jan 23, 2020, 09:57:00").getTime();


const timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        "<span class='label'>DAY(S)</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0 "+hours).slice(-2) +
        "<span class='label'>HR(S)</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0 "+mins).slice(-2) +
        "<span class='label'>MIN(S)</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0 "+secs).slice(-2) +
        "<span class='label'>SEC(S)</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000)