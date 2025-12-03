// Admin panel JS
document.addEventListener('DOMContentLoaded', () => {
  const deleteBtns = document.querySelectorAll('.btn-danger.sm');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      if (!confirm('Are you sure you want to delete this item?')) {
        e.preventDefault();
      }
    });
  });
});
