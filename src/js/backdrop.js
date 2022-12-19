(() => {
  const refs = {
    openModalBtn: document.querySelector('[backdrop-open]'),
    closeModalBtn: document.querySelector('[backdrop-close]'),
    modal: document.querySelector('[backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
