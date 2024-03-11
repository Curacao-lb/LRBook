import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context' // 替换 SafeAreaView , 支持 Android 和 iOS
import { NavigationContainer } from '@react-navigation/native'
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack'
import { PushyProvider, Pushy } from "react-native-update";


import Welcome from '@src/modules/welcome'
import Login from '@src/modules/login'
import MainTab from '@src/modules/mainTab'
import ArticleDetail from '@src/modules/articleDetail'
import SeachGoods from '@src/modules/shopping/components/searchGoods'

import _updateConfig from './update.json'
const { appKey } = _updateConfig.android
const pushyClient = new Pushy({
  appKey,
});

const Stack = createStackNavigator()

const App = (): JSX.Element => {
  return (
    <PushyProvider client={pushyClient}>
      <SafeAreaProvider>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome' screenOptions={{
            cardStyle: {
              elevation: 1 // 提升页面的显示层级
            }
          }}>
            <Stack.Screen component={Welcome} name='Welcome' options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS // 动画，IOS风格动画
            }} />
            <Stack.Screen component={Login} name='Login' options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS // 动画，IOS风格动画
            }} />
            <Stack.Screen component={MainTab} name='MainTab' options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS // 动画，IOS风格动画
            }} />
            <Stack.Screen
              name='ArticleDetail'
              component={ArticleDetail}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
              }}
            />
            <Stack.Screen
              name='SearchGoods'
              component={SeachGoods}
              options={{
                headerShown: false,
                presentation: 'transparentModal' // 无缝切换效果
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PushyProvider>

  )
}

export default App
