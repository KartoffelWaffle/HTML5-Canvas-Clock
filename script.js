let canvas = document.getElementById("clockCanvas");
let context = canvas.getContext("2d", {antialias: true});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ticks = 0;

if(date.getHours() > 12)
{
  document.body.style.backgroundColor = '#364156';
}
else
{
  document.body.style.backgroundColor = '#F1E9DA';
}

function update()
{
  requestAnimationFrame(update);

  if(ticks === 60)
  {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    reDraw();
    ticks = 0;
  }
  ticks++;
}

function draw(time, deg, color, radius)
{
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = 50;
  context.arc(canvas.width / 2, canvas.height / 2, radius, 0, time * deg);
  context.stroke();
}

function reDraw()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw(seconds, (6 * (Math.PI / 180)), 'red', 200);
  draw(minutes, (6 * (Math.PI / 180)), 'green', 250);
  draw(hours, (15 * (Math.PI / 180)), 'blue', 300);
}

update();
