<template>
	<div class="home">
		 <v-nav></v-nav>
		 {{$route.params.topicId}}
		<v-loading :show="!successFlag" text="加载中..."></v-loading>
		<section class="main">
			<ul class="list">
				<li class="item ui-border-b" v-for="list in lists" :key="list.id">
					<router-link :to="{name:'details',params:{topicId:list.id}}">
						<div class="item-hd">
							<div class="user-avatar">
								<img :src="list.author.avatar_url" alt="">
							</div>
							<div class="user-info">
								<p class="user-name">{{list.author.loginname}}</p>
								<p class="create-at">{{list.create_at | timeAgo}}</p>
							</div>
						</div>
						<div class="item-bd">
							<h2>
								<span v-if="list.top || list.good" class="put-top ui-border-radius">{{ list.tab | tab(list.top,list.good) }}</span>
								<span v-else class="topiclist-tab ui-border-radius">{{ list.tab | tab(list.top,list.good) }}</span>
								{{list.title}}
							</h2>
						</div>
						<div class="item-ft">
								<span class="replies ui-border-r"><i class="iconfont icon-browse"></i>{{list.reply_count}}</span>
								<span class="visits ui-border-r"><i class="iconfont icon-huifu"></i>{{list.visit_count}}</span>
								<span class="last-active-time"><i class="iconfont icon-shijian"></i>{{list.last_reply_at | timeAgo}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import Api from '../api/index.js'
	import utils from '../utils/index.js'
	import Loading from '../components/Loading.vue'
	import Nav from '../components/Nav.vue'

	export default {
		data(){
			return {
				lists: [],
				successFlag: false,
				flag:false,
				page: 1,
				limit: 15,
				mdrender: true,
				displayTop: false
			}
		},
		components:{
			'v-nav':Nav,
			'v-loading': Loading
		},
		created(){
			this.successFlag = true;
			this.fetch(this.page);
		},
		filters:{
			tab(val,top,good){
				return utils.tab(val,top,good);
			},
			timeAgo(val){
				return utils.timeAgo(val);
			}
		},
		methods:{
			fetch(page){
				Api.getTopics({
					tab: this.$route.params.tab || 'all',
					page: page,
					limit: this.limit,
					mdrender: this.mdrender
				})
				.then((res)=>{
					if(page == 1){
						this.lists = res.data.data;	
					}else{
						this.lists = this.lists.concat(res.data.data);
					}
					this.successFlag = res.data.success;
					this.flag = false;
				})
				.catch((err)=>{
					this.$router.push({
						name:'topics'
					});
				});
			},
			scroll(){
				if(this.flag) return;
				let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                let clientHeight = document.documentElement.clientHeight||document.body.clientHeight;
                if(scrollTop+clientHeight==scrollHeight){
                	this.successFlag = false;
                	this.flag = true;
                    this.fetch(++this.page);
                }
			}
		},
		watch: {
			$route(){
				this.page = 1;
				this.successFlag = false;
				this.fetch(this.page);
			}
		},
		mounted(){
			 window.addEventListener('scroll', this.scroll)
		}
	}
</script>
<style lang="scss">
	@import '../assets/scss/home.scss';
</style>