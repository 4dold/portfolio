// ===== EDIT YOUR CONTACT DETAILS HERE =====
const LINKS = {
  linkedin: "https://www.linkedin.com/in/deema-mujally-92546a217/",
  email: "dmujally@gmail.com",
  phone: "+966507055011"
};

// LinkedIn button is optional because the Contact section was removed.
// The social email icon in the hero uses the email below.
const linkedin = document.querySelector("#linkedin");
if (linkedin && !LINKS.linkedin.startsWith("PASTE-")) linkedin.href = LINKS.linkedin;

const emailLink = document.querySelector('a[aria-label="Email"]');
if (emailLink && !LINKS.email.startsWith("PASTE-")) emailLink.href = "mailto:" + LINKS.email;

document.querySelectorAll(".expand").forEach(btn => {
  btn.addEventListener("click", () => {
    const el = document.getElementById(btn.dataset.target);
    el.classList.toggle("open");
    btn.textContent = el.classList.contains("open")
      ? "Hide details ↑"
      : "Show details →";
  });
});

const phoneLink = document.querySelector("#phone");
if (phoneLink && !LINKS.phone.startsWith("PASTE-")) phoneLink.href = "tel:" + LINKS.phone;
