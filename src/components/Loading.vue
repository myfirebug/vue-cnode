<template>
	<div class="ui-loading ui-loading-wrapper" v-if="show">
		<div class="ui-loading ui-loading-one"></div>
		<div class="ui-loading-text">{{text}}</div>
	</div>
</template>
<script>
	export default {
	  props:{
	  	text:{
	  		type:String,
	  		default:'loading...'
	  	},
	    show:{
	    	type:Boolean,
	    	default:false
	    }
	  }
	}
</script>
<style lang="scss">
	 @import '../assets/scss/component/loading.scss';
	 .ui-loading-wrapper{
	 	position:absolute;
	 	left:50%;
	 	top:50%;
	 	z-index:99999;
	 	transform:translate(-50%,-50%);
	 	padding:.2rem;
	 	border-radius:.06rem;
	 	background:rgba(0,0,0,.6);
	 }
</style>