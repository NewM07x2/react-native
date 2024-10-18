import { StyleSheet, Text, Image, View, SafeAreaView, ImageComponent } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { BookMarkButton } from '../constants/BookMarkButton';
import { addBookMark, removeBookMark } from '../store/userSlice'
/**
 * 記事詳細に関するコンポーネント
 */
export default Article = ({ route }) => {
  const { article } = route.params
  const bookmarks = useSelector((state) => state.user.bookmarks)
  const isBookmark = bookmarks.some((item) => article.url === item.url)

  const dispatch = useDispatch()
  const onPressBookMark = () => {
    if (isBookmark) {
      dispatch(removeBookMark(article))
    } else {
      dispatch(addBookMark(article))
    }
  }

  return (
    <SafeAreaView style={stlyes.container}>
      <BookMarkButton onPress={onPressBookMark} enabled={isBookmark}/>
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