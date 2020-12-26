let appOpen = false;

setInterval(() => {
  (function clockApp() {
  appOpen = true;
  const cTime = document.querySelector("#time")
  const cDate = document.querySelector("#date")

  const date = new Date;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  cTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  cDate.innerHTML = `${month} - ${day} - ${year}`;
})();
}, 1000);