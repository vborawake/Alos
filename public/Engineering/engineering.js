// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');

document.addEventListener('DOMContentLoaded', () => {
  stagger('.table_wrapper > div', 0.5);
  // stagger('.table_wrapper .table > div', 0.5);
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
    fade(table_wrapper);
    fade(top_cards);
    details.classList.add('d-none');
  }
}