// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('open');
});

// Back to top button visibility
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to top on click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Gallery Filtering (Optional enhancement)
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-buttons button');
const cakeCards = document.querySelectorAll('.cake-card');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cakeCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'flex' : 'none';
    });
  });
}

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.getAttribute('data-category');

      cakeCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
