<template>
	<header class="header">
		<div class="header-l" v-if="left" @click="$router.go(-1)"><span class="icon-left"></span></div>
		<div class="title">
			<slot name="header-title">
				{{title}}
			</slot>
		</div>
		<div class="header-r" v-if="right">
			<slot name="header-l"></slot>
		</div>
	</header>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		props:{
			left:{
				type:Boolean,
				default:true
			},
			title:{
				type:String,
				default:''
			},
			right: {
				type:Boolean,
				default:false
			}
		}
	}
</script>
<style>
	
</style>