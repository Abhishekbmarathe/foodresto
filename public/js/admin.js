const boxes = document.querySelectorAll(' .order');
function resizeOtherBoxes(clickedBox) {
    boxes.forEach(box => {
        if (box == clickedBox) {
            box.style.height = '250px'; // Adjust the height as needed
        }
        else {
            box.style.height = "1px";
        }
    });
}

boxes.forEach(box => {
    box.addEventListener('click', function () {
        resizeOtherBoxes(this);
    });
});

let addItems = document.querySelector("#additems");
let li = document.querySelector("#additems li");
li.addEventListener("click", () => {
    addItems.submit();
})