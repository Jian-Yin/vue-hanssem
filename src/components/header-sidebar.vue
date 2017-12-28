<template>
	<div class="header-sidebar">
		<div class="sidebar-tit">
			<a class="sidebar-close" @click="closeSidebar()"><i class="icon icon-arrow-left"></i></a>
			<div class="sidebar-myaccount">
				<i class="icon icon-myaccount"></i>
				<span>您好，金汉森</span>
			</div>
		</div>
		<div class="scroll-wrap" ref="sidebarIScroll">
			<ul class="scroll-container">
				<li v-for="(item, index) in sidebarList" :key="index"><a :href="item.url">{{ item.title }}</a><i class="icon icon-arrow-r"></i></li>
			</ul>
		</div>
		<div class="sidebar-bottom">
			<ul>
				<li><a>帮助中心</a></li>
				<li><a>关于汉森</a></li>
				<li><a>商场指南</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import IScroll from 'iscroll'
export default {
	created(){
		axios.get('/static/common/sidebar-list.json')
		  .then((res) => {
		  	this.sidebarList = res.data;
		  });
	},
	mounted(){
	},
	data(){
		return{
			sidebarList: [],
		}
	},
	props: {
		showSidebar: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		showSidebar(show){
			if(show && !this.sidebarIScroll){
				this.sidebarIScroll = new IScroll(this.$refs.sidebarIScroll, {
					mouseWheel: true,
					preventDefaultException: {
						tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|DIV|SPAN|IMG|P|I|LABEL)$/
					}
				});
			}
		}
	},
	methods: {
		closeSidebar(){
			this.$emit('closeSidebar');
		}
	}
}
</script>

<style lang="scss">
.header-sidebar{
	position: fixed;
	top: 0;left: 0;
	z-index: 10;
	padding: 50px 0 40px;
	width: 100%;
	height: 100%;
	background: #fff;
	.sidebar-tit{
		position: absolute;
		top: 0;left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 0 10px;
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ccc;
		background: #fff;
		.sidebar-close{
			padding: 10px;
		}
		.sidebar-myaccount{
			.icon,span{
				vertical-align: middle;
			}
		}
	}
	.scroll-wrap{
		height: 100%;
		background: #F7F7F7;
		overflow: hidden;
		.scroll-container{
			background: #fff;
			li{
				position: relative;
				border-bottom: 1px solid #e6e6e6;
				a{
					display: block;
					padding: 15px 20px;
					color: #333;
				}
				.icon{
					position: absolute;
					top: 15px;
					right: 20px;
				}
			}				
		}

	}
	.sidebar-bottom{
		position: absolute;
		bottom: 0;left: 0;
		width: 100%;
		background: #fff;
		ul{
			display: flex;
			align-items: center;
			height: 40px;
			border-top: 1px solid #ccc;
			line-height: 40px;
			list-style: none;
			text-align: center;
			li{
				flex-grow: 1;
				&:not(:last-of-type){
					a{
						position: relative;
						&:after{
							display: block;
							position: absolute;
							top: 50%;right: 0;
							margin: -8px 0 0;
							width: 1px;
							height: 16px;
							content: '';
							background: #e6e6e6;
						}
					}
				}
				a{
					display: block;
					color: #333;
				}
			}
		}
	}
}
</style>