<template>
	<div class="reply-wrapper">
		<form action="">
			<div class="textarea ui-border-radius">
				<textarea :placeholder="loginname ? '@'+loginname : '发表你的看法...'"></textarea>
			</div>
			<div class="reply-btn"><a href="javascript:;">{{btnname}}</a></div>
		</form>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				btnname:'回复',
				content:''
			}
		},
		props:{
			replayId:{
				type:String,
				default:''
			},
			loginname:{
				type:String,
				default:''
			}
		}
	}
</script>
<style lang="scss">
	
</style>