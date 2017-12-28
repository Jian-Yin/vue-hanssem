import App from '../App';
import home from '../page/home/home'
import pdp from '../page/pdp/pdp'
import plp from '../page/plp/plp'
import myaccount from '../page/myaccount/myaccount'
import shopcart from '../page/shopcart/shopcart'

export default [{
	path: '/',
	component: App,
	children: [
		{
	        path: '',
	        redirect: '/home'
		},
	    {
	        path: '/home',
	        component: home
	    },
	    {
	        path: '/pdp',
	        component: pdp
	    },
	    {
	        path: '/pdp/:goodsId',
	        component: pdp
	    },
	    {
	        path: '/plp',
	        component: plp
	    },
	    {
	        path: '/myaccount',
	        component: myaccount
	    },
	    {
	        path: '/shopcart',
	        component: shopcart
	    }
    ]
}]