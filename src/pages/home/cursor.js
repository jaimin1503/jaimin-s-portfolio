window.addEventListener("load", (event) => {
  var xp = 0,
    mouseX = 0;
  var yp = 0,
    mouseY = 0;
  var intervalId; // Variable to store the interval ID

  const cursorFollower = document.querySelector(".cursorFollower");
  // const homePage = document.querySelector(".home-page");

  function updateCursorPosition(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  function updateCursor() {
    xp += (mouseX - xp) / 15;
    yp += (mouseY - yp) / 15;

    if (cursorFollower) {
      cursorFollower.style.left = xp + "px";
      cursorFollower.style.top = yp + "px";
    }
  }

  document.addEventListener("mousemove", updateCursorPosition);

  intervalId = setInterval(updateCursor, 20);
});
