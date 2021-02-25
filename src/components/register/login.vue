<template>
  <div class="body">
    <header class="showcase">
      <div class="logo">
        <img src="https://i.ibb.co/r5krrdz/logo.png" />
      </div>

      <div class="showcase-content">
        <div class="formm" style="margin-bottom: 10px !important">
          <form>
            <h1>Kayıt ol</h1>
            <div class="info">
              <input
                v-model="userData.full_name"
                class="name"
                type="name"
                placeholder="Ad Soyad"
              />
              <input
                v-model="userData.email"
                class="email"
                type="email"
                placeholder="E‑posta veya telefon numarası"
              />
              <br />
              <input
                v-model="userData.password"
                class="email"
                type="current-password"
                placeholder="Parola"
              />
            </div>
            <div class="btn">
              <button
                @click="onSave({ ...userData })"
                class="btn-red"
                type="submit"
              >
                Kayıt ol
              </button>
            </div>
            <div class="help">
              <p>
                Hesabım var

                <router-link to="/login">
                  <a href="https://www.netflix.com/dz-en/">
                    <strong>Giriş yap</strong>
                  </a></router-link
                >
              </p>
            </div>
          </form>
        </div>

        <div class="fcbk" style="margin-bottom: 10px!">
          <a href="https://facebook.com">
            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
          </a>
          <p>Facebook ile Oturum aç</p>
        </div>

        <div class="more">
          <p>
            Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA
            tarafından korunuyor. <a href="#">Daha fazlasını öğrenin.</a>
          </p>
        </div>
      </div>
      <footer>
        <div class="ftr-content">
          <div class="contact">
            <a href="#">
              <span
                >Sorularınız mı var? 0850-390-7444 numaralı telefonu
                arayın</span
              >
            </a>
          </div>
          <div class="ftr">
            <a href="#"> <span>SSS</span> </a>
            <a href="#"><span>Çerez Tercihleri</span> </a>
            <a href="#"> <span>Yardım Merkezi</span> </a>
            <a href="#"> <span>Kurumsal Bilgiler</span> </a>
            <a href="#"> <span> Kullanım Koşulları</span></a>
            <a href="#"> <span>Gizlilik</span> </a>
          </div>
          <div class="select">
            <select>
              <option>Türkçe</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </footer>
    </header>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userData: {
        full_name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions({
      onSave: "users/register",
    }),
    // onSave() {
    //   console.log("this.userData   :>> ", this.userData);
    //   this.$store.dispatch("users/register", { ...this.userData });
    // },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.body {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #999;
  background: #141414;
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("https://i.ibb.co/vXqDmnh/background.jpg") no-repeat center
    center/cover;
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
  height: 645px;
  background: rgb(0, 0, 0, 0.65);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 60px 65px;
  border-radius: 5px;
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
  background: #343434;
}
.name {
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
  margin-bottom: 20px;
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

input[type="name"] {
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
.beni-hatirla {
  display: flex;
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
  z-index: 2;
  background: rgb(0, 0, 0, 0.65);
  width: 100%;
  height: 250px;
  display: flex;
  margin-top: -1px;
  justify-content: flex-start;
}

.ftr-content {
  margin-left: 10%;
  padding-top: 20px;
  font-size: 1em;
}

.ftr-content span {
  color: #999;
  padding: 0;
  margin-bottom: 16px;
  min-width: 100px;
  width: 25%;
  padding-right: 12px;
  vertical-align: top;
  margin-right: 50px;
}
.ftr-content span:hover {
  text-decoration: none;
}
.ftr-content a:hover {
  text-decoration: none;
}

.contact {
  margin-bottom: 30px;
  position: relative;
  text-align: start;
  height: auto;
}

.contact a:hover {
  text-decoration: underline;
}

.ftr {
  margin-bottom: 30px;
  width: 100%;
  font-size: 0.8em;
  display: flex;
  text-align: start;
  margin-right: 30px;
}

.select {
  width: 100px;
  height: 40px;
  border: none;
  font-size: inherit;
  padding-left: 10px;
  background: #333333;
  text-align: start;
}
.select select {
  width: 80px;
  height: 40px;
  border: none;
  font-size: inherit;
  color: #999;
  background: #333333;
  text-align: start;
}
</style>