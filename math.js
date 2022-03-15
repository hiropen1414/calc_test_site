"use strict";
const attention = "割り算が割り切れない場合、答えを割り算のあまりとしてください。";
let sign = {
	score: 0,
};

function Generatenum () {// Generate two random numbers and symbol which indicate the calculation method. In addition, calculate the answer.
	for(let i = 0 ; i < 2 ; i++) {
		sign['randnum' + i] = Math.floor(Math.random() * 10);
		if (sign["randnum1"] == 0){
			i--;
		}
		//alert(`${sign["randnum" + i]} : ${i}`);
	}
	let method = Math.floor(Math.random() * 4);
	switch (method) {
		case 0:
			sign["met"] = "+";
			sign["answer"] = sign["randnum0"] + sign["randnum1"];
			break;
		case 1:
			sign["met"] = "-";
			sign["answer"] = sign["randnum0"] - sign["randnum1"];
			break;
		case 2:
			sign["met"] = "×";
			sign["answer"] = sign["randnum0"] * sign["randnum1"];
			break;
		case 3:
			sign["met"] = "÷";
			if (sign["randnum0"] % sign["randnum1"] == 0) {
				sign["answer"] = sign["randnum0"] / sign["randnum1"];
			}else{
				sign["answer"] = sign["randnum0"] % sign["randnum1"];
			}
			break;
		default:
			alert("?"); 
			break;
	}
}
let a = "";
function Ask() {// Display the question.
	alert(`${attention} Enterを押したらスタートします。`);
	let startTime = Date.now();
	document.write(`${attention}<br>`);
	for(let times = 1 ; times <= 10 ; times++){
		Generatenum();
		let ans = prompt(`Q${times}: ${sign["randnum0"]} ${sign["met"]} ${sign["randnum1"]} = `);
		let writeletter = `Q${times}:${sign["randnum0"]} ${sign["met"]} ${sign["randnum1"]}<br>your answer: ${ans}<br>collect: ${sign["answer"]}<br>${Judge(ans)}<br><br>`;
		a += writeletter;
	}
	let endTime = Date.now() - startTime;
	alert(`time:${Math.ceil(endTime * 0.1)/100}s`);
	let element = document.getElementById('time');
	element.outerHTML = `<h3>your time:${Math.ceil(endTime * 0.1)/100}s<br>score:${sign["score"]}</h3><h5>${a}</h5>`;
}

function Judge(ans) {//Compare one's answer with the correct answer.
	if (ans !== ''  && Number(ans) === sign["answer"]){
		sign["score"] += 10;
		return "Great! :)";
	}else{
		return "Wrong :(";
	}
}

Ask();

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

window.requestAnimationFrame = 
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.weblitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (cb) { setTimeout(cb, 17); };

const NUM = 90; // 表示数
const particles = [];

class Particle {
  constructor(x, y, radius, directionX, directionY, index) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.directionX = directionX;
    this.directionY = directionY;
    this.index = index;
  }
  render() {
    if(this.index % 3 === 0) {
      ctx.fillStyle = "#FBDAC8";
      ctx.fill();
    } else if(this.index % 3 === 1) {
		ctx.globalAlpha = 0.6;
		ctx.fillStyle = "#F3E100";
		ctx.fill()
    }else {
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#f29c97";
      ctx.fill();
    }
    // 円をかく
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    
    
  }
  update() {

    this.x += (Math.sin(this.directionX + 180)) * 0.25;
	this.y += (Math.sin(this.directionY)) * 0.25;
    if(this.x > canvas.width + this.radius) {
      this.x = -this.radius;
    }
	if(this.y > canvas.height + this.radius) {
		this.y = -this.radius;
	}
    
    this.render();
  }
}

init();
render();

function init() {
  for(let i = 0; i < NUM; i++) {
    // particles 
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.floor(Math.random() * 50);
    const directionX = Math.random() * 10;
    const directionY = Math.random() * 10;
    const particle = new Particle(x, y, radius, directionX, directionY, i);
    particles.push(particle);
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  requestAnimationFrame(render);
}
// const CANVAS = document.getElementById('canvas');
// const CTX = CANVAS.getContext('2d');

// class Particle {
// 	constructor(x,y,dirx,diry){
// 		this.x = x;
// 		this.y = y;
// 		this.dirx = dirx;
// 		this.diry = diry;
// 	}
// 	render (){
// 		CTX.beginPath();
// 		CTX.arc(this.x,this.y,75+Math.floor(Math.random() * 50),0,Math.PI*2,true);
// 		CTX.strokeStyle = "rgb(70, 163, 221)";
// 		CTX.fillStyle = "blue";
// 		CTX.fill();
// 	}
// 	draw(){
// 		CTX.clearRect(0,0,CANVAS.width,CANVAS.height);
		
// 		this.x++;
// 		if (this.x > CANVAS.width){
// 			this.x = 0;
// 		}
// 		CTX.beginPath();
// 		CTX.arc(this.x,this.y,75+Math.floor(Math.random() * 50),0,Math.PI*2,true);
// 		CTX.strokeStyle = "rgb(70, 163, 221)";
// 		CTX.fillStyle = "blue";
// 		CTX.fill();
// 		window.requestAnimationFrame(draw);
// 	}
// }

// const part = new Particle(100,100,0,0);
// part.render();

// function render() {
// 	part.draw();
// 	requestAnimationFrame(render);
// }
// const NUM = 30;
// const PART = [];
// function init(){
// 	for(let i=0;i<NUM;i++){
// 		const initx = Math.random() * CANVAS.width;
// 		const inity = Math.random() * CANVAS.height;
// 		x += initx;
// 		y += inity;
// 		const dirx = Math.random * 2;
// 		const diry = Math.random *2 - 1;
// 		const part = new Paricle(x,y,dirx,diry);
// 		PART.push(part);
// 	}
// }



// draw();