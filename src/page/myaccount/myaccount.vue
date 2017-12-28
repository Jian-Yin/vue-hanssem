<template>
	<div>
		<header-top></header-top>
		<section class="container">
			<h3>myaccount</h3>
			<ul>
				<li><router-link to="/home">index</router-link></li>
				<li><router-link to="/pdp">pdp</router-link></li>
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
