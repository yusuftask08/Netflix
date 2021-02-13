<template>
  <div>
    <backgroundMovie />
    <movieList />
    <sliderHome />
    <sliderHomeTwo />
    <sliderHomeThree />
    <sliderHomeFour />
    <sliderHomeFive />
    <netflixOriginalContent />
    <diziler />
    <onerilenBreaking />
    <topTenSeries />
    <footers  />
  </div>
</template>

 
<script>
import backgroundMovie from "@/components/Home/backgroundMovie";
import movieList from "@/components/Home/movieList";
import sliderHome from "@/components/Home/sliderHome";
import sliderHomeTwo from '@/components/Home/sliderHomeTwo';
import sliderHomeThree from '@/components/Home/sliderHomeThree.vue';
import sliderHomeFour from '@/components/Home/sliderHomeFour.vue';
import sliderHomeFive from '@/components/Home/sliderHomeFive.vue';
import netflixOriginalContent from '@/components/Home/netflixOriginalContent.vue';
import diziler from '@/components/series/diziler.vue';
import onerilenBreaking from '@/components/series/onerilenBreaking.vue';
import topTenSeries from '@/components/series/topTenSeries.vue';
import footers from '@/components/footer/footers.vue';



export default {
  components: {
    backgroundMovie,
    movieList,
    sliderHome,
    sliderHomeTwo,
    sliderHomeThree,
    sliderHomeFour,
    sliderHomeFive,
    netflixOriginalContent,
    diziler,
    onerilenBreaking,
    topTenSeries,
    footers
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background-color: #141414;
  height: 100vh;
}
#app h4 {
  color: #e9e9e9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media only screen and (max-width: 599px) {
  #app h4 {
    font-size: 14px;
  }
}
</style>