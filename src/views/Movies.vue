<template>
  <div>
    <navBar />
    <backgroundFilm />
      <myList />
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
import myList from "@/components/series/myList";

export default {
  components: {
    footers,
    backgroundFilm,
    sliderHome,
    sliderHomeTwo,
    sliderHomeThree,
    sliderHomeFour,
    myList,
  },
};
</script>