const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
canvas.style.background="#fa8";

let window_width;
let window_height;

function adjustment (){
	window_height =window.innerHeight;
	canvas.height = window_height;
	window_width= window.innerWidth;
	canvas.width =window_width;
}
adjustment();

class Circle {
	constructor(posX, posY, radius, colorLine, 
		colorBack, text, speed){
		this.posX = posX;
		this.posY = posY;
		this.colorLine = colorLine;
		this.colorBack = colorBack;
		this.radius = radius; 
		this.text = text;
		this.speed = speed;
		this.disX = speed*1;
		this.disY = speed*1;
	}
	draw(context){
		context.beginPath();
		context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2);

		//Si se rellena el circulo, entonces el texto, no se mira.
		// context.fillStyle="#ccc3";
		// context.fill();

		context.font= "20px Arial"
		context.fillText(this.text, this.posX, this.posY);
		context.textAlign="center";
		context.textBaseline="middle";
		
		context.strokeStyle=this.colorLine;
		context.lineWidth="10";
		context.stroke();
	}
	updateFrame (){
		this.draw(context);
		if(this.posX + this.radius > window_width){
			this.disX = -this.disX;
		} 
		if(this.posX - this.radius < 0){
			this.disX = -this.disX;
		}
		if(this.posY + this.radius > window_height){
			this.disY = -this.disY;
		}
		if(this.posY - this.radius < 0){
			this.disY = -this.disY;
		}
		this.posX += this.disX;
		this.posY += this.disY;
	}
}

const circleRandom1 = new Circle(50, 50, 25, "purple", "pink", 'A', 2);
const circleRandom2 = new Circle(200, 200, 150, "black", "pink", 'B', 0);

circleRandom1.draw(context);
circleRandom2.draw(context);

function getDistance (xpos1, xpos2, ypos1, ypos2){
	let distance = Math.sqrt(Math.pow(xpos2 - xpos1,2)+ Math.pow(ypos2 -ypos1, 2));
	return distance;
}

function updateCircle (){
	context.clearRect(0, 0, window_width, window_height);
	circleRandom1.updateFrame();
	circleRandom2.updateFrame();
	if(getDistance(circleRandom1.posX, circleRandom2.posX, 
	circleRandom1.posY, circleRandom2.posY)< circleRandom1.radius + circleRandom2.radius){
		circleRandom2.colorLine="red";
	}
	if(getDistance(circleRandom1.posX, circleRandom2.posX, 
		circleRandom1.posY, circleRandom2.posY)>circleRandom1.radius + circleRandom2.radius){
			circleRandom2.colorLine="black";
		}

	requestAnimationFrame(updateCircle);
}
updateCircle();

window.addEventListener("resize", ()=>{
		adjustment();
	})	
