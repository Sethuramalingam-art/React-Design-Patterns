var btnPressed = document.querySelector(".button_press");
var pressedTimes = document.querySelector(".pressed_times");
var triggeredTimes = document.querySelector(".triggered_times");

var pressCount = 0;
var triggerCount = 0;

var myDebounceFunc = (cb, delay) => {
  var timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};
btnPressed.addEventListener("click", () => {
  pressedTimes.innerHTML = ++pressCount;
  triggerTimeFunc();
});

function incrementTrigger() {
  triggeredTimes.innerHTML = ++triggerCount;
}

var triggerTimeFunc = myDebounceFunc(incrementTrigger, 800);

// throttle is differ from debounce that when a event handling is triggered after some
// delay we should same event handling. example : infinte scroll, click events

var btnThrPressed = document.querySelector(".button_throttle_press");
var pressedThrTimes = document.querySelector(".pressed_throttle_times");
var triggeredThrTimes = document.querySelector(".triggered_throttle_times");

var clickedEventCount = 0;
var triggeredEventCount = 0;

function myThrottleFunc(cb, delay) {
  var last = 0;
  return () => {
    var now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb();
  };
}
var throttleCount = myThrottleFunc(throttleCountFun, 800);
btnThrPressed.addEventListener("click", () => {
  pressedThrTimes.innerHTML = ++clickedEventCount;
  throttleCount();
});

function throttleCountFun() {
  triggeredThrTimes.innerHTML = ++triggeredEventCount;
}
