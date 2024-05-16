let pass = document.querySelector("#pass");
let conPass = document.querySelector("#conPass");

let subbtn = document.getElementById("submit");

subbtn.addEventListener("click", (e) => {
    let Form = document.getElementById("signup");
    const passVal = pass.value;
    const conPassVal = conPass.value;

    if (passVal === conPassVal) {
        Form.setAttribute("action", "/signup");
        Form.setAttribute("method", "POST");
        Form.submit();
    }
    else {
        alert("password and confirm password should be same");
    }
    e.preventDefault()
})


