let sub = document.querySelector('#sub');

sub.addEventListener('click', () => {
  // Display a confirmation dialog and store the result in a variable
  var confirmation = confirm("Confirm order?");

  // Check if the user confirmed the action
  if (confirmation === true) {
    // If confirmed, submit the form
    submitForm();
    // localStorage.removeItem('cartItems'); // Clear cart after placing order
  } else {
    event.preventDefault();
    alert("Order cancelled...")
  }
});

function submitForm() {
  // Find the form element by its ID
  let form = document.getElementById("food-order-form");

  // Set the action attribute of the form
  form.setAttribute("action", "/submit"); // Set the action to the desired URL
  form.setAttribute("method", "post"); // Set the method to POST

  // Retrieve userId from local storage
  const userId = localStorage.getItem('userId');

  // Retrieve cart items from local storage for the specific user
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


  // Dynamically create input fields with item details
  cartItems.forEach((item, index) => {
    // Create input fields

    const inputNameField = document.createElement('input');
    inputNameField.type = 'text'; // Change type to 'text'
    inputNameField.name = "food";
    inputNameField.value = item.name;
    form.appendChild(inputNameField);

    const inputPriceField = document.createElement('input');
    inputPriceField.type = 'text'; // Change type to 'text'
    inputPriceField.name = "price";
    inputPriceField.value = item.price;
    form.appendChild(inputPriceField);

    const inputServesField = document.createElement('input');
    inputServesField.type = 'text'; // Change type to 'text'
    inputServesField.name = "serves";
    inputServesField.value = item.serves;
    form.appendChild(inputServesField);
  });

  // Create a hidden input field to store the userId
  var userIdInput = document.createElement('input');
  userIdInput.type = 'hidden';
  userIdInput.name = 'userId';
  userIdInput.value = userId;

  // Append the userId input field to the form
  form.appendChild(userIdInput);

  // Submit the form
  form.submit();
}
