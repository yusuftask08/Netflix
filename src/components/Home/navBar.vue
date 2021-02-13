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
            href="https://fontmeme.com/netflix-font/"
            style="margin-right: 20px; margin-left: 60px"
          >
            <img
              src="https://fontmeme.com/permalink/210120/712ea9082fffc8db3ce43a79a7416286.png"
              alt="netflix-font"
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
