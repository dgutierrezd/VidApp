import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const InitialScreen = () => {

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('../assets/images/Initial.png')} style={{ width: '100%' }} />
            <View
                style={{
                    backgroundColor: '#f0f0f0',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: -20,
                    height: '100%',
                    paddingTop: 30,
                    paddingHorizontal: 40
                }}
            >
                <Text>Emociones</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Image source={require('../assets/images/CARA_AZUL.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Image source={require('../assets/images/CARA_PURPURA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Image source={require('../assets/images/CARA_AMARILLA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Image source={require('../assets/images/CARA_MORADA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    <Image source={require('../assets/images/CARA_ROJA.png')} style={{ width: 50, height: 50 }} />
                </View>
                <Text style={{ textAlign: 'center', marginTop: 10 }}>¿Cómo te sientes hoy?</Text>
                <View>
                    <Text style={{ marginTop: 10 }}>Temas</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <Pressable
                            style={{ backgroundColor: 'white', width: 140, height: 140, borderRadius: 20 }}
                            onPress={() => navigation.navigate("AccionesAyuda")}
                        >
                            <Image source={require('../assets/images/init_acciones.png')} style={{ width: '100%', height: 90, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                            <Text style={{ textAlign: 'center' }}>Acciones para brindar ayuda</Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: 'white', width: 140, height: 140, borderRadius: 20 }}
                            onPress={() => navigation.navigate("HerramientasAyudador")}
                        >
                            <Image source={require('../assets/images/init_herramientas.png')} style={{ width: '100%', height: 90, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                            <Text style={{ textAlign: 'center' }}>Herramientas para el ayudador</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View style={{ backgroundColor: 'white', width: 140, height: 140, borderRadius: 20 }}>
                            <Image source={require('../assets/images/init_informacion.png')} style={{ width: '100%', height: 90, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                            <Text style={{ textAlign: 'center' }}>Más</Text>
                            <Text style={{ textAlign: 'center' }}>información</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', width: 140, height: 140, borderRadius: 20 }}>
                            <Image source={require('../assets/images/init_linea_vida.png')} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default InitialScreen;
