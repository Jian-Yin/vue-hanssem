<template>
	<div>
		<header-top></header-top>
		<section class="container">
			<h3>pdp</h3>
			<p v-if="this.$route.params.goodsId">goodsId: {{ this.$route.params.goodsId }}</p>
			<ul>
				<li><router-link to="/home">index</router-link></li>
				<li><router-link to="/myaccount">myaccount</router-link></li>
				<li><router-link to="/plp">plp</router-link></li>
				<li><router-link to="/shopcart">shopcart</router-link></li>
			</ul>
		</section>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import headerTop from '../../components/header'
import footerBottom from '../../components/footer'
export default {
	components: {
		headerTop,
		footerBottom
	}
}
</script>

<style lang='scss' scoped>
	.container{
		text-align: center;
		h3{
			padding: 20px;
		}
		ul{
			li{
				padding: 10px;
			}
		}
	}
</style>
