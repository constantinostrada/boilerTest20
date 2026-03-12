/**
 * Navigation Module
 * Handles mobile navigation toggle and active states
 */

/**
 * Initialize navigation functionality
 */
export const initNavigation = () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!navToggle || !navMenu) {
    return;
  }

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    toggleMobileMenu(navMenu, navToggle);
  });

  // Close menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMobileMenu(navMenu, navToggle);
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
      toggleMobileMenu(navMenu, navToggle);
    }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileMenu(navMenu, navToggle);
      }
    }, 250);
  });
};

/**
 * Toggle mobile menu state
 * @param {HTMLElement} menu - The navigation menu element
 * @param {HTMLElement} toggle - The toggle button element
 */
const toggleMobileMenu = (menu, toggle) => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
  
  // Update aria-expanded attribute
  const isExpanded = menu.classList.contains('active');
  toggle.setAttribute('aria-expanded', isExpanded);
  
  // Prevent body scroll when menu is open
  if (isExpanded) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

/**
 * Set active navigation link based on current section
 */
export const setActiveNavLink = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
};
