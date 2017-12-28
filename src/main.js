import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'

Vue.config.productionTip = false

Vue.use(VueRouter);
let router = new VueRouter({
	mode: 'history',
	routes: routes
})

new Vue({
    router
}).$mount('#app')
