<template>
  <div>
    <nav class="container-fluid flex-row">
      <nav
        class="navbar navbar-expand-xxl navbar-dark navbar-linear"
        :class="{ change_color: windowTop > 50 }"
        style="position: fixed"
      >
        <div class="container-fluid">
          <a
            href="/"
            style="margin-right: 20px; margin-left: 50px"
          >
            <img
              src="https://i.ibb.co/r5krrdz/logo.png"
              alt="netflix-font"
              style="width:120px"
            />
          </a>
          <navBarItem />
          <secondItem />
        </div>
      </nav>
    </nav>
  </div>
</template>


<script>
import secondItem from "@/components/Home/secondItem";
import navBarItem from "@/components/Home/navBarItem";

export default {
  components: {
    secondItem,
    navBarItem,
  },
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop; // scrool bar takip ediyorum ve 0 a bağlıyorum
    },
  },
};
</script>
<style >
/* scrool bar hareket ettiğinde navbarın arka planını değiştiriyorum  */
.change_color {
  background-color: rgb(20, 20, 20) !important;
}
</style>
