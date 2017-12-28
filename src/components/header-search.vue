<template>
	<div class="header-search">
		<div class="search-tit">
			<a class="search-close" @click="closeSearch()"><i class="icon icon-arrow-left"></i></a>
			<h3>搜索</h3>
		</div>
		<div class="scroll-wrap" ref="searchIScroll">
			<div class="scroll-container">
				<div class="search-input">
					<div class="form-input">
						<i class="icon icon-search"></i>
						<input type="text" placeholder="Search">
					</div>
				</div>
				<div class="search-recommend">
					<h4 class="recommend-tit">历史搜索</h4>
					<ul class="recommend-list">
						<li v-for="(item, index) in searchList.history" :key="index"><a :href="item.url">{{ item.text }}</a></li>
					</ul>
				</div>
				<div class="search-recommend">
					<h4 class="recommend-tit">热门搜索</h4>
					<ul class="recommend-list">
						<li v-for="(item, index) in searchList.hot" :key="index"><a :href="item.url">{{ item.text }}</a></li>
					</ul>
				</div>
				<div class="search-recommend">
					<h4 class="recommend-tit">热门搜索</h4>
					<ul class="recommend-list">
						<li v-for="(item, index) in searchList.hot" :key="index"><a :href="item.url">{{ item.text }}</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import IScroll from 'iscroll'
export default {
	created(){
		axios.get('/static/common/search-list.json')
		  .then((res) => {
		  	this.searchList = res.data;
		  });
	},
	mounted(){
	},
	data(){
		return{
			searchList: [],
		}
	},
	props: {
		showSearch: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		showSearch(show){
			if(show && !this.searchIScroll){
				this.searchIScroll = new IScroll(this.$refs.searchIScroll, {
					mouseWheel: true,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|DIV|SPAN|IMG|P|I|LABEL)$/
					}
				});
			}
		}
	},
	methods: {
		closeSearch(){
			this.$emit('closeSearch');
		}
	}
}
</script>

<style lang="scss">
.header-search{
	position: fixed;
	top: 0;left: 0;
	z-index: 10;
	padding: 50px 0 0;
	width: 100%;
	height: 100%;
	background: #fff;
	.search-tit{
		position: absolute;
		top: 0;left: 0;
		padding: 0 20px;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
		background: #fff;
		.search-close{
			position: absolute;
			top: 5px;
			left: 10px;
			padding: 10px;
		}
		h3{
			font-size: 16px;
			line-height: 49px;
			text-align: center;
		}
	}
	.scroll-wrap{
		height: 100%;
		background: #F7F7F7;
		overflow: hidden;
		.scroll-container{
			.search-input{
				padding: 12px;
				background: #fff;
				.form-input{
					position: relative;
					.icon{
						position: absolute;
						top: 8px;left: 10px;
					}
					input{
						padding: 9px 10px 9px 39px;
						width: 100%;
						height: 36px;
						border: 1px solid #ccc;
						font-family: inhert;
					}
				}
			}
			.search-recommend{
				margin: 6px 0 0;
				padding: 14px 12px 0;
				background: #fff;
				.recommend-tit{
					margin: 0 0 18px;
					font-size: 14px;
				}
				.recommend-list{
					font-size: 0;
					li{
						display: inline-block;
						margin: 0 14px 18px 0;
						a{
							display: block;
							padding: 7px 15px;
							font-size: 12px;
							color: #333;
							border: 1px solid #E6E6E6;
						}
					}
				}
			}			
		}
	}
}
</style>