'use strict';

/**
 * Global Variables
 *
 */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

/**
 * Helper Functions
 *
 */
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/**
 * Main Functions
 *
 */
// Show modal window on button click
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// Close modal window on X button click
btnCloseModal.addEventListener('click', closeModal);

// Close modal on overlay click
overlay.addEventListener('click', closeModal);

// Close modal on Esc key down
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
