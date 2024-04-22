const passwordInput = document.getElementById('passwordInput');

document.addEventListener('DOMContentLoaded', () => {
  gsap.fromTo('.stagger', {
    opacity: 0,
    y: '-2rem'
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.2
  });
});

function showPassword() {
  if (passwordInput.type === 'password') passwordInput.type = 'text';
  else passwordInput.type = 'password';
  passwordInput.focus();
}