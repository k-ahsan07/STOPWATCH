var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var millisecondsLabel = document.getElementById("milliseconds");
var totalMilliseconds = 0;
var timer;

function start() {
  if (!timer) {
    timer = setInterval(updateStopwatch, 10);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  totalMilliseconds = 0;
  updateLabels(0, 0, 0);
}

function updateStopwatch() {
  totalMilliseconds += 10;
  var time = new Date(totalMilliseconds);
  updateLabels(
    time.getUTCMinutes(),
    time.getUTCSeconds(),
    time.getUTCMilliseconds()
  );
}

function updateLabels(minutes, seconds, milliseconds) {
  minutesLabel.innerHTML = formatTimeUnit(minutes);
  secondsLabel.innerHTML = formatTimeUnit(seconds);
  millisecondsLabel.innerHTML = formatTimeUnit(milliseconds);
}

function formatTimeUnit(timeUnit) {
  return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}
