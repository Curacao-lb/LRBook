import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // 替换 SafeAreaView , 支持 Android 和 iOS
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import Welcome from '@src/modules/welcome';
import Login from '@src/modules/login';
import MainTab from '@src/modules/mainTab';
import ArticleDetail from '@src/modules/articleDetail';

const Stack = createStackNavigator()

const App = (): JSX.Element => {
  return (
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
