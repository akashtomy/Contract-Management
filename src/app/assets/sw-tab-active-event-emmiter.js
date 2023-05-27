document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onmousedown = resetTimer; // touchscreen presses
document.ontouchstart = resetTimer;
document.onclick = resetTimer; // touchpad clicks
document.onkeydown = resetTimer;
document.addEventListener("visibilitychange", function() {
  if (!document.hidden){
      resetTimer();
  }
});

setInterval(function () {
  awakeServiceWorker();
}, 1000);

function resetTimer() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller?.postMessage({
      value: { name: "tabActiveEvent" },
    });
  } else {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      navigator.serviceWorker.controller?.postMessage({
        value: { name: "tabActiveEvent" },
      });
    });
  }
}

function awakeServiceWorker() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller?.postMessage({
      value: { name: "awakeServiceWorker" },
    });
  } else {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      navigator.serviceWorker.controller?.postMessage({
        value: { name: "awakeServiceWorker" },
      });
    });
  }
}
