<template>
  <div class="container">
    <div class="contanier-text">
      <div class="icerik contanier-text-title text-white">
        <ul>
          <li style="list-style: none; color:grey;" >İlgili İçeriğe Göz atın : </li>
          <li
            style="list-style: none; display: inline"
            v-for="movie in movieList"
            :key="movie.imdbID"
          >
            | {{ movie.original_title }}
          </li>
        </ul>
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
