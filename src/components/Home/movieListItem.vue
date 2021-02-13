<template>
 
  <div class="ms-2 search_movie_card">
    <img
      :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
      class="card-img-top"
      alt="..."
    />
    <!-- <h3 class="title text-white">{{ movie.original_title }}</h3> -->
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
};
</script>