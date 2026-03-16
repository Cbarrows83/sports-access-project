// Check page URL to determine which animation to run
window.addEventListener('DOMContentLoaded', () => {

  // Snowflake animation for Snow Sports page
  if(window.location.href.includes("snow.html")) {
    const snowCount = 60;
    for(let i = 0; i < snowCount; i++) {
      const snow = document.createElement('div');
      snow.className = 'snowflake';
      snow.innerHTML = '❄';
      snow.style.left = Math.random() * window.innerWidth + 'px';
      snow.style.fontSize = 12 + Math.random() * 20 + 'px';
      snow.style.animationDuration = 3 + Math.random() * 5 + 's';
      snow.style.opacity = 0.6 + Math.random() * 0.4;
      document.body.appendChild(snow);
    }
  }

  // Golf ball animation for Golf page
  if(window.location.href.includes("golf.html")) {
    const ball = document.createElement('div');
    ball.id = 'golf-ball';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.borderRadius = '50%';
    ball.style.background = 'white';
    ball.style.border = '2px solid #aaa';
    ball.style.position = 'fixed';
    ball.style.bottom = '20px';
    ball.style.left = '-50px';
    ball.style.zIndex = '9999';
    document.body.appendChild(ball);

    let pos = -50;
    setInterval(() => {
      pos += 2;
      if(pos > window.innerWidth) pos = -50;
      ball.style.left = pos + 'px';
    }, 20);
  }

});
