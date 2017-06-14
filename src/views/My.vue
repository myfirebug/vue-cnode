<template>
	<section class="main my">
		<v-header title="我" :left="false">
		</v-header>
		<div class="my-header">
			<div class="user-avatar">
							
			</div>
			<p class="user-name">hejianping</p>
		</div>
		<div class="ui-cells ui-border-t">
			<a class="ui-cell ui-cell-arrow ui-border-b">
				<div class="ui-cell-bd">
					<i class="iconfont icon-17"></i>发表主题
				</div>
				<div class="ui-cell-ft"></div>
			</a>
			<a class="ui-cell ui-cell-arrow ui-border-b">
				<div class="ui-cell-bd">
					<i class="iconfont icon-xiaoxi"></i>我的消息
				</div>
				<div class="ui-cell-ft"></div>
			</a>
			<a class="ui-cell ui-cell-arrow ui-border-b">
				<div class="ui-cell-bd">
					<i class="iconfont icon-guanyu"></i>关于本站
				</div>
				<div class="ui-cell-ft"></div>
			</a>
		</div>
	</section>
</template>
<script>
	import Api from '../api/index.js'
	import Header from '../components/Header.vue'
	export default {
		components:{
			'v-header': Header
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/scss/my.scss';
</style>