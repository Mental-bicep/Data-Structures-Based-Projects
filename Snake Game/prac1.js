//width=20
//height=10
canvas = document.getElementById("canvas");
pen = canvas.getContext("2d");
pen.fillStyle = "red";
pen.fillRect(17, 0, 20, 10);   // x y width height
pen.fillStyle = "blue";
pen.fillRect(37, 0, 20, 10);
pen.fillStyle = "black";
pen.fillRect(57, 0, 20, 10);