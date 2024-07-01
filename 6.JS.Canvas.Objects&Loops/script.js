const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.background="#fa8";

function windowAdjust(){
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
}
windowAdjust();

class Circles {
	constructor(posX, posY, radius, colorLine, colorBack, speed, text){
		this.posX=posX;
		this.posY=posY;
		this.radius=radius;
		this.colorLine= colorLine;
		this.colorBack= colorBack;
		this.speed=speed;
		this.text=text;
		this.disX = this.speed;
		this.disY = this.speed;
	}
	render(){
		ctx.beginPath();
		ctx.arc(this.posX, this.posY, this.radius, 0,  Math.PI*2);

		ctx.strokeStyle=this.colorLine;
		ctx.lineWidth=10;
		ctx.stroke()

		ctx.fillStyle=this.colorBack;
		ctx.fill()
	}
	frameUpdate(){
		this.render();
		if(this.posX + this.radius >= window.innerWidth ){
			this.disX= -this.disX;
		}
		if(this.posX - this.radius < 0 ){
			this.disX= -this.disX;
		}
		if(this.posY + this.radius >= window.innerHeight ){
			this.disY= -this.disY;
		}
		if(this.posY - this.radius < 0 ){
			this.disY= -this.disY;
		}
		this.posX += this.disX;
		this.posY += this.disY;
	}
}

// let circleRandom1 = new Circles( 200, 200, 75, "gray", "darkGray", 1, "Circle");
// let circleRandom2 = new Circles( 500, 100, 75, "gray", "darkGray", 1, "Circle");

let allCircles = [];
for(let i=0; i<10; i++){
	let randomX= (Math.random()*(window.innerWidth-200)) +80;
	let randomY= (Math.random()*(window.innerHeight-200)) +80;
	let boolean = Math.random()<0.5;
	let randomSpeed = Math.random()*1.5 +0.5;
	if(boolean){
		randomSpeed = -randomSpeed;
	}
	let circleRandom = new Circles( randomX, randomY, 50, "gray", "darkGray", randomSpeed, "Circle");
	allCircles.push(circleRandom);

}

function animation(){
	ctx.clearRect(0, 0, window.innerWidth, window.innerHeight, );
	allCircles.forEach(element=>{
		element.frameUpdate();
	})
	requestAnimationFrame(animation);
}
animation();