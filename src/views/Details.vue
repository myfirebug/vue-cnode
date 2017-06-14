<template>
	<div class="detail">
		<v-header>
			<span slot="header-title"><span class="user-avatar"><img :src="details.author.avatar_url" alt=""></span><span class="user-name">{{details.author.loginname}}</span></span>
		</v-header>
		<v-loading v-if="!successFlag"></v-loading>
		
		<section class="main">
			<div class="article-header">
				<h1 class="article-title">{{details.title}}</h1>
				<div class="article-info">
					<span class="replies"><i class="iconfont icon-browse"></i>{{details.reply_count}}</span>
					<span class="visits"><i class="iconfont icon-huifu"></i>{{details.visit_count}}</span>
					<span class="last-active-time"><i class="iconfont icon-shijian"></i>{{details.last_reply_at | timeAgo}}</span>
				</div>
			</div>
			<div class="markdown-text"  v-html="contentHtml"></div>
		</section>
		<div class="comments ui-border-t">
			<div class="comments-header ui-border-b">
				<h2>共<span>{{this.details.replies.length}}</span>条回复</h2>
			</div>
			<div class="comments-body">
				<ul class="list" v-for="(replie,index) in details.replies">
					<li class="item ui-border-b">
						<div class="user-avatar">
							<img :src="replie.author.avatar_url" alt="">
						</div>
						<div class="item-body">
							<div class="user-info">
								<p class="user-name">{{replie.author.loginname}}</p>
								<p class="create-at">{{replie.last_reply_at | timeAgo}}</p>
							</div>
							<div class="markdown-text" v-html="replie.html"></div>
						</div>
						<div class="item-footer">
							<div class="operation">
								<span class="like"><i class="iconfont icon-good"></i>点赞({{replie.ups.length}})</span><span class="reply" @click="comShow(replie,index)"><i class="iconfont icon-fanhui"></i>回复</span>
							</div>
							<v-reply v-if="replie.flag" :loginname="replie.author.loginname" :replayId="replie.id"></v-reply>
						</div>
					</li>
				</ul>
			</div>
			<div class="comments-footer">
					<v-reply></v-reply>
			</div>
		</div>
	</div>
</template>
<script>
	import Api from '../api/index.js'
	import utils from '../utils/index.js'
	import Loading from '../components/Loading.vue'
	import Header from '../components/Header.vue'
	import Reply from '../components/Reply.vue'

	export default {
		data(){
			return {
				details:null,
				replies:[],
				successFlag: false
			}
		},
		computed:{
			contentHtml(){
	            return utils.mdToHtml(this.details.content)
	        },
	        accesstoken(){
	        	return this.$store.state.accesstoken;
	        }
		},
		filters:{
	        tab(val,top,good){
	            return utils.tab(val,top,good)
	        },
	        timeAgo(val){
	            return utils.timeAgo(val)
	        },
	        mdToHtml(val){
	            return utils.mdToHtml(val)
	        }
	    },
	    methods:{
	    	fetch(){
	    		Api.getTopic({
					'accesstoken': this.$route.params.topicId,
					'mdrender' : false 
				})
				.then((res)=>{
					this.details = res.data.data;
					console.log(this.details);
					this.successFlag = res.data.success;
					this.replies = this.details.replies;
					this.replies.forEach((item,index)=> {
						this.replies[index].html = utils.mdToHtml(item.content);
						this.replies[index].flag = false;
					});

					console.log(this.replies)
				})
				.catch((err)=>{
					this.$router.push({
						name:'topics'
					});
				});
	    	},
	    	comShow(item){
	    		alert(this.$store.state.accesstoken);
	    		if(!this.accesstoken){
	    			this.$router.push({
	    				name:'login'
	    			})
	    		};
	    	}
	    },
		created(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			this.fetch();
		},
		watch:{
			$route(){
				this.fetch();
			}
		},
		components:{
			'v-loading': Loading,
			'v-header': Header,
			'v-reply': Reply
		}
	}
</script>
<style lang="scss">
	@import '../assets/scss/details.scss';
</style>