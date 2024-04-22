const edit_code = document.querySelector('.edit_code');
const add_code = document.querySelector('.add_code');
const edit_product = document.querySelector('.edit_product');
const add_product = document.querySelector('.add_product');

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }
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
  if (element.style.display === 'none' || element.classList.contains('d-none')) return false;
  else return true;
}

function showPopup(event, popup) {
  if (popup === 'add_code') add_code.classList.remove('d-none');
  else if (popup === 'edit_code') edit_code.classList.remove('d-none');
}