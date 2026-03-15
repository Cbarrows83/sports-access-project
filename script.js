// Snowflake generator
if(window.location.href.includes("snow.html")){
  const snowCount = 50;
  for(let i=0;i<snowCount;i++){
    let snow = document.createElement("div");
    snow.className = "snowflake";
    snow.innerHTML = "❄";
    snow.style.left = Math.random()*window.innerWidth + "px";
    snow.style.animationDuration = 3+Math.random()*5 + "s";
    snow.style.fontSize = 12+Math.random()*20 + "px";
    document.body.appendChild(snow);
  }
}

// Golf ball rolling animation
if(window.location.href.includes("golf.html")){
  let ball = document.createElement("div");
  ball.id="golf-ball";
  ball.style.width="50px";
  ball.style.height="50px";
  ball.style.borderRadius="50%";
  ball.style.background="white";
  ball.style.border="2px solid #aaa";
  ball.style.position="fixed";
  ball.style.bottom="20px";
  ball.style.left="-50px";
  ball.style.zIndex="9999";
  document.body.appendChild(ball);

  let pos = -50;
  setInterval(()=>{
    pos+=2;
    if(pos>window.innerWidth) pos=-50;
    ball.style.left = pos+"px";
  },20);
}
