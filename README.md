# Guess My Number Project

## Table of Contents

- [Project-Description](#Project-Description)
- [Prerequisites](#Prerequisites)
- [Installing](#Installing)
- [Steps](#Steps)
- [Author](#Author)
- [Credits](#Credits)

## Project-Description

The starter project had the buttons, modal & overlay set in the HTML file with CSS styling to display a static page version. I needed to add some functionality to show the modal window on button click and to close the modal by interacting with either the close button, clicking on the overlay, or pressing the Esc key using JavaScript.

## Prerequisites

Any code editor (e.g: VSCode, Atom,... etc)

## Installing

Terminal commands to start using project:

- Get a copy on your machine

```
`git clone https://github.com/Aragorn-Elessar/Modal.git`
```

- Call into the directory location

```
`cd Modal`
```

- Opens code in `VSCode`

```
`code .`
```

## Steps

- Define global variables

```js
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
```

- Create helping functions to make it easier to use and read different actions

```js
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
```

- An event listener that responds to the user click on any button to show the modal window

```js
// Show modal window on button click
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
```

- Close the modal window when the user interacts with either the close button, clicks on the overlay, or presses the Esc key

```js
// Close modal window on X button click
btnCloseModal.addEventListener('click', closeModal);

// Close modal on overlay click
overlay.addEventListener('click', closeModal);

// Close modal on Esc key down
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
```

## Author

[Mahmoud Gadallah](https://github.com/Aragorn-Elessar)

## Credits

A [Udemy](https://www.udemy.com) project, provided by [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/) JavaScript course
