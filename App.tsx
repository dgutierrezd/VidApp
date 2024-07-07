/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  Pressable,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from './screens/InitialScreen';
import AccionesAyuda from './screens/AccionesAyuda';
import AccionesDetalle from './screens/AccionesDetalle';
import HerramientasAyudador from './screens/HerramientasAyudador';
import HerramientasDetalle from './screens/HerramientasDetalle';
import Emocion from './screens/Emocion';
import Emociones from './screens/Emociones';
import TrackPlayer from 'react-native-track-player';
import MasInformacion from './screens/MasInformacion';
import Introduccion from './screens/Introduccion';
import Justificacion from './screens/Justificacion';
import QueEsSuicidio from './screens/QueEsSuicidio';
import DatosInteres from './screens/DatosInteres';
import AccionesIntentoSuicida from './screens/AccionesIntentoSuicida';
import MitosSuicidio from './screens/MitosSuicidio';
import Acerca from './screens/Acerca';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const image = require('./assets/images/LogoApp.png');

  const navigation: any = useNavigation();

  const ingresar = async () => {
    await TrackPlayer.setupPlayer();
    navigation.navigate('Initial');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 30,
        }}
        imageStyle={{opacity: 0.5}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./assets/images/LogoNameApp.png')}
            style={{width: 200, height: 220}}
          />
          <Text style={{textAlign: 'center', marginTop: 40}}>
            ¡Bienvenido a VidApp!
          </Text>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            VidApp es una aplicación diseñada con un propósito fundamental: la
            prevención del suicidio. Nuestro objetivo es brindar apoyo y
            herramientas prácticas tanto a aquellas personas que atraviesan una
            crisis emocional como a quienes desean ayudar a alguien en riesgo.
          </Text>
          <Text style={{textAlign: 'center', marginTop: 10}}>
            Sabemos que el suicidio es un tema delicado y complejo, y
            reconocemos la importancia de actuar de manera temprana y efectiva.
            Con VidApp, queremos brindar un espacio seguro y confiable donde las
            personas puedan encontrar recursos útiles para abordar situaciones
            de crisis.
          </Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#2c97de', '#6656db']}
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 30,
            marginTop: 70,
            width: '100%',
          }}>
          <Pressable onPress={ingresar}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
              }}>
              Ingresa
            </Text>
          </Pressable>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Initial"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccionesAyuda"
          component={AccionesAyuda}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccionesDetalle"
          component={AccionesDetalle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HerramientasAyudador"
          component={HerramientasAyudador}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HerramientasDetalle"
          component={HerramientasDetalle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Emocion"
          component={Emocion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Emociones"
          component={Emociones}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MasInformacion"
          component={MasInformacion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Introduccion"
          component={Introduccion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Justificacion"
          component={Justificacion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QueEsSuicidio"
          component={QueEsSuicidio}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DatosInteres"
          component={DatosInteres}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccionesIntentoSuicida"
          component={AccionesIntentoSuicida}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MitosSuicidio"
          component={MitosSuicidio}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Acerca"
          component={Acerca}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
