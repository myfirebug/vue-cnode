<template>
	<section class="main create">
		<v-header title="发表" :right="true">
			<span slot="header-l"><span class="creat-btn ui-border-radius">发表</span></span>
		</v-header>
		<form action="">
			<ul class="ui-cells">
				<li class="ui-cell ui-border-b">
					<input type="text" placeholder="标题">
				</li>
				<li class="ui-cell ui-border-b">
					<select placeholder="请选择">
						<option value="">精品</option>
						<option value="">问答</option>
						<option value="">招聘</option>
					</select>
				</li>
				<li class="ui-cell ui-border-b">
					<textarea placeholder="请输入内容"></textarea>
				</li>
			</ul>
		</form>
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
	@import '../assets/scss/creat.scss';
</style>