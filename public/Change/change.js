const editingElements = document.querySelectorAll('.editing');
const non_editing = document.querySelector('.non_editing');
const title = document.querySelector('.title');

function editProfile () {
  non_editing.classList.add('d-none');
  editingElements.forEach(el => {
    el.classList.remove('d-none');
    fade(el);
  });

  title.innerHTML = `<span class="text-primary">Back > </span>Edit Profile`;
}

function back () {
  non_editing.classList.remove('d-none');
  fade(non_editing);
  editingElements.forEach(el => {
    el.classList.add('d-none');
  });

  title.innerHTML = `Manage Profile`;
}