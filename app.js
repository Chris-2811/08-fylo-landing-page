const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.getElementById("message");

console.log(message);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const message = document.getElementById("message");

  function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  if (!isValidEmail(email.value) || email.value === "") {
    message.style.visibility = "visible";
    message.innerText = "Please enter a valid email";
  } else {
    // Submit the form
    form.submit();
  }
});
