const insects = Array.from(document.querySelectorAll(".insect"));

// Each insect has its own delayed position for a trail effect
const state = insects.map((_, index) => ({
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  targetX: window.innerWidth / 2,
  targetY: window.innerHeight / 2,
  ease: 0.18 - index * 0.02, // front insect is more "snappy"
}));

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;

function onMouseMove(e) {
  cursorX = e.clientX;
  cursorY = e.clientY;
}

function onResize() {
  cursorX = window.innerWidth / 2;
  cursorY = window.innerHeight / 2;
}

function animate() {
  state.forEach((bug, index) => {
    if (index === 0) {
      bug.targetX = cursorX;
      bug.targetY = cursorY;
    } else {
      const leader = state[index - 1];
      bug.targetX = leader.x;
      bug.targetY = leader.y;
    }

    const dx = bug.targetX - bug.x;
    const dy = bug.targetY - bug.y;

    bug.x += dx * bug.ease;
    bug.y += dy * bug.ease;

    const insect = insects[index];
    insect.style.transform = `translate3d(${bug.x}px, ${bug.y}px, 0)`;
  });

  requestAnimationFrame(animate);
}

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("resize", onResize);

animate();

