document.addEventListener("DOMContentLoaded", () => {

const url = window.location.href;

/* GOLF INTRO ANIMATION */

if(url.includes("golf")){

const ball=document.createElement("div");
ball.id="golf-ball";

const hole=document.createElement("div");
hole.id="golf-hole";

document.body.appendChild(ball);
document.body.appendChild(hole);

let pos=-60;

let roll=setInterval(()=>{

pos+=4;

ball.style.left=pos+"px";

if(pos>window.innerWidth-140){

clearInterval(roll);

ball.style.transition="transform .6s ease";
ball.style.transform="translateY(50px) scale(.4)";
}

},10);

}

/* SNOW EDGE ANIMATION */

if(url.includes("snow")){

for(let i=0;i<40;i++){

let snow=document.createElement("div");
snow.className="snowflake";
snow.innerHTML="❄";

let side=Math.random()>.5 ? "left":"right";

snow.style[side]=(Math.random()*20)+"px";

snow.style.animationDuration=(4+Math.random()*5)+"s";

snow.style.fontSize=(10+Math.random()*10)+"px";

document.body.appendChild(snow);

}

}

/* PAGE LINK TRANSITIONS */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

if(this.href && this.href.includes(window.location.hostname)){

e.preventDefault();

document.body.style.opacity="0";

setTimeout(()=>{

window.location=this.href;

},400);

}

});

});

});
