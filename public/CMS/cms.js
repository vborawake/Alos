const banners = document.querySelector('.banners');
const help_support = document.querySelector('.help_support');
const table_wrapper = document.querySelector('.table_wrapper');

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  stagger('.table_wrapper > div');
  stagger('.table_wrapper .table > div');
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

function showDetails(event, screen) {
  if (screen === 'banners') {
    if (elementVisible(banners)) {
      banners.classList.add('d-none');
      table_wrapper.classList.remove('d-none');
      fade(table_wrapper);
    } else {
      banners.classList.remove('d-none');
      fade(banners);
      table_wrapper.classList.add('d-none');
    }
  } else {
    if (elementVisible(help_support)) {
      help_support.classList.add('d-none');
      table_wrapper.classList.remove('d-none');
      fade(table_wrapper);
    } else {
      help_support.classList.remove('d-none');
      fade(help_support);
      table_wrapper.classList.add('d-none');
    }
  }
}