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
	constructor(posX, posY, radius, colorLine, colorBack, text){
		this.posX = posX;
		this.posY = posY;
		this.colorLine = colorLine;
		this.colorBack = colorBack;
		this.radius = radius; 
		this.text = text;
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
}

let counter=1;
let circlesArray=[];

for(i=0; i<10; i++){
	let randomXpos = Math.random()*window_width;
	let randomYpos = Math.random()*window_height;

	const circleRandom = new Circle(randomXpos, randomYpos, 25, "purple", "pink", counter);

	circlesArray.push(circleRandom);

	circlesArray[i].draw(context);

	counter++;
}

window.addEventListener("resize", ()=>{
		adjustment();
		for(i=0; i<10; i++){
			circlesArray[i].draw(context);
		}
	})	

