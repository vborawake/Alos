// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');

function orderAnimate() {
  stagger('.top_cards > div');
  stagger('.table_wrapper > div', 0.5);
  stagger('.table > div', 0.5);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  orderAnimate();
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.remove('w-100');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.add('w-100');
  }
});

function elementVisible(element) {
  if (element.style.display === 'none') return false;
  else return true;
}

function showDetails(event) {
  if (elementVisible(table_wrapper) && !top_cards.classList.contains('d-none')) {
    table_wrapper.style.display = 'none';
    top_cards.classList.add('d-none');
    details.classList.remove('d-none');
    fade(details);
  } else {
    table_wrapper.style.display = 'block';
    top_cards.classList.remove('d-none');
    fade(top_cards);
    fade(table_wrapper);
    details.classList.add('d-none');
  }
}