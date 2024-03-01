import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const InitialScreen = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {openDrawer && (
                <LinearGradient colors={['#2c97de', '#6656db']} style={{
                    zIndex: 10,
                    width: '80%',
                    height: '200%',
                }}>
                    <Pressable onPress={() => setOpenDrawer(false)}>
                        <Text style={{ fontWeight: '900', color: 'white', marginTop: 10, fontSize: 26, alignSelf: 'flex-end', marginRight: 20 }}>X</Text>
                    </Pressable>
                    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                        <Image source={require('../assets/images/logoNameAppWhite.png')} style={{ width: 150, height: 170, alignSelf: 'center' }} />
                        <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginVertical: 10 }} />
                        <Text onPress={() => navigation.navigate("AccionesAyuda")} style={{ color: 'white' }}>Acciones para brindar ayuda</Text>
                        <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginVertical: 10 }} />
                        <Text onPress={() => navigation.navigate("HerramientasAyudador")} style={{ color: 'white' }}>Herramientas para el ayudador</Text>
                        <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginVertical: 10 }} />
                        <Text onPress={() => navigation.navigate("Emociones")} style={{ color: 'white' }}>Emociones</Text>
                        <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginVertical: 10 }} />
                        <Text style={{ color: 'white' }}>Máx información</Text>
                        <View style={{ backgroundColor: 'white', height: 1, width: '100%', marginVertical: 10 }} />
                        <Text style={{ color: 'white', marginTop: 20 }}>¿Necesitas ayuda?</Text>
                        <Text style={{ color: 'white' }}>Marca 123 a la línea vida</Text>
                        <Image source={require('../assets/images/init_linea_vida.png')} style={{ width: 200, height: 200, borderRadius: 20, marginVertical: 20 }} />
                        <Image source={require('../assets/images/UAM_LOGO.png')} style={{ width: 200, height: 40, alignSelf: 'center' }} />
                    </ScrollView>
                </LinearGradient>
            )}
            <Image source={require('../assets/images/Initial.png')} style={{ width: '100%' }} />
            <Pressable style={{ position: 'absolute', left: 10, top: 70, padding: 5 }} onPress={() => setOpenDrawer(true)}>
                <Image source={require('../assets/images/burgerMenu.png')} style={{ width: 30, height: 15 }} />
            </Pressable>
            <Image source={require('../assets/images/LogoNameApp.png')} style={{ width: 100, height: 110, position: 'absolute', right: 40, top: 100 }} />
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
                    <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgTristeza.png'), link: "P7m3SPCqFSs", title: 'TRISTEZA', description: 'La tristeza es una emoción asociada a la pérdida, la decepción o la sensación de soledad. Se caracteriza por una sensación de pesar, desánimo y apatía. La tristeza puede manifestarse físicamente a través del llanto, la falta de energía y la dificultad para disfrutar de las cosas que antes nos resultaban placenteras.' })}>
                        <Image source={require('../assets/images/CARA_AZUL.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgMiedo.png'), link: "toVQG8cofsI", title: 'MIEDO', description: 'El miedo es una emoción que surge como respuesta a una amenaza o peligro percibido. Puede ser desencadenado por situaciones reales o imaginarias y se caracteriza por una sensación de angustia, nerviosismo y la activación del sistema de respuesta de lucha o huida. El miedo puede limitar nuestras acciones y generar una sensación de vulnerabilidad.' })}>
                        <Image source={require('../assets/images/CARA_PURPURA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgCulpa.png'), link: "q60nkoL8_wg", title: 'CULPA', description: 'La culpa es una emoción que surge cuando sentimos remordimiento o responsabilidad por haber hecho algo malo o dañino. Nos sentimos culpables cuando creemos que hemos violado un valor o una norma personal o social. La culpa puede generar sentimientos de vergüenza, tristeza y el deseo de reparar o compensar nuestras acciones.' })}>
                        <Image source={require('../assets/images/CARA_AMARILLA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgExigencia.png'), link: "zxmBZ2NURdc", title: 'EXIGENCIA', description: 'La exigencia es una emoción relacionada con la sensación de presión o demanda excesiva. Se caracteriza por la percepción de tener responsabilidades o expectativas abrumadoras, ya sea impuestas por otros o por uno mismo. La exigencia puede generar estrés, ansiedad y la sensación de no poder cumplir con todas las demandas que se nos presentan.' })}>
                        <Image source={require('../assets/images/CARA_MORADA.png')} style={{ width: 50, height: 50, marginRight: 10 }} />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgEnojo.png'), link: "ZfUhovg4Faw", title: 'ENOJO', description: 'El enojo es una emoción intensa que surge cuando nos sentimos frustrados, irritados o injustamente tratados. Se manifiesta a través de una sensación de irritabilidad, ira y la necesidad de expresar nuestra insatisfacción. El enojo puede ser una señal de que nuestras necesidades o límites no están siendo respetados' })}>
                        <Image source={require('../assets/images/CARA_ROJA.png')} style={{ width: 50, height: 50 }} />
                    </Pressable>
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
                        <Pressable
                            style={{ backgroundColor: 'white', width: 140, height: 140, borderRadius: 20 }}
                            onPress={() => navigation.navigate("MasInformacion")}
                        >
                            <Image source={require('../assets/images/init_informacion.png')} style={{ width: '100%', height: 90, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                            <Text style={{ textAlign: 'center' }}>Más</Text>
                            <Text style={{ textAlign: 'center' }}>información</Text>
                        </Pressable>
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
