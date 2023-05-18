window.addEventListener("DOMContentLoaded", () => {
  
  const modals = document.querySelectorAll('.modal');
  document.addEventListener('click', (event) => {
    if (event.target.dataset.modal) {
      const type = event.target.dataset.modal.toLowerCase();
      modals.forEach(modal => {
        const modalType = modal.dataset.modal.toLowerCase();
        if (type === modalType) return modal.classList.add('active');
        return modal.classList.remove('active');
      });
    }
  });
  
  document.addEventListener('click', event => {
    if (event.target.classList.contains('btn-close')) {
      modals.forEach(modal => modal.classList.remove('active'));
    }
  });
  
});