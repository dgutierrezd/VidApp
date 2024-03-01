import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Emociones = () => {
    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image source={require('../assets/images/bgEmociones.png')} style={{ width: '100%', height: 300 }} />
                <Pressable style={{ position: 'absolute', left: 10, top: 10, padding: 5 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
                <Image source={require('../assets/images/logoAppWhite.png')} style={{ position: 'absolute', right: 10, top: 10, padding: 5, width: 40, height: 30 }} />
                <View
                    style={{
                        backgroundColor: '#f6f5fa',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        marginTop: -60,
                        height: '100%',
                        paddingHorizontal: 40,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ marginTop: 20, textAlign: 'center' }}>EMOCIONES</Text>
                    <Text style={{ marginTop: 30, textAlign: 'justify' }}>
                        Las emociones son respuestas psicofisiológicas complejas que experimentamos como reacciones a estímulos internos o externos. Son estados mentales y corporales que nos impulsan a actuar y nos brindan información sobre cómo nos sentimos en relación a lo que está sucediendo en nuestro entorno.
                    </Text>
                    <Text style={{ marginTop: 10, textAlign: 'justify' }}>
                        Las emociones son parte inherente de nuestra vida cotidiana y nos ayudan a darle sentido a nuestras experiencias.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgTristeza.png'), link: "P7m3SPCqFSs", title: 'TRISTEZA', description: 'La tristeza es una emoción asociada a la pérdida, la decepción o la sensación de soledad. Se caracteriza por una sensación de pesar, desánimo y apatía. La tristeza puede manifestarse físicamente a través del llanto, la falta de energía y la dificultad para disfrutar de las cosas que antes nos resultaban placenteras.' })}>
                            <Image source={require('../assets/images/largeTristeza.png')} style={{ width: 65, height: 210, marginRight: 3 }} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgMiedo.png'), link: "toVQG8cofsI", title: 'MIEDO', description: 'El miedo es una emoción que surge como respuesta a una amenaza o peligro percibido. Puede ser desencadenado por situaciones reales o imaginarias y se caracteriza por una sensación de angustia, nerviosismo y la activación del sistema de respuesta de lucha o huida. El miedo puede limitar nuestras acciones y generar una sensación de vulnerabilidad.' })}>
                            <Image source={require('../assets/images/largeMiedo.png')} style={{ width: 65, height: 210, marginRight: 3 }} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgCulpa.png'), link: "q60nkoL8_wg", title: 'CULPA', description: 'La culpa es una emoción que surge cuando sentimos remordimiento o responsabilidad por haber hecho algo malo o dañino. Nos sentimos culpables cuando creemos que hemos violado un valor o una norma personal o social. La culpa puede generar sentimientos de vergüenza, tristeza y el deseo de reparar o compensar nuestras acciones.' })}>
                            <Image source={require('../assets/images/largeCulpa.png')} style={{ width: 65, height: 210, marginRight: 3 }} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgExigencia.png'), link: "zxmBZ2NURdc", title: 'EXIGENCIA', description: 'La exigencia es una emoción relacionada con la sensación de presión o demanda excesiva. Se caracteriza por la percepción de tener responsabilidades o expectativas abrumadoras, ya sea impuestas por otros o por uno mismo. La exigencia puede generar estrés, ansiedad y la sensación de no poder cumplir con todas las demandas que se nos presentan.' })}>
                            <Image source={require('../assets/images/largeExigencia.png')} style={{ width: 65, height: 210, marginRight: 3 }} />
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Emocion', { img: require('../assets/images/bgEnojo.png'), link: "ZfUhovg4Faw", title: 'ENOJO', description: 'El enojo es una emoción intensa que surge cuando nos sentimos frustrados, irritados o injustamente tratados. Se manifiesta a través de una sensación de irritabilidad, ira y la necesidad de expresar nuestra insatisfacción. El enojo puede ser una señal de que nuestras necesidades o límites no están siendo respetados' })}>
                            <Image source={require('../assets/images/largeEnojo.png')} style={{ width: 65, height: 210 }} />
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Emociones;
