<template   >
  <Modal modal-transition="scale">
    <template #default="{ close }">
      <div class="div"></div>
      <div class="modal-container">
        <div class="card">
          <div class="img-modal">
            <i @click="close" class="far fa-times-circle close-icon"></i>
            <img
              :src="'http://image.tmdb.org/t/p/w500/' + modalData.backdrop_path"
              class="card-img-top"
              alt="..."
            />
            <div class="modal-title">
              <h1 class="text-white">{{ modalData.original_title }}</h1>
              <h1 class="text-white">{{ modalData.original_name }}</h1>
            </div>
            <div class="btn-modal">
              <button
                id="buttonPlay"
                class="button"
                style="width: 150px; height: 50px; font-size: 20px"
              >
                <i class="fas fa-play"></i>
                <span>Oynat</span>
              </button>
              <div class="list-icon-left-modal">
                <i class="fas fa-plus toolTip">
                  <span
                    class="toolTiptext tool-span"
                    style="
                      font-size: 20px;
                      width: 180px;
                      left: -3%;
                      margin-bottom: 10px;
                    "
                  >
                    <b>Listeme ekle</b>
                  </span>
                </i>
                <i class="far fa-thumbs-up toolTip">
                  <span
                    class="toolTiptext tool-span"
                    style="
                      font-size: 20px;
                      width: 180px;
                      left: -3%;
                      margin-bottom: 10px;
                    "
                  >
                    <b>Bunu sevdim</b>
                  </span>
                </i>
                <i class="far fa-thumbs-down toolTip">
                  <span
                    class="toolTiptext tool-span"
                    style="
                      font-size: 20px;
                      width: 180px;
                      left: -3%;
                      margin-bottom: 10px;
                    "
                  >
                    <b> Bana göre değil </b>
                  </span>
                </i>
              </div>
            </div>
          </div>
          <div class="detail-container">
            <div class="row">
              <div class="col-sm">
                <div class="puan">
                  <span class="Pborder">{{ modalData.vote_average }}</span>
                </div>
              </div>
              <div class="col-sm">One of three columns</div>
            </div>
            <div class="title-modal">
              <h3 class="title text-white">{{ modalData.release_dates }}</h3>
              <p class="text-white">{{ modalData.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import { Modal } from "vue-neat-modal";

export default {
  components: { Modal },

  props: {
    modalData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      modalTransition: "scale",
      isOpen: false,
    };
  },
  // computed: {
  //   moviesPoster() {
  //     return this.movies.backdrop_path !== "Null"
  //   },

  // },
};
</script> 
