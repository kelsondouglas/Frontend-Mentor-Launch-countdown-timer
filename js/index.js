const daysText = document.querySelector(".days");
const hoursText = document.querySelector(".hours");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");

setInterval(() => {
  newYearCountdown();
}, 1000);

function newYearCountdown() {
  const date = new Date();
  const newYear = new Date(
    `Jan 1, ${date.getFullYear() + 1} 00:00:00`
  ).getTime();
  let gap = newYear - date.getTime();
  const seconds = 1000;

  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  daysText.innerHTML = d;
  hoursText.innerHTML = h;
  minutesText.innerHTML = m;
  secondsText.innerHTML = s;
}
