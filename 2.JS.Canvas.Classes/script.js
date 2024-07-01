const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.style.background="#999";

function canvasAdjusted (){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
canvasAdjusted();


class Circle {
	constructor(xpos, ypos, radius, color){
		this.xpos = xpos;
		this.ypos = ypos;
		this.color = color;
		this.radius = radius;
	}
	draw(ctx){
		ctx.beginPath();
		ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI*2, false);

		ctx.strokeStyle="brown";
		ctx.lineWidth="10";
		ctx.stroke();
		
		ctx.fillStyle="darkBlue";
		ctx.fill();
		ctx.closePath();
	}
}

let circleFirst = new Circle(100, 100, 50, "#963");
circleFirst.draw(ctx);


window.addEventListener("resize", ()=>{
	canvasAdjusted()
	circleFirst.draw(ctx);
});
