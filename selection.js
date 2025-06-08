// GENERAL RULES
function redirectTo(url) {
  window.location.href = url;
}

let burgerMenu = document.querySelector('.burger-menu');
let navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});


let tourSelect = document.getElementById('tour');
let categorySelect = document.getElementById('category');


let table1 = document.getElementById('table1');
let table2 = document.getElementById('table2');
let table3 = document.getElementById('table3');
let table4 = document.getElementById('table4');


function updateTable() {

  let tour = tourSelect.value;
  let category = categorySelect.value;


  [table1, table2, table3, table4].forEach(table => table.classList.remove('active'));

  if (tour === 'ATP' && category === 'Singles') table1.classList.add('active');
  if (tour === 'WTA' && category === 'Singles') table2.classList.add('active');
  if (tour === 'ATP' && category === 'Doubles') table3.classList.add('active');
  if (tour === 'WTA' && category === 'Doubles') table4.classList.add('active');
}

tourSelect.addEventListener('change', updateTable)

categorySelect.addEventListener('change', updateTable);
