// Contador de días
const startDate = new Date('2025-04-07');
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('daysCount').innerText = `Han pasado ${diffDays} días desde que nos conocimos.`;

// Corazones flotantes
const heartsContainer = document.getElementById('hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.background = randomColor();
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
function randomColor() {
  const colors = ['pink', '#ff6f91', '#fbc2eb', '#fad0c4'];
  return colors[Math.floor(Math.random() * colors.length)];
}
setInterval(createHeart, 300);

// Música
const music = document.getElementById('music');
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Frases que cambian
const phrases = [
  "Te quiero porque iluminas mi día solo con hablar contigo.",
  "Te quiero porque te haz convertido en alguien muy especial en mi vida.",
  "Te quiero porque incluso en la distancia, siento tu amor.",
  "Te quiero por ser la persona más hermosa, inteligente y bondadosa que he conocido."
];
let phraseIndex = 0;
function changePhrase() {
  document.getElementById('phraseDisplay').innerText = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
}
setInterval(changePhrase, 5000);

// Extra: Botón "Te extraño"
function sendHearts() {
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
  const audio = new Audio('https://example.com/heart-sound.mp3');
  audio.play();
}

// Modo oscuro
let starInterval;
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  toggleStars();
}
function toggleStars() {
  if (document.body.classList.contains('dark')) {
    starInterval = setInterval(createStar, 100);
  } else {
    clearInterval(starInterval);
  }
}
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}

// Animación de carta escrita
const letterText = "Sigue bajando...\n\nMi bonita, cada día que pasa solo confirma lo afortunada que soy de tenerte. Sé que pronto la distancia desaparecerá algún día y podré abrazarte fuerte. Mientras tanto, este pequeño rincón...";
let index = 0;
function typeLetter() {
  if (index < letterText.length) {
    document.getElementById('letter').innerText += letterText.charAt(index);
    index++;
    setTimeout(typeLetter, 50);
  }
}
window.onload = typeLetter;

// Descargar PDF
function downloadPDF() {
  const doc = new jspdf.jsPDF();
  doc.text(letterText, 10, 10);
  doc.save("carta_de_amor.pdf");
}