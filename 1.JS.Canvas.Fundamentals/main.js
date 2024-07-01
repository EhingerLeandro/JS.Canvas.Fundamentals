const canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.style.background = "#ff8";

canvas.height= window.innerHeight;
canvas.width= window.innerWidth;

context.fillStyle="#666";
context.fillRect(50, 50, 100, 100);

context.fillStyle="#f93";
context.fillRect(50, 200, 100, 100);


//beginPath() crea un nuevo contexto de dibujo.
context.beginPath();
context.arc(300, 100, 75, 0, Math.PI * 1, false);

//fill() sirve para el relleno interno del circulo
context.fillStyle="slateBlue";
context.fill();

//stroke() sirve para colorear la circunferencia.
context.strokeStyle="#f6f";
context.lineWidth= 10;
context.stroke();