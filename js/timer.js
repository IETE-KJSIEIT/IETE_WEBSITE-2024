
setInterval(() => {
    let currentDateTime = new Date();
    let targetDateTime = new Date("5 April 2025 13:30");

    let timeDiffMs = targetDateTime - currentDateTime; // Difference in milliseconds

    if (timeDiffMs <= 0) {
        document.querySelector(".timer-section").innerHTML = "<h2>Time's Up!</h2>";
        return;
    }

    let timeDiffSec = timeDiffMs / 1000; // Convert to seconds
    let timeDiffMin = timeDiffSec / 60; // Convert to minutes
    let timeDiffHours = timeDiffMin / 60; // Convert to hours
    let timeDiffDays = timeDiffHours / 24; // Convert to days

    let days = Math.floor(timeDiffDays);
    let hours = Math.floor(timeDiffHours % 24);
    let minutes = Math.floor(timeDiffMin % 60);
    let seconds = Math.floor(timeDiffSec % 60);

    // Update countdown numbers
    document.getElementById("remaining-days").textContent = days;
    document.getElementById("remaining-hours").textContent = hours;
    document.getElementById("remaining-minutes").textContent = minutes;
    document.getElementById("remaining-seconds").textContent = seconds;

    // Update singular/plural labels dynamically
    document.querySelector(".day-section .timer-text").textContent = days === 1 ? "day" : "days";
    document.querySelector(".hour-section .timer-text").textContent = hours === 1 ? "hour" : "hours";
    document.querySelector(".minute-section .timer-text").textContent = minutes === 1 ? "minute" : "minutes";
    document.querySelector(".second-section .timer-text").textContent = seconds === 1 ? "second" : "seconds";

}, 1000);
