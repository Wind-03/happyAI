let get_started = document.getElementById("get-started")
let login_el = document.getElementById("login")
let btn_signin = document.getElementById("signin")


function signInPage(){
    let newHTML = `
    <section id="login" class="login">
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form action="" class="login-form">
            <img src="./11.png" alt="Happy Hub Logo" height="180" width="180" class="page-two-logo"> 
            <h3>Login Here</h3>
            <label for="fname" class="log-in-label">Username</label>
            <input class="login-input" type="text" name="fname" placeholder="Please enter your Username">
            <label for="password" class="log-in-label">Password</label>
            <input class="login-input" type="password" name="password" placeholder="enter your password">
            <button class="log" onclick="homePage()">Log In</button>
            <div id="social" class="social">
            <div class="go"><i class="fa fa-google"></i>Google</div>
            </div>
        </form>
    </section>`
    get_started.innerHTML= newHTML
    console.log("otondo")
}
function signUpPage(){
    let nextHTML = `
    <section class="sign-up">
      <form action="" class="sign-up-form">
        <img src="./11.png" alt="Happy Hub Logo" height="180" width="180" class="page-two-logo">
        <h1 class="title">Sign up</h1>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a">
          <label for="" class="sign-in-label">Email</label>
        </div>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a">
          <label for="" class="sign-in-label">Username</label>
        </div>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a">
          <label for="" class="sign-in-label">Password</label>
        </div>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a">
          <label for="" class="sign-in-label">Confirm Password</label>
        </div>
        <input type="submit" class="submitBtn" value="Sign up" onclick="homePage()">
        <div class="divider">
        <div class="separator"></div>
        <p>or</p>
        <div class="separator"></div>
        </div>
        <button class="google-sign">Sign Up with Google<i class="fa fa-google" aria-hidden="true"></i></button>
      </form>
    </section> 
    `
    get_started.innerHTML= nextHTML
}
function homePage(){
  let homeHTML = `
  <section class="home-page">
    <div class="home-header">
    <img src="./11.png" alt="Happy Hub Logo" class="home-page-logo">
    </div>
    <footer>
      <textarea></textarea>
    </footer>
  </section>
  `

  get_started.innerHTML= homeHTML
}
