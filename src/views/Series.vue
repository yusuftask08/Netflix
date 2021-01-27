<template>
  <div>
    <backgroundSeries />
    <myList />
    <diziler />
  </div>
</template>
<script>
import diziler from "@/components/series/diziler";
import backgroundSeries from "@/components/series/backgroundSeries";
import myList from "@/components/series/myList";

export default {
  components: {
    diziler,
    backgroundSeries,
    myList,
  },
};
</script>