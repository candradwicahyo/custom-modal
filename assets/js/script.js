window.addEventListener("DOMContentLoaded", () => {
  
  const modals = document.querySelectorAll('.modal');
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const dataModal = this.dataset.modal.toLowerCase();
      showAndHideModal(dataModal);
    });
  });
  
  function showAndHideModal(dataModal) {
    modals.forEach(modal => {
      const modalType = modal.dataset.type.toLowerCase();
      if (dataModal === modalType) return modal.classList.add('active');
      return modal.classList.remove('active');
    });
  }
  
  window.addEventListener('click', event => {
    if (event.target.classList.contains('btn-close-modal')) {
      const modal = event.target.parentElement.parentElement;
      modal.classList.remove('active');
    }
  });
  
});