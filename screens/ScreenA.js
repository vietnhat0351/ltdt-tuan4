import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function ScreenA() {
    return(
      <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      style={styles.container}
    >
      <View style={{flex: 2}}>
        <Text style={{fontSize: 25, fontWeight: 'bold', top: '50%'}}>LOGIN</Text>
      </View>
      
      <View style={{flex: 8, flexDirection: 'column'}}>
        <View style={{borderWidth: 2, borderColor: '#ffffff', flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../assets/avatar_user.png')}/>
          <TextInput 
            style={{fontSize: 30, color: '#000000', width: '80%'}}
            placeholder='Name'      
          />
  
        </View>
        
        <View style={{borderWidth: 2, borderColor: '#ffffff', top: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/lock.png')}/>
        <TextInput
          style={{fontSize: 30, color: '#000000', width: '80%'}}
          placeholder='Password'
        />
        <Image source={require('../assets/eye.png')}/>
        </View>
  
        <Pressable style={styles.btnLogin}>
        <Text style={{color: '#ffffff', fontSize: 30, fontWeight: 'bold'}}>
          LOGIN
        </Text>
        </Pressable>
  
        <View style={{top: '30%', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          Forgot your password?
        </Text>
        </View>
      </View>
    </LinearGradient>
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