<template >
  <Modal modal-transition="scale">
    <template #default="{ close }">
      <div class="modal-container">
        <div class="card">
          <div class="img-modal">
            <i @click="close" class="far fa-times-circle close-icon"></i>

            <div class="images-modal">
              <img
                :src="
                  'http://image.tmdb.org/t/p/w500/' + modalData.backdrop_path
                "
                class="card-img-top img-gradient"
                alt="..."
                style="position: relative"
              />

              <YouTube v-for="item in modalId.videos.results[0].key" :key="item.id"
                :src="
                  'www.youtube.com/watch?v=' + item
                "
                @ready="onReady"
                ref="youtube"
              />

              <div class="d"></div>
            </div>
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
            <div
              class="row"
              style="margin-left: 0px !important; margin-top: 15px"
            >
              <div class="col-sm">
                <div class="puan">
                  <span class="Pborder">{{ modalData.vote_average }}</span>
                  <div class="date">
                    <span style="margin-left: 5px">{{
                      modalId.release_date
                    }}</span>
                  </div>
                </div>

                <div class="tagline">
                  <span> {{ modalId.tagline }} </span>
                
                </div>
              </div>
              <div class="col-sm">
                <div class="col-sm-right">
                  <div class="genres">
                    <span style="color: #777">Türler: </span>
                    <div v-for="item in modalId.genres" :key="item.id">
                      <p
                        class="genres-text"
                        style="margin-left: 5px; align-items: center"
                      >
                        {{ item.name }}
                      </p>
                    </div>
                  </div>
                  <div class="cast">
                    <span style="color: #777">Oyuncular: </span>
                    <span>
                      {{ modalId.credits.cast[0].name }},
                      {{ modalId.credits.cast[1].name }}</span
                    >
                  </div>
                  <div class="original-dil">
                    <span style="color: #777">Orijinal Dil: </span>
                    <span
                      class="Pborder"
                      style="margin-left: 5px; text-transform: uppercase"
                    >
                      {{ modalId.original_language }}</span
                    >
                  </div>
                  <div class="director">
                    <span style="color: #777">Yönetmen: </span>
                    <span class="Pborder" style="margin-left: 5px">
                      {{ modalId.credits.crew[1].name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="benzer-span"><span> Benzerleri</span></div>
            <div class="container-modal-mini">
              <div class="mini-modal-cart row">
                <div
                  class="benzerleri col-6 col-sm-6"
                  v-for="item in modalId.similar.results"
                  :key="item.id"
                >
                  <div class="img-container">
                    <img
                      :src="
                        'http://image.tmdb.org/t/p/w500/' + item.backdrop_path
                      "
                    />

                    <div class="content">
                      <div class="story">
                        <div class="title-mini-modal">
                          <span> {{ item.original_title }} </span>
                        </div>

                        <div class="date-mini-modal">
                          <span
                            class="Pborder"
                            style="color: rgb(204, 203, 203)"
                          >
                            {{ item.vote_average }}</span
                          >
                          <span
                            style="margin-left: 15px; color:   color: rgb(204, 203, 203);
"
                            >{{ item.release_date }}</span
                          >
                          <span
                            class="Pborder"
                            style="margin-left: 15px; color: rgb(204, 203, 203)"
                          >
                            {{ item.original_language }}</span
                          >
                        </div>
                        <p>
                          <!-- {{ item.overview }} -->
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>
 
  <script>
import { Modal } from "vue-neat-modal";
import diziler from "@/components/series/diziler";
import { defineComponent } from "vue";
import YouTube from "vue3-youtube";
import axios from "axios";
export default {
  components: {
    Modal,
    diziler,
    YouTube,
    defineComponent,
  },
  props: {
    modalData: {
      type: Object,
      required: true,
    },
    modalId: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalTransition: "scale",
      isOpen: false,
      titleTrailer: null,
    };
  },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
  },
};
</script> 

<style>
.date-mini-modal {
  position: absolute;
  bottom: 0;
  margin-bottom: 3px;
}
.title-mini-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(204, 203, 203);
}
/* minicardcss */
.img-container {
  position: relative;
  width: 100%;
}
.container-modal-mini {
  display: flex;
  margin-left: 15px;
  align-items: flex-start;
}
.img-container img {
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: fill;
}

.content {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 15px 20px 20px;
}

.story {
  text-align: center;
  margin-right: auto;
  margin-bottom: 12px;
}

.story span {
  color: #fff;
  text-transform: uppercase;
}

.story p {
  font-size: 14px;
  margin-top: 5px;
}

/* minicardcss */
.benzerleri {
  width: 240px;
  height: 130;
  background: #2f2f2f;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  margin-right: 8px;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.benzer-span {
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 48px;
}
.tagline {
  margin-top: 10px;
  display: flex;
}
.tagline span {
  justify-content: flex-start;
}
.date {
  white-space: nowrap;
  margin-left: 5px;
}
.cast {
  margin-bottom: 5px;
  justify-content: flex-start;
  display: flex;
}
.original-dil {
  margin-bottom: 5px;
  margin-right: auto;
}
.director {
  margin-right: auto;
}
.puan {
  width: 30px;
  text-align: center;
  justify-content: space-between;
  display: flex;
}
.col-sm-right {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.genres {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px !important;
}
.genres-text {
  margin-left: 2px;
  bottom: 0;
  align-items: center;
  justify-content: center;
  margin: 0px !important;
  padding-left: 5px;
}
.detail-container {
  padding: 0 3em;
  text-align: center;
  background: #181818;
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
  font-size: 16px;
  z-index: 2;
  height: 800px;
  border-radius: 6px;
  overflow: scroll;
  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  width: 850px;
}
.card {
  background-color: #212529;
  border-radius: 6px;
  height: auto;
}

.img-modal {
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  height: 440px;
  opacity: 1;
}
.images-modal {
  top: 0;
  height: 100%;
  width: 100%;
  position: relative;
}
.images-modal:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 55%;
  bottom: 0;
  background: -webkit-linear-gradient(to top, #181818, transparent 50%);
  background: linear-gradient(to top, #181818, transparent 50%);
}

.images-modal img {
  width: 100%;
  height: 100%;
  opacity: 1;
  position: relative;
}
.images-bla {
  position: relative;
}
.card h1 {
  margin-top: 0;
}
.vue-neat-modal {
  margin: 50% !important;
  overflow-y: unset !important;
}
</style>