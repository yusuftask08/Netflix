<template>
  <div>
    <div class="nextReleasesContainer">
      <div class="videoContainer">
        <video autoplay muted loop src="@/assets/video.mp4"></video>
      </div>

      <div class="containerReleases">
        <h1>Inside Bill's Brain: Decoding Bill Gataes</h1>
        <p>
          Bill Gates gelişmekte olan dünyaya daha iyi sıhhi tesisat
          sağlamayıamaçlayan ölüm kalım görevi hakkında konuşuyor. Gates'in kız
          kardeşleri çocukluk anılarını paylaşıyor.
        </p>
        <button id="buttonPlay">
          <i class="fas fa-play"></i>

          <span>Oynat</span>
        </button>
        <button @click="isOpen = !isOpen" id="buttonInfo">
          <i class="fas fa-info-circle"></i>
          <span> Daha Fazla Bilgi</span>
        </button>
      </div>
    </div>

    <modals v-model="isOpen" />
  </div>
</template>
<script>
import modals from "../modal/modals.vue";
export default {
  components: { modals },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style>
.videoContainer:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 55%;
  bottom: 0;
  background: -webkit-linear-gradient(to top, #181818, transparent 50%);
  background: linear-gradient(to top, #181818, transparent 50%);
}
</style>
