const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      message.innerHTML = 'Submission sent!';
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    message.innerHTML = 'Submission failed.';
    console.error('Error:', error);
  });
});
