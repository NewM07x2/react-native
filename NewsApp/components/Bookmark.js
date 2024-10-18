import { StyleSheet, Text, Image, View, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import { ListItem } from './ListItem';

/**
 * お気に入り記事コンポーネント
 */
export default Bookmark = ({ navigation }) => {
  const bookmarks = useSelector((state) => state.user.bookmarks)
  return (
    <SafeAreaView style={stlyes.container}>
    <FlatList
      data={bookmarks}
      renderItem={({ item }) => {
        return (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  </SafeAreaView>
  );
}

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})