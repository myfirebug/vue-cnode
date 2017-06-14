<template>
	<section class="main create">
		<v-header title="登录" :right="true">
			<span slot="header-l"><span class="creat-btn ui-border-radius" @click="login">{{text}}</span></span>
		</v-header>
		<form action="">
			<ul class="ui-cells">
				<li class="ui-cell ui-border-b">
					<input type="text" placeholder="请输入Access Token" v-model="accesstoken">
				</li>
			</ul>
		</form>
	</section>
</template>
<script>
	import Api from '../api/index.js'
	import Header from '../components/Header.vue'
	export default {
		data(){
			return {
				accesstoken:'',
				text:'登录'
			}
		},
		methods:{
			login(){
				this.text="登录中...";
				Api.checkAccesstoken({
					'accesstoken':this.accesstoken
				})
				.then((res)=>{
					if(res.data.success){
						this.$store.commit('LOGININ',{
							accesstoken:this.accesstoken,
							loginname:res.data.loginname
						});
						this.$router.push({
							path:'/topics/all'
						});
					}else{
						alert('登录失败');
						this.text = "登录"
					}
				})
			}
		},
		components:{
			'v-header': Header
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/scss/creat.scss';
</style>