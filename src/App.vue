<template>
  	<div class="home">
            <keep-alive>
                <transition :name="transitionName">
                    <router-view></router-view>
                </transition>
            </keep-alive>

            <v-footer></v-footer>
    </div>
</template>

<script>
	import Footer from './components/Footer.vue'

	export default {
        data(){
            return {
                transitionName:''
            }
        },
        components:{
            'v-footer':Footer
        },
        watch: {
            '$route' (to, from){
                const toDepth = to.path.substring(0, to.path.length-2).split('/').length
                const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
            }
        },
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
    /* 跳转页面动画 */  
        .slide-enter,  
        .slide_back-enter {  
            position: absolute;  
            width: 100%;  
        }  
        .slide-leave,  
        .slide_back-leave {  
            position: absolute;  
            width: 100%;  
        }  
        .slide-enter-active,  
        .slide_back-enter-active {  
            transition: all 0.25s linear; 
        }  
        .slide-leave-active {  
            position: absolute;  
            transition: all 0.25s linear;  
            transform: translate(-100%);  
            opacity: 0;
        }  
        .slide-enter{  
            transform: translateX(100%); 
            opacity: 1; 
        }  
        .slide_back-leave-active {  
            position: absolute;  
            transition: all 0.25s linear;  
            transform: translate(100%);  
        }  
        .slide_back-enter {  
            transform: translateX(-100%);  
        } 
</style>
