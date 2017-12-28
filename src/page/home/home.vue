<template>
	<div>
		<header-top></header-top>
		<section class="container">
			<kv-swiper :slideList="kvList"></kv-swiper>
			<div class="grey-line"></div>
			<article class="article article-nav">
				<ul class="nav-list">
					<li v-if="navShowAll||(index < 8)" v-for="(nav, index) in navList" :key="index">
						<a :href="nav.url"><i class="icon" :class="nav.icon"></i><span>{{ nav.desc }}</span></a>
					</li>
				</ul>
				<div class="nav-show-all" @click="navShowAll = navShowAll ? false : true;">
					<i :class="navShowAll?'icon-arrow-up':'icon-arrow-down'" class="icon"></i>
				</div>
			</article>
			<div class="grey-line"></div>
			<article class="article article-set">
				<div class="set-title">
					<h3><i class="icon icon-decorate-small"></i><span>装修施工套装</span></h3>
					<a href="www.baidu.con"><span>查看更多</span><i class="icon icon-arrow-right"></i></a>
				</div>
				<kv-swiper :slideList="decorate"></kv-swiper>
			</article>
			<div class="grey-line"></div>
			<article class="article article-set">
				<div class="set-title">
					<h3><i class="icon icon-kitchen-small"></i><span>厨房&浴室套装</span></h3>
					<a href="www.baidu.con"><span>查看更多</span><i class="icon icon-arrow-right"></i></a>
				</div>
				<banner-swiper :product="kitchen"></banner-swiper>
			</article>
			<div class="grey-line"></div>
			<article class="article article-set">
				<div class="set-title">
					<h3><i class="icon icon-sofa-small"></i><span>家具产品</span></h3>
					<a href="www.baidu.con"><span>查看更多</span><i class="icon icon-arrow-right"></i></a>
				</div>
				<product-swiper :product="sofa"></product-swiper>
			</article>
			<div class="grey-line"></div>
			<article class="article article-set">
				<div class="set-title">
					<h3><i class="icon icon-dailyuse-small"></i><span>生活用品</span></h3>
					<a href="www.baidu.con"><span>查看更多</span><i class="icon icon-arrow-right"></i></a>
				</div>
				<product-swiper :product="dailyuse"></product-swiper>
			</article>
			<div class="grey-line"></div>
			<article class="article article-store-guide">
				<a><img src="/static/home/store-guide.png"></a>
			</article>
			<div class="grey-line"></div>
		</section>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import axios from 'axios'
import headerTop from '../../components/header'
import footerBottom from '../../components/footer'
import kvSwiper from '../../components/kv-swiper'
import bannerSwiper from '../../components/banner-swiper'
import productSwiper from '../../components/product-swiper'
export default {
	created(){
		axios.get('/static/home/kv-list.json')
		  .then((res) => {
		  	this.kvList = res.data;
		  });
		axios.get('/static/home/nav-list.json')
		.then((res) => {
			this.navList = res.data;
		});
		axios.get('/static/home/decorate-list.json')
		.then((res) => {
			this.decorate = res.data;
		});
		axios.get('/static/home/kitchen-list.json')
		.then((res) => {
			this.kitchen = res.data;
		});
		axios.get('/static/home/sofa-list.json')
		.then((res) => {
			this.sofa = res.data;
		});
		axios.get('/static/home/dailyuse-list.json')
		.then((res) => {
			this.dailyuse = res.data;
		});
	},
	data(){
		return{
			kvList: [],
			navList: [],
			navShowAll: false,
			decorate: [],
			kitchen: [],
			sofa: [],
			dailyuse: [],
		}
	},
	components: {
		headerTop,
		kvSwiper,
		productSwiper,
		bannerSwiper,
		footerBottom
	},
	methods: {
	}
}
</script>

<style lang='scss' scoped>
	.grey-line{
		height: 6px;
		background: #F7F7F7;
	}
	.article-nav{
		position: relative;
		.nav-list{
			display: flex;
			flex-wrap: wrap;
			padding: 30px 12px;
			list-style: none;
			font-size: 0;
			li{
				width: 25%;
				a{
					display: block;
					padding: 10px 0;
					height: 90px;
					text-align: center;
					span{
						display: block;
						font-size: 14px;
						line-height: 36px;
						color: #999;
					}
				}
			}
		}
		.nav-show-all{
			position: absolute;
			bottom: 0;
			padding: 0 0 16px;
			width: 100%;
			line-height: 14px;
			text-align: center;
			.icon{
				vertical-align: middle;
			}
		}
	}
	.article-set{
		.set-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 12px;
			height: 60px;
			h3{
				font-size: 16px;
				span{
					margin: 0 0 0 12px;
				}
			}
			a{
				font-size: 12px;
				color: #666;
				span{
					margin: 0 7px 0 0;
				}
			}
			span,.icon{
				vertical-align: middle;
			}			
		}

	}
</style>
