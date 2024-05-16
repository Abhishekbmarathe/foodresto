


// let myOrders = document.querySelector('#myOrders');
// let myOrd = document.querySelector('.myOrders');

// myOrders.addEventListener("click",(()=>{
//     myOrd.classList.toggle("order-visible");
// }))


// my order from submission

// Function to submit the form
function submitForm() {
    const form = document.getElementById("myOrders");
    const userId = localStorage.getItem("userId");

    // Set the action and method of the form
    form.setAttribute("action", "/myorders");
    form.setAttribute("method", "post");

    // Create a hidden input field to pass the userId
    const userIdInput = document.createElement("input");
    userIdInput.type = "hidden";
    userIdInput.name = "userId";
    userIdInput.value = userId;

    // Append the hidden input field to the form
    form.appendChild(userIdInput);

    // Submit the form
    form.submit();
}

// Add event listener to the form submission
document.getElementById("my_orders").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    submitForm(); // Call the submitForm function
});


// storing my cards details in local storage

function addToCart(button) {
    console.log(button);

    const foodId = button.getAttribute("id");
    const serves = button.getAttribute("data-food-serves");
    const name = button.getAttribute("data-food-name");
    const price = button.getAttribute("data-food-price");

    let cartItems = localStorage.getItem('cartItems');

    // If cartItems is null, initialize it as an empty array
    if (!cartItems) {
        cartItems = [];
    } else {
        // Parse the JSON string to convert it back to an array
        cartItems = JSON.parse(cartItems);
    }

    // Create a new item object
    const newItem = {
        id: foodId,
        serves: serves,
        name: name,
        price: price
    };

    // Add the new item to the cartItems array
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}