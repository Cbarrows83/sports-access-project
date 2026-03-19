document.addEventListener("DOMContentLoaded", () => {

const url = window.location.href;

/* SNOW ONLY ON SIDES */
if(url.includes("snow")){

for(let i=0;i<40;i++){

let snow=document.createElement("div");
snow.className="snowflake";
snow.innerHTML="❄";

let side = Math.random() > 0.5 ? "left" : "right";

snow.style[side] = (Math.random()*30) + "px";
snow.style.animationDuration = (4 + Math.random()*5) + "s";
snow.style.fontSize = (10 + Math.random()*10) + "px";

document.body.appendChild(snow);

}

}

/* SMOOTH PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

if(this.href.includes(window.location.hostname)){

e.preventDefault();

document.body.style.opacity = "0";

setTimeout(()=>{
window.location = this.href;
}, 300);

}

});

});

});
