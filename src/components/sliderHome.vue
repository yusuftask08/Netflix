
 <template>
  <div class="text-span">
  <span > Batman Series </span>
  </div>
  <div class="container-card ">
    <div class="imdb " v-for="film in filmList" :key="film.imdbID">
      <div class="ms-2 movie_card ">
        <img :src="film.Poster" class="card-img-top" alt="..." />
        <h3 class="title text-white">{{ film.Title }}</h3>
      </div>
    </div>
    <!-- <carousel >
      <slide v-for="(slide,film) in filmList" :key="film.imdbID">
        {{ slide }}
        <img :src="film.Poster" alt="" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> -->
  </div>
</template>


   
<script>
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import axios from "axios";
export default {
  // components: {
  //   Carousel,
  //   Pagination,
  //   Navigation,
  //   Slide,
  // },
  data() {
    return {
      filmList: [],
      // settings: {
      //   itemsToShow: 5,
      //   snapAlign: "center",
      // },
      // breakpoints: {
      //   // 700px and up
      //   700: {
      //     itemsToShow: 3.5,
      //     snapAlign: "center",
      //   },
      //   // 1024 and up
      //   1024: {
      //     itemsToShow: 5,
      //     snapAlign: "start",
      //   },
      // },
    };
  },
  computed: {
    filmsPoster() {
      return this.films.Poster != "N/A" ? this.films.Poster : "./logo.png";
    },
  },
  created() {
    axios
      .get("http://www.omdbapi.com/?apiKey=38657152&s=batman")
      .then((response) => {
        console.log("movie", response);
        this.filmList = response.data.Search;
      });
  },
};
</script>

