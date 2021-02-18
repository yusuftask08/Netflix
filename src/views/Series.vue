<template>
  <div>
    <backgroundSeries />
    <myList />
    <diziler />
    <topTenSeries />
    <onerilenDiziler />
    <onerilenBreaking />
    <netflix />
    <footers />
  </div>
</template>
<script>
import diziler from "@/components/series/diziler";
import backgroundSeries from "@/components/series/backgroundSeries";
import myList from "@/components/series/myList";
import topTenSeries from "@/components/series/topTenSeries";
import onerilenDiziler from "@/components/series/onerilenDiziler";
import onerilenBreaking from "@/components/series/onerilenBreaking";
import netflix from "@/components/series/netflix";
import footers from "@/components/footer/footers.vue";

export default {
  components: {
    diziler,
    backgroundSeries,
    myList,
    topTenSeries,
    onerilenDiziler,
    onerilenBreaking,
    netflix,
    footers,
  },
};
</script>
