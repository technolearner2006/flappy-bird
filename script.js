var cvs = document.getElementById("canvas");
var ctx = cvs.getContext('2d');

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pUp = new Image();
var pDown = new Image();

bird.src = "images\bird.png";
bg.src = "images\bg.png";
fg.src = "images\fg.png";
pUp.src = "images\pUp.png";
bird.src = "images\pDown.png";

function draw() {
	ctx.drawImage(bg,0,0);
	ctx.drawImage(fg,0,400);
	//ctx.drawImage(bg,0,0);
	//ctx.drawImage(bg,0,0);
	//ctx.drawImage(bg,0,0);
}

draw();