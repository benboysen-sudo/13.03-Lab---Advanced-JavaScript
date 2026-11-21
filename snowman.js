const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const flakeSize = 10;

document.addEventListener("DOMContentLoaded", function () {
  drawGround();
  drawSnowText();
  drawSnowman();
  drawSnowflakes();
});

function drawGround() {
  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "brown";
  context.fillRect(0, 250, canvas.width, 50);
}

function drawSnowText() {
  context.font = "80px Verdana";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = "blue";
  context.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman() {
  context.fillStyle = "white";

  context.beginPath();
  context.arc(150, 200, 50, 0, Math.PI * 2);
  context.fill();

  context.beginPath();
  context.arc(150, 120, 40, 0, Math.PI * 2);
  context.fill();

  context.beginPath();
  context.arc(150, 60, 25, 0, Math.PI * 2);
  context.fill();
}

function drawSnowflakes() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    drawSingleFlake(x, y);
  }
}

function drawSingleFlake(x, y) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
  context.lineTo(x, y + flakeSize);
  context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
  context.closePath();

  context.fillStyle = "#eee";
  context.fill();
}
