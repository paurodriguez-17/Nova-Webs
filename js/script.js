const nav = document.querySelector('.navbar');
function handleScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm(
    'service_q3mro1z',
    'template_1c0b3oe',
    this,
    '6g0Dz3hEh1mmrDHZY'
  ).then(() => {
    alert('¡Mensaje enviado correctamente!');
    this.reset();
  }, err => {
    console.error('Error al enviar:', err);
    alert('Hubo un error al enviar, revisa la consola.');
  });
});

AOS.init({ duration: 800, once: true });
