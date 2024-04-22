// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  stagger('.top_cards > div');
  stagger('.table_wrapper > div', 0.5);
  stagger('.table_wrapper .table > div', 0.5);
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