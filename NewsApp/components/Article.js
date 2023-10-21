import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview'
/**
 * 記事詳細に関するコンポーネント
 */
export default Article = ({ route }) => {
  const {article} = route.params
  return (
    <SafeAreaView style={stlyes.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})