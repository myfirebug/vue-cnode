<template>
	<header class="header">
		<div class="nav">
			<ul class="js_nav">
				<li class="nav-item" @click="scrollTop" :class="{ on : $route.params.tab == 'all' }">
					<router-link to="/topics/all">全部</router-link>
				</li>
				<li class="nav-item" @click="scrollTop" :class="{ on : $route.params.tab == 'good' }">
					<router-link to="/topics/good">精华</router-link>
				</li>
				<li class="nav-item" @click="scrollTop" :class="{ on : $route.params.tab == 'share' }">
					<router-link to="/topics/share">分享</router-link>
				</li>
				<li class="nav-item" @click="scrollTop" :class="{ on : $route.params.tab == 'ask' }">
					<router-link to="/topics/ask">问答</router-link>
				</li>
				<li class="nav-item" @click="scrollTop" :class="{ on : $route.params.tab == 'job' }">
					<router-link to="/topics/job">招聘</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>
<script>
	export default{
		methods:{
			scrollTop(){
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			}
		}
	}
</script>