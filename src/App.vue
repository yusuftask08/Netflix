<template>
<div>
    <navBar />
    <router-view></router-view>

</div>
</template>

<script>
import navBar from "@/components/Home/navBar";
import backgroundMovie from "@/components/Home/backgroundMovie";
export default {
    components: {
        navBar,
        backgroundMovie,
    },
  
};
</script>
