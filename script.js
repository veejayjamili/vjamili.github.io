// Contact form (front-end only — wire this up to your own backend/service)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field before sending.';
      status.style.color = '#e8b059';
      return;
    }

    // No backend wired up yet — replace this block with a real submission
    // (e.g. fetch() to Formspree, Resend, your own API, etc.)
    status.textContent = `Thanks, ${name} — your message is ready to send once a backend is connected.`;
    status.style.color = '#6fcf97';
    form.reset();
  });
}
