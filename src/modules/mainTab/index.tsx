import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../home"
import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from './styles'
import icon_tab_publish from '@src/assets/icon_tab_publish.png'
import Shopping from "../shopping"

const BottomTab = createBottomTabNavigator()

export default () => {
  const TabBar = ({ state, descriptors, navigation }: any) => {
    const { routes, index } = state;

    return (
      <View style={styles.tabBarContainer}>
        {routes.map((route: any, i: number) => {
          const { options } = descriptors[route.key]; // 取下面配置的 BottomTab.Screen
          const label = options.title;
          const isFocused = index === i; // 是否选中的判断

          if (i === 2) {
            return (
              <TouchableOpacity
                key={label}
                style={styles.tabItem}
              // onPress={onPublishPress}
              >
                <Image style={styles.icon_tab_publish} source={icon_tab_publish} />
              </TouchableOpacity>
            )
          }
          return (
            <TouchableOpacity
              key={label}
              style={styles.tabItem}
              onPress={() => {
                navigation.navigate(route.name);
              }}
            >
              <Text style={{
                fontSize: isFocused ? 18 : 16,
                color: isFocused ? '#333' : '#999',
                fontWeight: isFocused ? 'bold' : 'normal'
              }}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
  return (
    <View style={styles.root}>
      <BottomTab.Navigator
        tabBar={props => <TabBar {...props} />}
      >
        <BottomTab.Screen
          name='Home'
          component={Home}
          options={{
            title: '首页',
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name='Shopping'
          component={Shopping}
          options={{
            title: '购物'
          }}
        />
        <BottomTab.Screen
          name='Publish'
          component={Shopping}
          options={{
            title: '发布',
            headerShown: false,
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
    </View>
  )
}