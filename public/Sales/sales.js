const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');
const addScreen = document.querySelector('.details.add');
const popup = document.querySelector('.popup');

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
}

async function showAddScreen() {
  if (elementVisible(table_wrapper)) {
    table_wrapper.style.display = 'none';
    addScreen.classList.remove('d-none');
    fade(addScreen);
    stagger('.equipment > div');
  } else {
    table_wrapper.style.display = 'block';
    fade(table_wrapper);
    addScreen.classList.add('d-none');
  }
}

async function showPopup() {
  if (popup.classList.contains('d-none')) {
    popup.classList.remove('d-none');
    fade(popup);
  } else {
    popup.classList.add('d-none');
    fadeOut(popup);
  }
}