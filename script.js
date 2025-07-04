function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const toggleIcon = document.getElementById('theme-toggle');
  toggleIcon.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
}

function goHome() {
  window.location.href = 'index.html';
}

function filterPlans(category) {
  const cards = document.querySelectorAll('.plan-cards .card');
  cards.forEach(card => {
    if (card.classList.contains(category + '-plan')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.filter-btn[onclick="filterPlans('${category}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Set initial filter to 'veg' when the page loads
  filterPlans('veg');
});
