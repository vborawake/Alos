// const top_cards = document.querySelector('.top_cards');
const main = document.querySelector('.main');
const details = document.querySelector('.details');
const popup = document.querySelector('.popup');

document.addEventListener('DOMContentLoaded', () => {
  stagger('.top_cards > div');
  stagger('.table_wrapper > div', 0.5);
  stagger('.table_wrapper .table > div', 0.5);
});

function elementVisible(element) {
  if (element.style.display === 'none') return false;
  else return true;
}

async function showPopup() {
  if (popup.classList.contains('d-none')) {
    popup.classList.remove('d-none');
    fade(popup);
  } else {
    await fadeOut(popup);
    popup.classList.add('d-none');
  }
}

function showDetails() {
  if (details.classList.contains('d-none')) {
    main.classList.add('d-none');
    details.classList.remove('d-none')
    fade(details);
  } else {
    main.classList.remove('d-none');
    details.classList.add('d-none')
    fade(main);
  }
}