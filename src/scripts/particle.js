// particle.js
const particlesConfig = {
  particles: {
    number: { value: 1355, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "star" },
    opacity: { 
      value: 1, 
      random: true, 
      anim: { enable: true, speed: 20, opacity_min: 0, sync: false } 
    },
    size: { 
      value: 1.5, 
      random: true, 
      anim: { enable: true, speed: 1, size_min: 0, sync: false } 
    },
    line_linked: { enable: false },
    move: { enable: true, speed: 0, random: true, straight: false, out_mode: "out", bounce: true }
  },
  interactivity: {
    detect_on: "canvas",
    events: { 
      onhover: { enable: true, mode: "bubble" }, 
      onclick: { enable: true, mode: "push" }, 
      resize: true 
    },
    modes: { 
      grab: { distance: 400, line_linked: { opacity: 1 } }, 
      bubble: { distance: 84, size: 1, duration: 3, opacity: 1, speed: 3 }, 
      repulse: { distance: 200, duration: 0.4 }, 
      push: { particles_nb: 4 }, 
      remove: { particles_nb: 2 } 
    }
  },
  retina_detect: true
};

let particlesInitialized = false;

// Inizializza le particelle statiche all’inizio
export function initParticles() {
  if (!particlesInitialized && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
    particlesInitialized = true;

    const pjs = window.pJSDom[0].pJS;
    if (pjs) {
      // Parti statiche: disattiva animazioni
      pjs.particles.move.enable = false;
      pjs.particles.opacity.anim.enable = false;
      pjs.particles.size.anim.enable = false;
      pjs.fn.particlesDraw(); // disegna subito le particelle statiche
    }
  }
}

// Avvia le particelle con animazioni
export function startParticles() {
  const pjs = window.pJSDom?.[0]?.pJS;
  if (pjs) {
    pjs.particles.move.enable = true;
    pjs.particles.opacity.anim.enable = true;
    pjs.particles.size.anim.enable = true;
    // Imposta la velocità reale
    pjs.particles.move.speed = 1.5; 
    pjs.fn.particlesRefresh(); // riapplica le animazioni
  }
}

// Ferma le particelle (visibili ma statiche)
export function pauseParticles() {
  const pjs = window.pJSDom?.[0]?.pJS;
  if (pjs) {
    pjs.particles.move.enable = false;
    pjs.particles.opacity.anim.enable = false;
    pjs.particles.size.anim.enable = false;
    pjs.fn.particlesDraw();
  }
}
