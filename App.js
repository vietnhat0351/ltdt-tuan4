import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './screens/ScreenA.js';
import ScreenB from './screens/ScreenB.js';

const Stack = createStackNavigator();

function Home({ navigation }) {

const onPressHandlerA = () => {
  navigation.navigate('a');
}

const onPressHandlerB = () => {
  navigation.navigate('b');
}

  return(
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <Pressable style={styles.btnLogin}
        onPress={onPressHandlerA}
      >
        <Text style={{color: '#ffffff', fontSize: 30}}>
          Screen A
        </Text>
      </Pressable>
      <Pressable style={styles.btnLogin}
        onPress={onPressHandlerB}
      >
        <Text style={{color: '#ffffff', fontSize: 30}}>
          Screen B
        </Text>
      </Pressable>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='a' component={ScreenA}/>
        <Stack.Screen name='b' component={ScreenB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  btnLogin: {
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    marginBottom: 10,
  }
});

