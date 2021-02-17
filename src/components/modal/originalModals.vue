<template  v-for="gundemList in gundemList" :key="gundemList.id">
  <Modal modal-transition="slide-down">
    <template #default="{ close }">
      <div class="modal-container">
        <div class="card">
          <div class="img-modal">
            <i @click="close" class="far fa-times-circle close-icon"></i>
            <img
              :src="
                'http://image.tmdb.org/t/p/w500/' + gundemList.backdrop_path
              "
              class="card-img-top"
              alt="..."
            />
            <div class="modal-title">
              <h1 class="text-white">{{ gundemList.original_title }}</h1>
              <h1 class="text-white">{{ gundemList.original_name }}</h1>
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
                  <span class="Pborder">{{ gundemList.vote_average }}</span>
                </div>
              </div>
              <div class="col-sm">One of three columns</div>
            </div>
            <div class="title-modal">
              <h3 class="title text-white">{{ gundemList.release_dates }}</h3>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
              <p class="text-white">{{ gundemList.overview }}</p>
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
    gundemList: {
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

<style>
.puan {
  width: 30px;
}
.detail-container {
  padding: 0 3em;
}
.Pborder {
  border: solid 1px rgba(255, 255, 255, 0.4);
  padding: 0 0.5em;
  white-space: nowrap;
}
.list-icon-left-modal i {
  text-align: center;
  padding: 17px;
  border: 2px solid rgb(119, 119, 119);
  border-radius: 50%;
  margin-right: 4px;
  color: #dbdbdb;
  cursor: pointer;
  background-color: #2a2a2ad3;
  margin-right: 16px;
  width: 60px;
  height: 60px;
  font-size: 20px;
  justify-content: center;
}
.title-modal {
  margin-left: 15px;
}
.list-icon-left-modal i:hover,
.list-icon-right svg:hover {
  background-color: #1a1919;
  border-color: #fff;
}
.modal-title {
  position: relative;
  left: 3em;
  bottom: 220px;
  align-items: center;
  width: auto;
  display: flex;
}
.btn-modal {
  position: relative;
  left: 3em;
  bottom: 200px;
  align-items: center;
  width: 400px;
  display: flex;
}
.button {
  border: none;
  background: rgba(78, 78, 78, 0.562);
  color: #e9e9e9;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.5s;
  border-radius: 4px;
}
.button:hover {
  border: none;
  cursor: pointer;
  background: rgba(78, 78, 78, 0.2);
  color: #fff;
}
.button span {
  padding-left: 10px;
}
#buttonPlay {
  width: 130px;
  height: 44px;
  margin-right: 20px;
  background-color: #fff;
  color: black;
}

.close-icon {
  position: absolute;
  top: 15px;
  font-size: 30px;
  right: 5px;
  color: rgba(180, 179, 179, 0.432);
  z-index: 1;
  cursor: pointer;
}
.close-icon i {
  position: absolute;
}
.vue-neat-modal--fullscreen .card {
  border-radius: 0;
}
.body.vue-neat-modal-open {
  overflow: unset !important;
}
.modal-container {
  position: relative;
  top: 0;
  transform: translateX(0px) translateY(calc(24px + 2em)) scaleX(1) scaleY(1)
    translateZ(0px);
  color: #fff;
  background-color: transparent;
  font-size: 16px;
  z-index: 2;
  height: 800px;
  border-radius: 6px;
  overflow: scroll;
  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  scroll-behavior: smooth;
}
.card {
  background-color: #212529;
  border-radius: 6px;
  height: auto;
  width: 750px;
}

.img-modal {
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: linear-gradient(to bottom, #000, #0003 70%, #0000);
  height: 440px;
}
.card h1 {
  margin-top: 0;
}
.vue-neat-modal {
  margin: 50% !important;
  overflow-y: unset !important;
}
</style>