window.addEventListener("load", (event) => {
  var xp = 0,
    mouseX = 0;
  var yp = 0,
    mouseY = 0;
  var xpDot = 0,
    mouseXDot = 0; // Changed variable name to mouseXDot
  var ypDot = 0,
    mouseYDot = 0; // Changed variable name to mouseYDot

  const cursorFollower = document.querySelector(".cursorFollower");

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 15;
    yp += (mouseY - yp) / 15;

    if (cursorFollower) {
      // Check if cursorFollower exists
      cursorFollower.style.left = xp + "px";
      cursorFollower.style.top = yp + "px";
    }
  }, 20);
});
