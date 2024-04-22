// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');

function customerAnimate() {
  gsap.fromTo('.customer > div', {
    y: '-2rem',
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    delay: 0.5
  });
}

document.addEventListener('DOMContentLoaded', () => {
  customerAnimate();
});

function elementVisible(element) {
  if (element.style.display === 'none') return false;
  else return true;
}

async function showDetails(event) {
  if (elementVisible(table_wrapper) && !top_cards.classList.contains('d-none')) {
    table_wrapper.style.display = 'none';
    top_cards.classList.add('d-none');
    details.classList.remove('d-none');
    fade(details);
    stagger('.equipment > div');
  } else {
    table_wrapper.style.display = 'block';
    top_cards.classList.remove('d-none');
    fade(top_cards);
    fade(table_wrapper);
    details.classList.add('d-none');
  }
}