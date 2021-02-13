<template>
  <div class="container-card">
    <div class="">
      <div class="ms-2 me-2 movie_card item">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="card-img-top"
          alt="..."
        />
        <!-- <h3 class="title text-white">{{ seriesList.original_title }}</h3> -->
        <!-- <p class="text-white">{{ seriesList.vote_count }}</p> -->
        <!-- <p class="text-white">{{ seriesList.overview }}</p> -->
        <div class="film_info">
          <div class="list-icon-left">
            <a href=""
              ><i class="fas fa-play" style="background: white; color: black">
              </i
            ></a>

            <a href=""
              ><i class="fas fa-plus toolTip">
                <span class="toolTiptext-sm tool-span-sm"> Listeme ekle </span>
              </i></a
            >
            <a href="">
              <i class="fas fa-chevron-down toolTip">
                <span class="toolTiptext-sm tool-span-sm">
                  Daha fazla bilgi
                </span>
              </i></a
            >
          </div>
        </div>
      </div>
    </div>
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