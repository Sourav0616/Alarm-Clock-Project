let alarmTime = "";
let format = "";
const audio = new Audio("song.mp3");

// first function
const clock = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const hour = document.getElementById("hour");
  const mnt = document.getElementById("mnt");
  const sec = document.getElementById("sec");
  const period = document.getElementById("am-pm");
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hour.innerText = hours < 10 ? "0" + hours : hours;
  mnt.innerText = minutes < 10 ? "0" + minutes : minutes;
  sec.innerText = seconds < 10 ? "0" + seconds : seconds;
  period.innerText = ampm;
  let actualTime = hour.innerText + ":" + mnt.innerText + ":" + sec.innerText;

  format = format.toUpperCase();
  console.log(format);

  if ((actualTime == alarmTime) != "" && alarmTime && ampm == format) {
    audio.play();
    const text = document.getElementById("stop");
    text.innerText = "Stop";
  }
};
clock();

// todo second function
const setAlarmTime = () => {
  const btn = document.getElementById("setb");
  btn.addEventListener("click", () => {
    let hour = document.getElementById("s-hour").value;
    if (hour > 12) {
      hour = hour % 12;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    let mnt = document.getElementById("s-mnt").value;
    if (mnt < 10) {
      mnt = "0" + mnt;
    }
    let sec = document.getElementById("s-sec").value;
    if (mnt < 10) {
      sec = "0" + sec;
    }
    let ampm = document.getElementById("am-pm").value;

    alarmTime = hour + ":" + mnt + ":" + sec;
    format = ampm;

    const alm = document.getElementById("settime");
    alm.innerText = alarmTime + " " + format;
    const text = document.getElementById("stop");
    text.innerText = "Upcoming";
    const text2 = document.getElementById("name");
    text2.innerText = "THE CLOCK RING ON";

    document.getElementById("s-hour").value = "";
    document.getElementById("s-mnt").value = "";
    document.getElementById("s-sec").value = "";
    document.getElementById("am-pm").value = "";
  });
};
setAlarmTime();

// ! third function
const stopAlarm = () => {
  const btn = document.getElementById("stop");
  btn.addEventListener("click", () => {
    if (audio.play) {
      audio.pause();
      const alm = document.getElementById("settime");
      alm.innerText = "";
      const text2 = document.getElementById("name");
      text2.innerText = "";
      const text = document.getElementById("stop");
      text.innerText = "No Alarm";
    }
  });
};
stopAlarm();

setInterval(clock, 1000);

