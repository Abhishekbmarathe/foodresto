document.addEventListener("DOMContentLoaded", function() {
    const addFoodForm = document.getElementById("addFoodForm");

    addFoodForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Retrieve form values
        const foodName = document.getElementById("foodName").value;
        const foodRate = document.getElementById("foodRate").value;
        const foodImage = document.getElementById("foodImage").value; // For file upload

        // Perform form submission logic here (e.g., send data to server)
        console.log("Food Name:", foodName);
        console.log("Food Rate:", foodRate);
        console.log("Food Image:", foodImage);

        // Reset form after submission
        addFoodForm.reset();
    });
});
