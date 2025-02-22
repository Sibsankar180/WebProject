let alarmTime;
let alarmTimeout;

function setAlarm() {
    const alarmInput = document.getElementById("alarmTime").value;
    if (!alarmInput) {
        alert("Please select a time for the alarm.");
        return;
    }

    const now = new Date();
    const alarm = new Date(now.toDateString() + " " + alarmInput);
    
    if (alarm < now) {
        alarm.setDate(alarm.getDate() + 1); // Set for the next day if the time is past
    }

    const timeToAlarm = alarm - now;
    document.getElementById("status").innerText = `Alarm set for ${alarm.toLocaleTimeString()}`;

    alarmTimeout = setTimeout(() => {
        triggerAlarm();
    }, timeToAlarm);
}

function triggerAlarm() {
    alert("⏰ Time to wake up!");
    
    if (Notification.permission === "granted") {
        new Notification("⏰ Alarm!", {
            body: "Time to wake up!",
        });
    } else {
        Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
                new Notification("⏰ Alarm!", { body: "Time to wake up!" });
            }
        });
    }

    const audio = new Audio("alarm.mp3"); // Add an alarm sound
    audio.play();
}
