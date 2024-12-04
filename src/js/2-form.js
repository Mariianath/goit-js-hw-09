
const form = document.getElementById('contact-form');


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = form.email.value;
  const message = form.message.value;


  if (!email || !message) {
    alert('Please fill out all fields.');
    return;
  }


  console.log('Email:', email);
  console.log('Message:', message);

  alert('Form submitted successfully!');
});
