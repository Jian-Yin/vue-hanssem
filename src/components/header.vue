<template>
	<header class="header">
		<div class="header-container">
			<div class="header-left" @click="openSidebar">
				<i class="icon icon-menu"></i>
			</div>
			<div class="header-logo">
				<i class="icon logo-mbheader"></i>
			</div>
			<div class="header-right" @click="openSearch">
				<i class="icon icon-search-m"></i>
			</div>			
		</div>
		<transition name="sidebar">
			<header-sidebar v-show="showSidebar" :showSidebar="showSidebar" @closeSidebar="closeSidebar"></header-sidebar>
		</transition>
		<transition name="search">
			<header-search v-show="showSearch" :showSearch="showSearch" @closeSearch="closeSearch"></header-search>
		</transition>
	</header>
</template>

<script>
import headerSidebar from './header-sidebar'
import headerSearch from './header-search'
export default {
	data(){
		return{
			showSidebar: false,
			showSearch: false,
		}
	},
	components: {
		headerSidebar,
		headerSearch,
	},
	methods: {
		fullScreen(setting){
			let html = document.getElementsByTagName('html')[0],
				body = document.getElementsByTagName('body')[0],
				overflow = setting ? 'hidden' : '',
				height = setting ? '100%' : '';
			html.style.overflow = overflow;
			html.style.height = height;
			body.style.overflow = overflow;
			body.style.height = height;
			document[setting ? 'addEventListener' : 'removeEventListener']('touchmove', function(){
				event.preventDefault();
			}, false);
		},
		openSidebar(){
			this.showSidebar = true;
			this.fullScreen(true);
		},
		closeSidebar(){
			this.showSidebar = false;
			this.fullScreen(false);
		},
		openSearch(){
			this.showSearch = true;
			this.fullScreen(true);
		},
		closeSearch(){
			this.showSearch = false;
			this.fullScreen(false);
		},
	}
}
</script>

<style lang="scss">
.header{
	position: fixed;
	top: 0;left: 0;
	width: 100%;
	z-index: 100;
	background: #fff;
	& ~ section.container{
		padding-top: 50px;
	}
	.header-container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 12px;
		height: 50px;
		border-bottom: 1px solid #ccc;		
	}
}
.sidebar-enter-active, .sidebar-leave-active {
  	transition: transform .5s;
}
.sidebar-enter, .sidebar-leave-active {
  	transform: translateX(-100%);
}
.search-enter-active, .search-leave-active {
  	transition: opacity .5s;
}
.search-enter, .search-leave-active {
  	opacity: 0;
}
</style>