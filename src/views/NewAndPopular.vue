<template>
  <div>
    <navBar style="position: fixed; z-index: 1000; top: 0; left: 0; right: 0" />
    <weekPopular />
    <sliderHomeFour />
     <weekPopularTv />
    <sliderHomeFive  />
    <dayPopularTv />
  </div>
</template>
<script>
import sliderHomeFive from "@/components/Home/sliderHomeFive";
import weekPopular from "@/components/NewPopular/weekPopular";
import weekPopularTv from "@/components/NewPopular/weekPopularTv";
import dayPopularTv from "@/components/NewPopular/dayPopularTv";
import sliderHomeFour from "@/components/Home/sliderHomeFour";

export default {
  components: {
    sliderHomeFive,
    weekPopular,
    weekPopularTv,
    dayPopularTv,
    sliderHomeFour,
  },
};
</script>
<style>
</style>