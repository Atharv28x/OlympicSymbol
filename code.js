canvas =
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.rect(200, 190, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(310, 260, 40, 0, 2 *  Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 6;
ctx.arc(360, 300, 40, 0, 2 *  Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 6;
ctx.arc(410, 260, 40, 0, 2 *  Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 6;
ctx.arc(460, 300, 40, 0, 2 *  Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 6;
ctx.arc(510, 260, 40, 0, 2 *  Math.PI);
ctx.stroke();