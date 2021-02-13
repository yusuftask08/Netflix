<template>
<navBar />
<movieList />
<footers />
</template>
<script>
import movieList from "@/components/Home/movieList";
import navBar from "@/components/Home/navBar";
import footers from '@/components/footer/footers.vue';
export default {
    components : {
        movieList ,
        navBar,
        footers
        
    }
}
</script>
<style>

</style>

