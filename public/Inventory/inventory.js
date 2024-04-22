const top_filters = document.querySelector('.top_filters');
const table_wrapper = document.querySelector('.table_wrapper');
const details = document.querySelector('.details');
const stock_entries = document.querySelector('.stock_entries');
const in_entries = document.querySelector('.in_entries');
const out_entries = document.querySelector('.out_entries');
const add_equipment = document.querySelector('.add_equipment');
const add_consumable = document.querySelector('.add_consumable');
const quotation = document.querySelector('.quotation');
const balance = document.querySelector('.balance');
const query = document.querySelector('.query');
const edit_category = document.querySelector('.edit_category');
const add_category = document.querySelector('.add_category');
const edit_product = document.querySelector('.edit_product');
const add_product = document.querySelector('.add_product');

function inventoryAnimate() {
  stagger('.categories > button');
  stagger('.dropdown');
  stagger('.equipment > div', 0.5);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    document.querySelector('.offcanvas-left').classList.add('offcanvas');
    document.querySelector('#navbar_content').classList.add('offcanvas');
  } else {
    document.querySelector('.offcanvas-left').classList.remove('offcanvas');
    document.querySelector('#navbar_content').classList.remove('offcanvas');
  }

  inventoryAnimate();
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

async function showDetails(event, screen='') {
  if (elementVisible(table_wrapper) && !top_filters.classList.contains('d-none')) {
    table_wrapper.style.display = 'none';
    top_filters.classList.add('d-none');
    if (screen === '') {
      details.classList.remove('d-none');
      await fade(details);
    }
    else if (screen === 'in') {
      stock_entries.querySelector('h4').innerHTML = '<span class="text-primary">Back > </span>Stock In Entries';
      stock_entries.classList.remove('d-none');
      out_entries.classList.add('d-none');
      in_entries.classList.remove('d-none');
      await fade(stock_entries);
      quotation.classList.add('d-none');
      balance.classList.add('d-none');
    }
    else if (screen === 'out') {
      stock_entries.querySelector('h4').innerHTML = '<span class="text-primary">Back > </span>Stock Out Entries';
      stock_entries.classList.remove('d-none');
      in_entries.classList.add('d-none');
      out_entries.classList.remove('d-none');
      quotation.classList.add('d-none');
      await fade(stock_entries);
      balance.classList.add('d-none');
    }
    else if (screen === 'quotation') {
      stock_entries.querySelector('h4').innerHTML = '<span class="text-primary">Back > </span>Quotation';
      stock_entries.classList.remove('d-none');
      in_entries.classList.add('d-none');
      out_entries.classList.add('d-none');
      await fade(stock_entries);
      quotation.classList.remove('d-none');
      balance.classList.add('d-none');
    }
    else if (screen === 'balance') {
      balance.classList.remove('d-none');
      await fade(balance);
      await stagger('.stock > div');
      localStorage.setItem('fromStock', 'true');
    }
    else if (screen === 'query') {
      query.classList.remove('d-none');
      await fade(query);
    } else if (screen === 'add_equipment') {
      add_equipment.classList.remove('d-none');
      fade(add_equipment);
    }
  } else {
    top_filters.classList.remove('d-none');
    table_wrapper.style.display = 'block';
    fade(top_filters);
    fade(table_wrapper);
    if (screen === '') {
      details.classList.add('d-none');
      if (localStorage.getItem('fromStock')) {
        top_filters.classList.add('d-none');
        table_wrapper.style.display = 'none';
        localStorage.removeItem('fromStock');
        balance.classList.remove('d-none');
      }
    }
    else if (screen === 'in' || details === 'out' || screen === 'quotation') stock_entries.classList.add('d-none');
    else if (screen === 'equipment_details') {
      top_filters.classList.add('d-none');
      table_wrapper.style.display = 'none';
      fade(details);
      if (elementVisible(query)) {
        query.classList.add('d-none');
        details.classList.remove('d-none');
        details.querySelector('.details_buttons').classList.add('d-none');
        details.querySelector('.payment_wrapper').classList.add('d-none');
      } else if (elementVisible(balance)) {
        balance.classList.add('d-none');
        details.classList.remove('d-none');
        details.querySelector('.details_buttons').classList.add('d-none');
        details.querySelector('.payment_wrapper').classList.add('d-none');
      }
    } else if (screen === 'query') query.classList.add('d-none');
    else if (screen === 'balance') balance.classList.add('d-none');
    else if (screen === 'add_equipment') add_equipment.classList.add('d-none');
    else if (screen === 'product_details') {
      table_wrapper.style.display = 'none';
      top_filters.classList.add('d-none');
      balance.classList.remove('d-none');
      fade(balance);
      details.classList.add('d-none');
    } else if (screen === 'add_consumable') {
      table_wrapper.style.display = 'none';
      top_filters.classList.add('d-none');
      add_equipment.classList.add('d-none');
      add_consumable.classList.remove('d-none');
      fade(add_consumable);
    }
  }
}

async function showPopup(event, popup) {
  if (popup === 'add_category') {
    add_category.classList.remove('d-none');
    await fade(add_category);
  }
  else if (popup === 'edit_category') {
    edit_category.classList.remove('d-none');
    await fade(edit_category);
  }
  else if (popup === 'add_product') {
    add_product.classList.remove('d-none');
    await fade(add_product);
  }
  else if (popup === 'edit_product') {
    edit_product.classList.remove('d-none');
    await fade(edit_product);
  }
}