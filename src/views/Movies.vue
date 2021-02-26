<template>
  <div>
    <navBar />
    <backgroundFilm />
    <sliderHome />
    <sliderHomeThree />
    <sliderHomeFour />
    <sliderHomeTwo />
    <footers />
  </div>
</template>
<script>
import footers from "@/components/footer/footers";
import backgroundFilm from "@/components/filmler/backgroundFilm";
import sliderHome from "@/components/Home/sliderHome";
import sliderHomeTwo from "@/components/Home/sliderHomeTwo";
import sliderHomeThree from "@/components/Home/sliderHomeThree";
import sliderHomeFour from "@/components/Home/sliderHomeFour";

export default {
  components: {
    footers,
    backgroundFilm,
    sliderHome,
    sliderHomeTwo,
    sliderHomeThree,
    sliderHomeFour,
  },
};
</script>