function loginWithGoogle() {
    // Redirect to Google OAuth endpoint
    window.location.href = "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile";
  }
  
  function loginWithGitHub() {
    // Redirect to GitHub OAuth endpoint
    window.location.href = "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user";
  }
  
  function loginWithMicrosoft() {
    // Redirect to Microsoft OAuth endpoint
    window.location.href = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=User.Read";
  }
  
  let cover = document.querySelector(".cover");
  let btn = document.querySelector(".btn");
  let loginContainer = document.querySelector(".login-container")
  let signupContainer = document.querySelector(".signup-container")
  let lspan=document.querySelector("#lspan")
  let sspan=document.querySelector("#sspan")
  
  btn.addEventListener("click", () => {
    cover.classList.toggle('moveright');
    console.log("hello")
    // btn.textContent = "Login"
    loginContainer.classList.toggle("move")
    signupContainer.classList.toggle("sign_move")
    lspan.classList.toggle("lspan")
    sspan.classList.toggle("sspan")
  })


  