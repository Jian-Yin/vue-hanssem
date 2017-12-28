<!-- The ref attr used to find the swiper instance -->
<template>
	<div>
		<div class="swiper-container swiper-title" ref="swiperTitle">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(slide, index) in product" :key="index">
		        	<span>{{ slide.classify }}</span>
		        </div>
		    </div>
		</div>
		<div class="swiper-container swiper-product" ref="swiperProduct">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(group, index) in product" :key="index">
					<div class="swiper-container swiper-product-group" ref="swiperChild">
					    <div class="swiper-wrapper">
					        <div class="swiper-slide" v-for="(item, index) in group.productList" :key="index">
					        	<a :href="item.url"><img :src="item.imgSrc"></a>
					        </div>
					    </div>
					</div>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
    props: {
    	product: {
			type: Array,
			default: []
    	}
    },
    watch: {
    	product(newProduct) {
			if(newProduct.length){
				this.$nextTick(() => {
					if(!this.swiperTitle){
						this.swiperTitle = new Swiper(this.$refs.swiperTitle, {
							slidesPerView: 'auto',
							normalizeSlideIndex: false,
							slideToClickedSlide: true,
							resistanceRatio : 0,
						})
					}
					if(!this.swiperProduct){
						this.swiperProduct = new Swiper(this.$refs.swiperProduct, {
							slidesPerView: 'auto',
						})
					}
					if(!this.swiperChild){
						this.swiperChild = [];
						this.$refs.swiperChild.forEach((el, index) => {
							this.swiperChild[index] = new Swiper(el, {
								nested:true,
								resistanceRatio : 0,
							})
						});
					}
					// swiperTitle 和 swiperProduct 的双向控制
					let swiperTitle = this.swiperTitle,
						swiperProduct = this.swiperProduct;
					this.swiperTitle.on("slideChange", function(){
						swiperProduct.slideTo(this.activeIndex, 0, false);
					});
					this.swiperProduct.on("slideChange", function(){
						swiperTitle.slideTo(this.activeIndex, 0, false);
					});
				})
			}
    	}
    }
}
</script>

<style lang="scss" scoped>
.swiper-title{
	border-bottom: 1px solid #e6e6e6;
	.swiper-wrapper{
		.swiper-slide{
			padding: 6px 26px;
			width: auto;
			border-bottom: 2px solid transparent;
			&.swiper-slide-active{
				border-color: #AA2A29;
			}
		}
	}
}
.swiper-product{
	.swiper-wrapper{
		.swiper-slide{
		}
	}
}
.swiper-product-group{
	.swiper-wrapper{
		.swiper-slide{
			>a{
				display: block;
				img{
					width: 100%;
				}
			}
		}
	}
}
</style>