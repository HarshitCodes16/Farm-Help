let activeFAQ = null;

function toggleFAQ(index) {
  const allContents = document.querySelectorAll('.faq-content');

  // Close all FAQ items first
  allContents.forEach((content) => {
    content.style.display = 'none';
  });

  // Toggle clicked FAQ item
  const clickedContent = document.querySelectorAll('.faq-content')[index];
  if (activeFAQ !== index) {
    clickedContent.style.display = 'block';
    activeFAQ = index;
  } else {
    activeFAQ = null; // Close the active FAQ item if clicked again
  }
}

// Add event listeners to FAQ headers
const faqHeaders = document.querySelectorAll('.faq-header');
faqHeaders.forEach((header, index) => {
  header.addEventListener('click', () => toggleFAQ(index));
});
