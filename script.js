document.addEventListener("DOMContentLoaded", () => {

  const url = window.location.href;

  /* ❄ SNOW ONLY ON SNOW PAGE (SIDES ONLY) */
  if (url.includes("snow")) {

    const snowCount = 40;

    for (let i = 0; i < snowCount; i++) {

      const snow = document.createElement("div");
      snow.className = "snowflake";
      snow.innerHTML = "❄";

      // Randomly choose left or right side
      const side = Math.random() > 0.5 ? "left" : "right";

      snow.style[side] = Math.random() * 25 + "px"; // keeps it near edge
      snow.style.top = "-20px";

      snow.style.animationDuration = (4 + Math.random() * 4) + "s";
      snow.style.fontSize = (10 + Math.random() * 10) + "px";
      snow.style.opacity = 0.6 + Math.random() * 0.4;

      document.body.appendChild(snow);
    }
  }

  /* ✨ SMOOTH PAGE TRANSITION */
  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

      if (this.href.includes(window.location.hostname)) {

        e.preventDefault();

        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location = this.href;
        }, 200);
      }

    });

  });

});
