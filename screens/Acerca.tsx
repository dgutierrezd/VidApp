import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const Acerca = () => {
  const navigation: any = useNavigation();

  const copyToClipboard = (str: string) => {
    Clipboard.setString(str);
    Alert.alert('Correo copiado en el portapapeles');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#adadad', marginBottom: 20}}>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 10,
            alignSelf: 'flex-start',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/backButton.png')}
            style={{width: 30, height: 15}}
          />
        </Pressable>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{fontSize: 18, fontWeight: '600', marginBottom: 20}}>
          Equipo académico
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>Mauricio Chica Valencia:</Text>
          <Pressable onPress={() => copyToClipboard('')}>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>Julialba Castellanos Ruiz: jcastellanos@autonoma.edu.co</Text>
          <Pressable
            onPress={() => copyToClipboard('jcastellanos@autonoma.edu.co')}>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>
            Diana Patricia Jaramillo Ortegón: djaramillo@autonoma.edu.co
          </Text>
          <Pressable
            onPress={() => copyToClipboard('djaramillo@autonoma.edu.co')}>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>Valentina Cadavid Álzate: valentinac@autonoma.edu.co</Text>
          <Pressable
            onPress={() => copyToClipboard('valentinac@autonoma.edu.co')}>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 20,
            marginTop: 30,
          }}>
          Equipo desarrollo
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>
            Carlos Andrés Zapata Ospina: czapata@autonoma.edu.co –
            cazokame@gmail.com
          </Text>
          <Pressable
            onPress={() =>
              copyToClipboard('czapata@autonoma.edu.co, cazokame@gmail.com')
            }>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text>
            Joven investigador - Daniel Gutiérrez Duque: danielgudu22@gmail.com
          </Text>
          <Pressable onPress={() => copyToClipboard('danielgudu22@gmail.com')}>
            <Image
              source={require('../assets/images/copy-clipboard.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Acerca;
