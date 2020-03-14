import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {Main} from './src/components/main'
import {MainContainer} from './src/containers'
// import SaveNum from './src/saveNum'
// import Counter from './src/counter'


const navigator = createStackNavigator(
    {
      First: {
        screen: MainContainer,
      },
    },{
      defaultNavigationOptions: {
        headerShown : false
      },
    }
  );
export default createAppContainer(navigator)




