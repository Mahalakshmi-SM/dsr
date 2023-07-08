// script.js

// Get the login button and the modal
const loginBtn = document.getElementById("login-btn");
const modal = document.getElementById("login-modal");

// Get the close button inside the modal
const closeBtn = modal.querySelector(".close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener for the login button to open the modal
loginBtn.addEventListener("click", openModal);

// Event listener for the close button to close the modal
closeBtn.addEventListener("click", closeModal);

// Event listener for clicks outside the modal to close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Prevent form submission (you can add your own form handling logic here)
const form = modal.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Add your own logic to handle form submission (e.g., validation, AJAX request)
  // You can access the form data using form.elements
  // For example:
  // const username = form.elements.username.value;
  // const password = form.elements.password.value;
  // Perform necessary actions with the username and password
  // Then close the modal or display a success message
  closeModal();
});
