import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../home"
import { Image, Text, View, TouchableOpacity } from "react-native"
import { styles } from './styles'
import icon_tab_publish from '@src/assets/icon_tab_publish.png'
import Shopping from "../shopping"
import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker"

const BottomTab = createBottomTabNavigator()

export default () => {
  const TabBar = ({ state, descriptors, navigation }: any) => {
    const { routes, index } = state;

    const onPublishPress = () => {
      launchImageLibrary(
        {
          mediaType: 'photo', // 指令类型
          quality: 1,
          includeBase64: true,
        },
        // 回调
        (res: ImagePickerResponse) => {
          const { assets } = res;
          console.log('assets', assets);

          if (!assets?.length) {
            console.log('选择图片失败');
            return;
          }
          const {
            uri, width, height, fileName, fileSize, type
          } = assets[0];
          console.log(`uri=${uri}, width=${width}, height=${height}`);
          console.log(`fileName=${fileName}, fileSize=${fileSize}, type=${type}`);
        }
      );
    }

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
                onPress={onPublishPress}
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
            title: '购物',
            headerShown: false
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