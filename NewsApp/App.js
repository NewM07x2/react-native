import AppSetting from './constants/AppSetting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './components/Home'
import Article from './components/Article'
import Bookmark from './components/Bookmark'

import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Article" component={Article} options={{headerShown: true}}/>
    </Stack.Navigator>
  ) 
}

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'HomeTab') {
      return <FontAwesome name='home' size={size} color={color} />
    } else if (route.name === 'BookmarkTab') {
      return <FontAwesome name='bookmark' size={size} color={color} />
    }
  },
  // アクティブなタブ
  // tabBarActiveTintColor: 'tomato',
  // 非アクティブなタブ
  // tabBarInactiveTintColor: 'gray'
})


export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name='HomeTab' component={HomeStack} options={{headerShown: false, title: 'home'}}></Tab.Screen>
        <Tab.Screen name='BookmarkTab' component={Bookmark} options={{headerShown: false, title: 'bookmark'}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

