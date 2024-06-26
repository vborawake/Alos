const edit_code = document.querySelector('.edit_code');
const add_code = document.querySelector('.add_code');
const edit_product = document.querySelector('.edit_product');
const add_product = document.querySelector('.add_product');
const manage_code = document.querySelector('.manage_code.table_wrapper');
const promo_code = document.querySelector('.promo_code.table_wrapper');

document.addEventListener('DOMContentLoaded', () => {
  stagger('.promo_code > div');
});

function elementVisible(element) {
  if (element.style.display === 'none' || element.classList.contains('d-none')) return false;
  else return true;
}

function showDetails() {
  if (manage_code.classList.contains('d-none')) {
    promo_code.classList.add('d-none');
    manage_code.classList.remove('d-none');
    fade(manage_code);
  } else {
    manage_code.classList.add('d-none');
    promo_code.classList.remove('d-none');
    fade(promo_code);
  }
}

function showPopup(event, popup) {
  if (popup === 'add_code') {
    add_code.classList.remove('d-none');
    fade(add_code);
  }
  else if (popup === 'edit_code') {
    edit_code.classList.remove('d-none');
    fade(edit_code);
  }
}