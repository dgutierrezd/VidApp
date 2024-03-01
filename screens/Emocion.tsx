import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";

const Emocion = ({ route }) => {

    const { link, img, title, description } = route.params;

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image source={img} style={{ width: '100%', height: 300 }} />
                <Pressable style={{ position: 'absolute', left: 10, top: 10, padding: 5 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
                <Image source={require('../assets/images/logoAppWhite.png')} style={{ position: 'absolute', right: 10, top: 10, padding: 5, width: 40, height: 30 }} />
                <View
                    style={{
                        backgroundColor: '#f0f0f0',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        marginTop: -60,
                        height: '100%',
                        paddingHorizontal: 40,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{ marginTop: 20, textAlign: 'center' }}>{title}</Text>
                    <Text style={{ marginTop: 30, textAlign: 'justify' }}>{description}</Text>
                    <View style={{ marginTop: 30 }}>
                        <YoutubePlayer
                            height={200}
                            width={300}
                            play
                            videoId={link}
                            onChangeState={res => console.log(res)}
                            onError={err => console.log(err)}
                        />
                    </View>
                    <Text style={{ textAlign: 'center' }}>Otras emociones</Text>
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Emocion;
