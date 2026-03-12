/**
 * Navigation Component
 * Handles navigation-related functionality
 */

import { logger } from '../utils/logger.js';

/**
 * Initialize navigation
 */
export const initNavigation = () => {
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!nav) {
    logger.warn('Navigation element not found');
    return;
  }

  // Add active class to current section link
  updateActiveNavLink();

  // Update active link on scroll
  window.addEventListener('scroll', updateActiveNavLink);

  // Add click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
  });

  // Add scroll effect to header
  handleHeaderScroll();

  logger.info('Navigation initialized');
};

/**
 * Update active navigation link based on scroll position
 */
const updateActiveNavLink = () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
      });
      navLink.classList.add('active');
    }
  });
};

/**
 * Handle navigation link clicks
 * @param {Event} e - Click event
 */
const handleNavClick = e => {
  const link = e.currentTarget;
  logger.info(`Navigation link clicked: ${link.getAttribute('href')}`);
};

/**
 * Add scroll effect to header (shadow on scroll)
 */
const handleHeaderScroll = () => {
  const header = document.querySelector('.header');

  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
  });
};

/**
 * Toggle mobile menu (for future mobile implementation)
 */
export const toggleMobileMenu = () => {
  const menu = document.querySelector('.nav__menu');

  if (menu) {
    menu.classList.toggle('nav__menu--open');
    logger.info('Mobile menu toggled');
  }
};
