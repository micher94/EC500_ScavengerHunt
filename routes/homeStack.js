import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Mapdetails from '../screens/mapdetails';
import Coupons from '../screens/couponlist';


// leveraged from https://www.youtube.com/watch?v=cS4PgI3zBzY&feature=emb_rel_end 

const screens = {
    Home: {
        screen: Home
    },
    Coupons: {
        screen: Coupons
    },
    Map: {
        screen: Mapdetails
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);