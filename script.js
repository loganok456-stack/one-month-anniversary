/* ============================================================
   EDIT ZONE #7: RELATIONSHIP START DATE
   Format: YYYY-MM-DDTHH:MM:SS
   Example below = 30 August 2026 at midnight.
============================================================ */
const RELATIONSHIP_START = new Date("2026-08-30T00:00:00");

const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
  window.scrollTo(0, 0);

  // Music is optional. If music/our-song.mp3 doesn't exist, nothing breaks.
  music.volume = 0.35;
  music.play().catch(() => {});

  for (let i = 0; i < 14; i++) {
    setTimeout(makeHeart, i * 90);
  }
});

function updateCounter() {
  const now = new Date();
  const diff = Math.max(0, now - RELATIONSHIP_START);
  const totalMinutes = Math.floor(diff / 60000);
  const totalHours = Math.floor(diff / 3600000);
  const totalDays = Math.floor(diff / 86400000);

  document.getElementById("days").textContent = totalDays.toLocaleString();
  document.getElementById("hours").textContent = totalHours.toLocaleString();
  document.getElementById("minutes").textContent = totalMinutes.toLocaleString();
}
updateCounter();
setInterval(updateCounter, 60000);

document.querySelectorAll(".reason-card").forEach(card => {
  const original = card.innerHTML;
  card.addEventListener("click", () => {
    if (card.dataset.open === "yes") {
      card.innerHTML = original;
      card.dataset.open = "no";
    } else {
      card.innerHTML = `<span>♥</span>${card.dataset.answer}`;
      card.dataset.open = "yes";
    }
  });
});

const letterBtn = document.getElementById("letterBtn");
const letterPaper = document.getElementById("letterPaper");
letterBtn.addEventListener("click", () => {
  letterPaper.classList.toggle("hidden");
  letterBtn.textContent = letterPaper.classList.contains("hidden")
    ? "Open My Letter 💌"
    : "Close Letter";
  if (!letterPaper.classList.contains("hidden")) {
    setTimeout(() => letterPaper.scrollIntoView({behavior:"smooth", block:"center"}), 100);
    for (let i = 0; i < 18; i++) setTimeout(makeHeart, i * 80);
  }
});

function makeHeart() {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = Math.random() > .45 ? "♥" : "♡";
  h.style.left = `${Math.random() * 100}vw`;
  h.style.fontSize = `${14 + Math.random() * 22}px`;
  h.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 5500);
}
