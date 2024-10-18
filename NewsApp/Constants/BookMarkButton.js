import { StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

export const BookMarkButton = ({onPress, enabled}) => {
  const name = enabled ? "bookmark" : "bookmark-o"
  return (
    <TouchableOpacity onPress={onPress} style={stlyes.container}>
      <FontAwesome name={name} size={40} color="salmon"></FontAwesome>
    </TouchableOpacity>
  )
}

const stlyes = StyleSheet.create({
  container: {
    padding: 5
  }
})