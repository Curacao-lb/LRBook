import { GestureResponderEvent, Image, Text, TouchableWithoutFeedback, View, TouchableOpacity } from "react-native";
import styles from "../styles";

import icon_group from '@src/assets/icon_group.png';

export default ({ setY, setVisible }: { setY: (y: number) => void, setVisible: (visible: boolean) => void }) => {

  const handlePress = (event: GestureResponderEvent) => {
    const { pageY } = event.nativeEvent
    setY(pageY + 48)
    setVisible(true)
  }

  return (
    <View style={styles.titleLayout}>
      <Text style={styles.titleTxt}>消息</Text>
      <TouchableOpacity
        style={styles.groupButton}
        onPress={handlePress}
      >
        <Image style={styles.iconGroup} source={icon_group} />
        <Text style={styles.groupTxt}>群聊</Text>
      </TouchableOpacity>
    </View>
  )
}