document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent default navigation for demo purposes
      const href = link.href || '#';
      alert(`Navigating to ${href}`);
    });
  });
  