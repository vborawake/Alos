const user = document.querySelector('.user');
const menu = document.querySelector('.menu');
const top_cards = document.querySelector('.top_cards');

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

function animate() {
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

  gsap.fromTo('nav', {
    opacity: 0,
    y: '-6rem'
  }, {
    opacity: 1,
    y: 0,
    duration: 0.5
  });

  gsap.fromTo('.sidebar_wrapper', {
    opacity: 0,
    x: '-6rem'
  }, {
    opacity: 1,
    x: 0,
    duration: 0.5
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animate();
});