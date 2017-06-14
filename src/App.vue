<template>
  	<div class="home">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>

            <v-footer></v-footer>
    </div>
</template>

<script>
	import Footer from './components/Footer.vue'

	export default {
        components:{
            'v-footer':Footer
        }
    };
</script>

<style lang="scss">
    @import './assets/scss/common.scss';
    .pop{
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background:rgb(38, 162, 255);
        z-index:1000
    }
</style>
