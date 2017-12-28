<!-- The ref attr used to find the swiper instance -->
<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(slide, index) in slideList" :key="index">
	        	<!-- <a :href="slide.url"><img :src="slide.imgSrc"></a> -->
	        	<router-link :to="'/pdp/' + slide.goodsId"><img :src="slide.imgSrc"></router-link>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
    props: {
    	slideList: {
			type: Array,
			default: []
    	}
    },
    watch: {
    	slideList(newSlideList) {
			if(newSlideList.length){
				this.$nextTick(() => {
					if(!this.swiper){
						this.swiper = new Swiper(this.$el, {
							autoplay: true,
							loop : true,
							pagination: {
								el: '.swiper-pagination',
								clickable :true,
							},
						})
					}else{
						this.swiper.update();
					}
				})
			}
    	}
    }
}
</script>

<style lang="scss" scoped>
.swiper-container{
	padding-bottom: 36px;
	.swiper-wrapper{
		.swiper-slide{
			a{
				display: block;
				img{
					width: 100%;
				}
			}
		}
	}
	.swiper-pagination{
		bottom: 14px;
		font-size: 0;
		.swiper-pagination-bullet{
			&.swiper-pagination-bullet-active{
				background: #AA2A29;
			}
		}
	}
}
</style>