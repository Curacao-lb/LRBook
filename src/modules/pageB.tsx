import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <View>
      <Text style={{ position: 'absolute', top: 200 }}>BBBBBB页面BBBBBB</Text>
      <Button title='点击跳转A页面' onPress={() => {
        navigation.navigate('pageA')
      }} color='#841584'></Button>
    </View>
  )
}