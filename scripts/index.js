const modalContainer = document.querySelector('.modal-container');
const modalWindow = document.querySelector('.modal-body');
const btnModalOpen = document.querySelector('.btn-modal--open');
const btnModalClose = document.querySelector('.btn-modal--close');

modalWindow.addEventListener('click', (evt) => {
  evt.stopPropagation();
});

const toggleModalWindow = () => {
  modalContainer.classList.toggle('modal-hidden');
};

btnModalOpen.addEventListener('click', toggleModalWindow);
btnModalClose.addEventListener('click', toggleModalWindow);
modalContainer.addEventListener('click', toggleModalWindow);

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    toggleModalWindow();
  }
});
