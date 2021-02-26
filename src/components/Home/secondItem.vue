<template>
  <div class="secondItem">
    <div v-show="searchopen">
      <input
        v-if="searchopen"
        type="text"
        class="form-control me-5"
        v-model="searchKey"
        placeholder="Film.."
        @keydown.enter="
          searchMovie(searchKey, searchpage(), (searchopen = false))
        "
      />
    </div>
    <i
      @click="searchopen = !searchopen"
      class="fa fa-search me-4 text-white fs-sm-4 ms-3"
      href="#"
    ></i>

    <i class="fas fa-gift me-4 text-white fs-sm-4"></i>
    <i class="fas fa-bell me-4 text-white fs-sm-4"></i>
    <router-link
      to="/Login"
      v-if="!isAuthenticated"
      tag="button"
      class="btn btn-outline-dark me-5 mb-2"
      style="color: #fff; margin-top: 5px; width: 120px"
    >
      Giriş Yap</router-link
    >
    <ul v-else class="navbar-nav me-0 mb-2 mb-lg-0">
      <img
        src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
        style="width: 35px; height: 35px; border-radius: 5px"
        alt=""
      />
      <li class="nav-item-down dropdown">
        <a
          @click="menuOpened = !menuOpened"
          class="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </a>

        <ul
          :class="{ show: menuOpened }"
          class="dropdown-menu"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <router-link class="dropdown-item" to="/List">
              <img
                src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                style="width: 32px; border-radius: 3px; margin-right: 15px"
                alt=""
              />
              <span style="font-size: 14px; color: #fff">
                {{ currentUser.full_name }}
              </span>
            </router-link>
            <hr style="color: #fff" />
            <router-link class="dropdown-item" to="/List">
              <span style="font-size: 14px; color: #fff">Listem</span>
            </router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/List">
              <span style="font-size: 14px; color: #fff">Hesabım</span>
            </router-link>
          </li>

          <li>
            <a class="dropdown-item" href="#" @click.prevent="logout">
              <span style="font-size: 14px; color: #fff">Çıkış yap</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script >
// import axios from "axios";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchopen: false,
      searchKey: null,
      menuOpened: false,
    };
  },
  methods: {
    ...mapActions(["searchMovie"]),
    searchpage() {
      this.$router.push({ name: "Search" });
    },
    ...mapMutations({
      logout: "users/logout",
    }),
  },
  computed: {
    ...mapGetters({
      currentUser: "users/currentUser",
      isAuthenticated: "users/isAuthenticated",
    }),
  },
  mounted() {
    document
      .querySelector(":not(#navbarDropdown)")
      .addEventListener("click", (evt) => {
        if (evt?.target?.id !== "navbarDropdown") {
          this.menuOpened = false;
        }
      });
  },
};
</script>
<style >
.form-control {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}
.form-control:focus {
  background: rgba(0, 0, 0, 0.5);
  border-color: grey;
  color: #fff;
  box-shadow: none !important;
}
.show {
  background: rgba(0, 0, 0, 0.9);
}
.nav-item-dropdown {
  margin-right: 15px;
}
.nav-item-down {
  margin-right: 10px !important;
}
.dropdown-menu .show {
  margin-right: 30px !important;
}
.dropdown-menu {
  min-width: 0em !important;
  left: -120px;
}
.dropdown-menu li a:hover {
  text-decoration: underline;
  color: #fff;
  background-color: transparent;
}
</style>

