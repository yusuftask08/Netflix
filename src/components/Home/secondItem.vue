<template>
  <div class="secondItem">
    <div v-show="searchopen">
      <input
        v-if="searchopen"
        type="text"
        class="form-control me-5"
        v-model="searchKey"
        placeholder="Hadi birşey arayalım.."
        @keydown.enter="searchMovie(searchKey)"
      />

    </div>
    <i
      @click="searchopen = !searchopen"
      class="fa fa-search me-4 text-white fs-sm-4 ms-3"
      href="#"
    ></i>

    <i class="fas fa-gift me-4 text-white fs-sm-4"></i>
    <i class="fas fa-bell me-4 text-white fs-sm-4"></i>
    <div class="dropdown"></div>
    <button
      class="btn text-white me-5 dropdown-toggle fs-sm-3"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    ></button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      searchopen: false,
      searchKey: null,
    };
  },
  methods: {
    ...mapActions(["searchMovie"]),
  },
  created() {},
};
</script>

