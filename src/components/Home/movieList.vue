<template>
  <div class="container">
    <div class="contanier-text">
      <div class="icerik contanier-text-title text-white">
        <div v-show="icerik" class="div">
          <p v-if="icerik" style="list-style: none; color: grey">
            İlgili İçeriğe göz atın :
          </p>
           
          <ul>
            <li
              style="list-style: none; display: inline"
              v-for="movie in movieList"
              :key="movie.imdbID"
            >
              | <a :href="movie.id"  v-if="icerik = !movie.lenght" style="text-white!" > {{ movie.original_title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-6 col-sm-2 my-5"
        v-for="movie in movieList"
        :key="movie.imdbID"
      >
        <movieListItem :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script>
import movieListItem from "@/components/Home/movieListItem";
// import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      icerik: false,
    };
  },
  components: {
    movieListItem,
  },

  computed: {
    ...mapGetters({
      movieList: "movieItemList",
    }),
  },
};
</script>
