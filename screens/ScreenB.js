import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ScreenB() {
    return(
      <View>
        <Text>
          Screen B
        </Text>
      </View>
    )
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
      top: '20%'
    }
  });