<template>
  <div class="text-span">
    <span> Netlix Orijinal İçerikleri </span>
  </div>

  <div class="container-card-original ms-5">
    <div class="imdb" v-for="gundemList in gundemList" :key="gundemList.id">
      <div class="ms-3 originalCard">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + gundemList.poster_path"
          class="card-img-top"
          alt="..."
        />
        <div class="film_info_original_card">
          <div class="list-icon-left_original">
            <i
              class="fas fa-play right"
              style="background: white; color: black"
            >
            </i>
            <i class="fas fa-plus toolTip right-2">
              <span class="toolTiptext tool-span"> Listeme ekle </span>
            </i>
            <a @click="isOpen = !isOpen">
              <i class="fas fa-chevron-down toolTip">
                <span class="toolTiptext tool-span"> Daha fazla bilgi </span>
              </i></a
            >
            <originalModals :gundemList="gundemList" v-model="isOpen" />

            <h3 class="title text-white">{{ gundemList.original_title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import originalModals from "@/components/modal/originalModals";
import { Modal } from "vue-neat-modal";

export default {
  components: {
    originalModals,
    Modal,
  },
  data() {
    return {
      gundemList: [],
      isOpen: false,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7b97ca5600ae944d697e04e778928d05&language=en-US&page=1&append_to_response=videos,images"
      )
      .then((response) => {
        console.log("gundemListOriginalContent", response);
        this.gundemList = response.data.results;
      });
  },
};
</script>
   