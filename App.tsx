import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // 替换 SafeAreaView , 支持 Android 和 iOS
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import pageA from './src/modules/pageA';
import pageB from './src/modules/pageB';

const Stack = createStackNavigator()

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='white'
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='pageA' screenOptions={{
          cardStyle: {
            elevation: 1 // 提升页面的显示层级
          }
        }}>
          <Stack.Screen component={pageA} name='pageA' options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS // 动画，IOS风格动画
          }} />
          <Stack.Screen component={pageB} name='pageB' options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS // 动画，IOS风格动画
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
