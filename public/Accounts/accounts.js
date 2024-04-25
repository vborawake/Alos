// const top_cards = document.querySelector('.top_cards');
const table_wrapper = document.querySelector('.transaction_wrapper.table_wrapper');
const accounts = document.querySelector('.accounts');

async function customerAnimate() {
  stagger('.table_wrapper > div');
  await stagger('.transaction > div');
  document.querySelector('.transaction').style = '';
  document.querySelectorAll('.transaction > div').forEach(el => el.style = '');
}

document.addEventListener('DOMContentLoaded', async () => {
  await customerAnimate();
});

function elementVisible(element) {
  if (element.style.display === 'none') return false;
  else return true;
}

async function showDetails(event) {
  if (elementVisible(table_wrapper)) {
    table_wrapper.style.display = 'none';
    accounts.classList.remove('d-none');
    fade(accounts);
    stagger('.transaction > div');
  } else {
    table_wrapper.style.display = 'block';
    fade(table_wrapper);
    accounts.classList.add('d-none');
  }
}