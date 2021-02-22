<template>
  <div class="secondItem">
    <div v-show="searchopen">
      <input
        v-if="searchopen"
        type="text"
        class="form-control me-5"
        v-model="searchKey"
        placeholder="Hadi birşey arayalım.."
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
    <img
      src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
      style="width: 32px; border-radius: 3px"
      alt=""
    />
    <ul class="navbar-nav me-0 mb-2 mb-lg-0">
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
            <router-link class="dropdown-item" to="/my-questions">
              <img
                src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                style="width: 32px; border-radius: 3px; margin-right: 15px"
                alt=""
              />
              <span style="font-size: 14px; color: #fff">YUSUF</span>
            </router-link>
            <router-link class="dropdown-item" to="/myList">
              <span style="font-size: 14px; color: #fff">Listem</span>
            </router-link>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <router-link class="dropdown-item" to="/account">
            <span style="font-size: 14px; color: #fff">Hesabım</span>
          </router-link>
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
import { mapActions } from "vuex";
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
  left: -100px;
}
</style>

