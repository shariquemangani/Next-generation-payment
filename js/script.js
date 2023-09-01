document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration, maxDuration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(maxDuration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  const maxDuration = Math.max(6000, 5000, 7000, 9000);

  counter("count1", 0, 3800, maxDuration, maxDuration);
  counter("count2", 0, 230, maxDuration, maxDuration);
  counter("count3", 0, 230, maxDuration, maxDuration);
});


const blob = document.querySelector("#blob");
const body = document.querySelector("body");

body.addEventListener("mousemove", function (dets) {
  let half = blob.offsetWidth / 2;
  blob.style.left = `${dets.x - half}px`;
  blob.style.top = `${dets.y - half}px`;
});
