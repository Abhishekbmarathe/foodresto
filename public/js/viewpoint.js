// Get the box element
const boxes = document.querySelectorAll('.view');
const uni_img = document.querySelectorAll('.uni_img');
const txtCont = document.querySelectorAll('.left');

// Function to check if the element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    boxes.forEach((element, i1) => {
        if (isInViewport(element)) {
            uni_img.forEach((e, i2) => {
                if (i1 == i2) {
                    setTimeout(() => {
                        e.classList.add('visible');
                        txtCont.forEach((el, el1) => {
                            if (i2 == el1) {
                                el.classList.add("left_move")
                            }
                        })
                    }, 0);
                }
            })
        }
    })
}


// Attach scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Initially check if the box is in viewport
// handleScroll();