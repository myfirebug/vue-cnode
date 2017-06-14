<template>
	<footer class="footer ui-border-t">
		<ul class="foot-nav">
			<li class="foot-nav-item" :class="{on: list.path == $route.path}" v-for="list in lists">
				<router-link :to="list.path">
					<i class="iconfont" :class="[list.icon]"></i>
					{{list.title}}
				</router-link>
			</li>
		</ul>
	</footer>
</template>
<script>
	export default{
		data(){
			return{
				lists:[
					{
						title:'首页',
						path:'/topics/all',
						icon:'icon-home'
					},
					{
						title:'发表',
						path:'/creat',
						icon:'icon-17'
					},
					{
						title:'我的',
						path:'/my',
						icon:'icon-my'
					}
				]
			}
		}
	};
</script>
<style>
	
</style>