import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
/**
 * お気に入り記事コンポーネント
 */
export default Bookmark = () => {
  return (
    <SafeAreaView style={stlyes.container}>
      <Text>お気に入り記事コンポーネント</Text>
    </SafeAreaView>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})