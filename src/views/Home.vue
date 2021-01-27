<template>
  <div>
    <backgroundMovie />
    <movieList />
    <sliderHome />
    <sliderHomeTwo />
    <sliderHomeThree />
    <sliderHomeFour />
    <sliderHomeFive />
  </div>
</template>

 
<script>
import backgroundMovie from "@/components/backgroundMovie";
import movieList from "@/components/movieList";
import sliderHome from "@/components/sliderHome";
import sliderHomeTwo from '@/components/sliderHomeTwo';
import sliderHomeThree from '@/components/sliderHomeThree.vue';
import sliderHomeFour from '@/components/sliderHomeFour.vue';
import sliderHomeFive from '@/components/sliderHomeFive.vue';



export default {
  components: {
    backgroundMovie,
    movieList,
    sliderHome,
    sliderHomeTwo,
    sliderHomeThree,
    sliderHomeFour,
    sliderHomeFive
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