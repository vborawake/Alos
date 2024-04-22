// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');

document.addEventListener('DOMContentLoaded', () => {
  stagger('.top_cards > div');
  stagger('.table_wrapper > div', 0.5);
  stagger('.table_wrapper .table > div', 0.5);
});

function elementVisible(element) {
  if (element.style.display === 'none') return false;
  else return true;
}