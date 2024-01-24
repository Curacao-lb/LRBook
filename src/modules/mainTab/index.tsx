import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../home"
import { Image } from "react-native"

import icon_tab_home_selected from '@src/assets/icon_tab_home_selected.png'
import icon_tab_home_normal from '@src/assets/icon_tab_home_normal.png'

const BottomTab = createBottomTabNavigator()

export default () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let img;
            if (route.name === 'Home') {
              img = focused ? icon_tab_home_selected : icon_tab_home_normal;
            }
            // else if (route.name === 'Shop') {
            //     img = focused ? icon_tab_shop_selected : icon_tab_shop_normal;
            // } else if (route.name === 'Message') {
            //     img = focused ? icon_tab_message_selected : icon_tab_message_normal;
            // } else if (route.name === 'Mine') {
            //     img = focused ? icon_tab_mine_selected : icon_tab_mine_normal;
            // }
            return <Image style={{
              width: size, height: size, tintColor: color,
            }} source={img} />
          }
        }
      }}
      // @ts-ignore
      tabBarOptions={{
        activeTintColor: '#ff2442',
        inactiveTintColor: '#999',
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          title: '首页'
        }}
      />
      {/* <BottomTab.Screen
        name='Home'
        component={Home}
      />
      <BottomTab.Screen
        name='Home'
        component={Home}
      />
      <BottomTab.Screen
        name='Home'
        component={Home}
      /> */}
    </BottomTab.Navigator>
  )
}