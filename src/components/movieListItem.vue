<template>
  <div class="ms-3 movie_card">
    <img :src="moviePoster" class="card-img-top" alt="..." />
    <h3 class="title text-white">{{ movie.Title }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },

  computed: {
    moviePoster() {
      return this.movie.Poster != "N/A" ? this.movie.Poster : "./logo.png";
    },
  },
};
</script>