<template>
  <Modal modal-transition="slide-down" v-model="isOpen"  max-width="500px">
    <template #default="{ close }">
      <div class="container--card">
        <div class="-card">
          <div class="-card-img">
            <img
              class="-image"
              src="https://occ-0-778-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYVZbqz_uitE0A1OmhKLo3WWuKlxVcPkV9Iaa2jtC-3OBvD1S8h27ov27K2A5e1Gvpt8TYTMPIroq_UtCn28Ho8rIxg.webp?r=eab"
            />
          </div>

          <div class="-card-bottom">
            <div class="-list-icon">
              <div class="-list-icon-left">
                <i class="fas fa-play"></i>
                <i class="fas fa-plus"></i>
                <i class="far fa-thumbs-up"></i>
                <i class="far fa-thumbs-down"></i>
              </div>
              <div class="-list-icon-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>

            <div class="video-data">
              <span class="video-data-score">98% Match</span>
              <span class="video-data-maturity">18+</span>
              <span class="video-data-seasons">6 seasons</span>
            </div>

            <div class="preview-modal">
              <ul>
                <li>Violent</li>
                <li>Exeiting</li>
                <li>Epic</li>
              </ul>
            </div>
          </div>
        </div>

        <button @click="close">Close</button>
      </div>
    </template>
  </Modal>
</template>
 
  <script>
import { Modal } from "vue-neat-modal";

export default {
  components: { Modal },
  data() {
    return {
      isOpen: false,
      modalTransition: "scale",
    };
  },
};
</script> 

<style>
.container--card {
  position: relative;
  padding: 100px;
}
.-card {
  display: inline-block;
  width: 350px;
  margin-left: 50px;
  position: relative;
  background-color: #181818;
  transition: transform 1s;
  overflow: hidden;
}


.-card .-card-img {
  position: relative;
  width: auto;
  height: auto;
}
.-card .-card-img img {
  width: 350px;
  height: 180px;
}

.-card-bottom {
  padding: 15px 12px;
  transition: transform 1s;
}
.-list-icon {
  display: flex;
  justify-content: space-between;
}

.-list-icon-left i,
.-list-icon-right svg {
  text-align: center;
  padding: 12px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 4px;
  color: #dbdbdb;
  cursor: pointer;
}
.-list-icon-left i:hover,
.-list-icon-right svg:hover {
  background-color: #2a2a2a;
}
.-list-icon-left i:last-of-type,
.-list-icon-right svg {
  margin-right: 0px;
}

.video-data {
  color: #dbdbdb;
  padding: 20px 0px;
  font-weight: 700 !important;
}
.video-data span {
  margin-right: 3px;
}
.video-data-score {
  color: #46d369;
}
.video-data-maturity {
  border: 1px solid #f0f0f0;
  padding: 1px 5px;
}

.preview-modal {
  color: #dbdbdb;
  margin-bottom: 8px;
}
.preview-modal ul {
  margin: 0 !important;
  padding: 0;
  list-style: none;
}
.preview-modal ul li {
  display: inline-block;
  position: relative;
  margin: 0px 12px 0px 0px;
}
.preview-modal ul li:before {
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  background: #fff;
  border-radius: 50%;
  top: 50%;
  left: -20px;
  transform: translate(8px, -50%);
}
.preview-modal ul li:first-of-type:before {
  display: none;
}
</style>