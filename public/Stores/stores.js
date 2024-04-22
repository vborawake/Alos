// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');
const invoice_waybill = document.querySelector('.invoice_waybill');
const popup = document.querySelector('.popup');

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  stagger('.table_wrapper > div');
  stagger('.equipment > div');
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

async function showDetails(event, screen='') {
  if (screen === '') {
    if (elementVisible(table_wrapper)) {
      table_wrapper.style.display = 'none';
      details.classList.remove('d-none');
      fade(details);
      stagger('.equipment > div');
    } else {
      table_wrapper.style.display = 'block';
      fade(table_wrapper);
      details.classList.add('d-none');
    }
  } else if (screen === 'add_tracking') {
    if (event.currentTarget.nextElementSibling.classList.contains('d-none')) {
      event.currentTarget.nextElementSibling.classList.remove('d-none');
      fade(event.currentTarget.nextElementSibling);
    } else {
      await fadeOut(event.currentTarget.nextElementSibling);
      event.target.nextElementSibling.classList.add('d-none');
    }
  } else if (screen === 'invoice_waybill') {
    if (elementVisible(table_wrapper)) {
      table_wrapper.style.display = 'none';
      invoice_waybill.classList.remove('d-none');
      fade(invoice_waybill);
      stagger('.equipment > div');
    } else {
      table_wrapper.style.display = 'block';
      fade(table_wrapper);
      invoice_waybill.classList.add('d-none');
    }
  }
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