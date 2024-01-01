window.addEventListener("load", (event) => {
  var xp = 0,
    mouseX = 0;
  var yp = 0,
    mouseY = 0;

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
  document
    .querySelector(".developer-img")
    .addEventListener("mouseenter", function () {
      cursorFollower.style.transform = "translate(-50px, -50px) scale(0)";
      alert("entered");
    });
});
