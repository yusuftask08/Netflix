<template>
  <div class="container">
    <div class="contanier-text">
      <div class="icerik contanier-text-title text-white">
        <div v-show="icerik" class="inline" style="">
          <div class="text">
            <p v-if="icerik" style="list-style: none; color: grey">
              İlgili İçeriğe göz atın :
            </p>
          </div>

          <div class="ul">
            <ul>
              <li
                style="list-style: none; display: inline"
                v-for="movie in movieList"
                :key="movie.id"
              >
                |
                <a v-if="(icerik = !movie.lenght)" @click="isOpen = !isOpen">
                  {{ movie.original_title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <modals :movie="movie" v-model="isOpen" />
    <div class="row">
      <div
        class="col-6 col-sm-2 my-5"
        v-for="movie in movieList"
        :key="movie.id"
      >
        <movieListItem :movie="movie" />
      </div>
    </div>
  </div>
</template>
<script>
import movieListItem from "@/components/Home/movieListItem";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      icerik: false,
      isOpen: false,
      movie: [],
      filmId: [],
    };
  },
  components: {
    movieListItem,
  },

  // methods: {
  //   showDetail(id) {
  //     console.log("movies", id);
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/${id}?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US`
  //       )
  //       .then((response) => {
  //         console.log("istekat", response);
  //         this.filmId = response.data.results
  //       });
  //   },
  // },

  computed: {
    ...mapGetters({
      movieList: "movieItemList",
    }),
  },
};
</script>
<style>
ul li a {
  margin-right: 3px;

  cursor: pointer;
}
ul li:hover {
  color: red;
}
.text p {
  width: 150px;
}
.inline {
  display: flex;
}
</style>
