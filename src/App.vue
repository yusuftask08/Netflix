<template>
<div>
    <navBar />
    <router-view></router-view>

</div>
</template>

<script>
import navBar from "@/components/navBar";
import backgroundMovie from "@/components/backgroundMovie";
export default {
    components: {
        navBar,
        backgroundMovie,
    },
  
};
</script>
