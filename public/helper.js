const user = document.querySelector('.user');
const menu = document.querySelector('.menu');
const top_cards = document.querySelector('.top_cards');
const logout = document.querySelector('.sidebar').nextElementSibling.querySelector('button:nth-child(3)');
const nav = document.querySelector('nav.d-flex.flex-row.justify-content-between.align-items-center');
const sidebarWrapper = document.querySelector('.sidebar_wrapper');

async function fade(element) {
  await gsap.fromTo(element, {
    opacity: 0
  }, {
    opacity: 1
  });
}

async function fadeOut(element) {
  await gsap.fromTo(element, {
    opacity: 1
  }, {
    opacity: 0
  });
}

async function stagger(element, delay) {
  await gsap.fromTo(element, {
    opacity: 0,
    y: '-2rem'
  }, {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    delay
  });
}

user.addEventListener('click', async () => {
  if (menu.style.display === '' || menu.style.display === 'none') {
    menu.style.display = 'block';
    gsap.fromTo('.menu', {
      y: '-2rem',
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    });
  } else {
    await gsap.fromTo('.menu', {
      y: 0,
      opacity: 1
    }, {
      y: '-2rem',
      opacity: 0
    });
    menu.style.display = 'none';
  }
});

async function animate() {
  if (top_cards) {
    gsap.fromTo('.top_cards > div', {
      opacity: 0,
      y: '-2rem'
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.3
    });
  }

  gsap.fromTo('nav.d-flex.flex-row.justify-content-between.align-items-center', {
    opacity: 0,
    y: '-6rem'
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });

  await gsap.fromTo('.sidebar_wrapper', {
    opacity: 0,
    x: '-6rem'
  }, {
    opacity: 1,
    x: 0,
    duration: 0.5
  });

  nav.style = "";
  sidebarWrapper.style = "";
}

function toggleSidebarAndNav() {
  if (window.innerWidth < 1200) {
    if (window.innerWidth < 768) document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.remove('w-100');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.add('w-100');
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  toggleSidebarAndNav();
  
  await animate();
});

window.addEventListener('resize', () => {
  toggleSidebarAndNav();
});

logout.addEventListener('click', () => {
  window.location.href = '/Login/login.html';
});