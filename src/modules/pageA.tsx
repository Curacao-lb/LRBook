import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <View>
      <Text style={{ position: 'absolute', top: 200 }}>页面A</Text>
      <Button title='点击跳转B页面' onPress={() => {
        navigation.navigate('pageB')
      }} color='#841584'></Button>
    </View>
  )
}