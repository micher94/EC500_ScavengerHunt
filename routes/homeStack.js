// JavaScript source code
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Map from '../screens/mapdetails';
import Coupons from '../screens/couponlist';
import Coupon from '../screens/coupon'

// leveraged from https://www.youtube.com/watch?v=cS4PgI3zBzY&feature=emb_rel_end 

const screens = {
    Home: {
        screen: Home
    },
    Coupons: {
        screen: Coupons
    },
    Map: {
        screen: Map
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);