<template>
  <body>
    <header class="showcase">
      <div class="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" />
      </div>

      <div class="showcase-content">
        <div class="formm">
          <form>
            <h1>Sign In</h1>
            <div class="info">
              <input
                class="email"
                type="email"
                placeholder="Email or phone number"
              />
              <br />
              <input class="email" type="password" placeholder="Password" />
            </div>
            <div class="btn">
              <button class="btn-red" type="submit">Sign In</button>
            </div>
            <div class="help">
              <div>
                <input value="true" type="checkbox" /><label>Remember me</label>
              </div>

              <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
            </div>
          </form>
        </div>

        <div class="fcbk">
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <p>Login with Facebook</p>
        </div>
        <div class="signup">
          <p>New to Netflix ?</p>
          <a href="https://www.netflix.com/dz-en/">Sign up now</a>
        </div>
        <div class="more">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <a href="#">Learn more.</a>
          </p>
        </div>
      </div>

      <footer>
        <div class="ftr-content">
          <div class="contact">
            <a href="#">Quesions? Contact us.</a>
          </div>
          <div class="ftr">
            <a href="#">Gift Card Terms</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Statement</a>
          </div>
          <div class="select">
            <select>
              <option>English</option>
              <option>العربية</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </footer>
    </header>
  </body>
</template>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4 {
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

p {
  margin: 0.5rem 0;
}

img {
  width: 100%;
}

.showcase {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("https://i.ibb.co/vXqDmnh/background.jpg") no-repeat center
    center/cover;
}

.showcase::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.65);
  box-shadow: inset 30px 10px 150px #000000;
}

.logo {
  position: relative;
  z-index: 2;
  height: 90px;
}

.logo img {
  width: 170px;
  position: absolute;
  top: 20px;
  left: 40px;
}

.showcase-content {
  position: relative;
  z-index: 2;
  width: 450px;
  height: 650px;
  background: rgb(0, 0, 0, 0.65);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 60px 65px;
}

.formm h1 {
  margin-bottom: 20px;
}

.formm {
  width: 100%;
  margin-bottom: 40px;
}

.formm .info {
  padding: 5px 0;
  /* margin-bottom: 20px; */
}

.formm .info .email {
  margin-bottom: 30px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: inherit;
  color: #fff;
}

.formm .btn {
  margin-bottom: 10px;
  width: 100%;
}

.btn-red {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: red;
  color: #fff;
  font-size: inherit;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
}

.help {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.help a {
  color: #999;
}

.help a:hover {
  text-decoration: underline;
}

/* ------ input ------- */

input[type="checkbox"] {
  background: #737373;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  border: 0;
  height: 16px;
  left: -20px;
  width: 16px;
  margin-right: 5px;
}

input[type="email"] {
  background: #343434;
}

input[type="password"] {
  background: #343434;
}

/* ------ input end ------- */

.fcbk {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8em;
}

.fcbk img {
  width: 20px;
  margin-right: 10px;
}

.signup {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.signup p {
  margin-right: 5px;
}

.more {
  font-size: 0.8em;
  line-height: 1.1em;
}





/* ------ FOOTER ------- */

footer {
  position: absolute;
  margin-top: 50px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 200px;
}

.ftr-content {
  margin-left: 10%;
  padding-top: 20px;
  font-size: 1em;
}

.ftr-content a {
  color: #999;
}

.ftr-content a:hover {
  text-decoration: underline;
}

.contact {
  margin-bottom: 30px;
}

.contact a:hover {
  text-decoration: underline;
}

.ftr {
  margin-bottom: 30px;
  width: 70%;
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
}

.select select {
  width: 100px;
  height: 40px;
  border: none;
  font-size: inherit;
  padding-left: 10px;
  background: #333333;
}
</style>