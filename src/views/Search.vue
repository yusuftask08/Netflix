<template>
  <navBar />
  <movieList />
  <footers />
</template>
<script>
import movieList from "@/components/Home/movieList";
import footers from "@/components/footer/footers.vue";
export default {
  components: {
    movieList,
    footers,
  },
};
</script>
<style>
</style>

