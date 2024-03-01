import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const AccionesAyuda = () => {
    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('../assets/images/accionesAyuda.png')} style={{ width: '100%' }} />
            <Pressable style={{ position: 'absolute', left: 10, top: 70, padding: 5 }} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
            </Pressable>
            <Image source={require('../assets/images/logoAppWhite.png')} style={{ position: 'absolute', right: 10, top: 70, padding: 5, width: 40, height: 30 }} />
            <View
                style={{
                    backgroundColor: '#f0f0f0',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: -30,
                    height: '100%',
                    paddingTop: 30,
                    paddingHorizontal: 40,
                    alignItems: 'center'
                }}
            >
                <Text>Acciones para brindar ayuda</Text>
                <Text>y para estar atentos</Text>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 30,
                    marginTop: 40,
                    width: '100%'
                }}>
                    <Pressable
                        style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: 30,
                            padding: 10
                        }}
                        onPress={() => {
                            navigation.navigate("AccionesDetalle", {
                                senales: ["Me siento triste constantemente (depresión).", "Consumo o uso de ciertas sustancias.", "Me siento ansioso sin saber el por qué, no hay razón aparente.", "Tengo dificultad para conectarme emocionalmente con mis familiares, padres, amigos o con mi pareja sentimental.", "He intentado suicidarme y soy consciente de ello.", "Me he herido a mí mismo, no veo nada bueno en mí."],
                                img: require('../assets/images/factorIndividuales.png'),
                                url: 'https://audio.jukehost.co.uk/KnHWIfchixDbulSUsnUNT8hs7wTJTHGB'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#6656db'
                        }}>
                            Factores de riesgo individuales
                        </Text>
                    </Pressable>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 30,
                    marginTop: 20,
                    width: '100%'
                }}>
                    <Pressable style={{
                        backgroundColor: '#f0f0f0',
                        borderRadius: 30,
                        padding: 10
                    }} onPress={() => {
                        navigation.navigate("AccionesDetalle", {
                            senales: ["La violencia constante en mi entorno familiar me afecta.", "Siento que en mi casa no cuento con alguien que me ayude, oriente o escuche cuando tengo un inconveniente.", "El hecho de haber tenido que salir de mi casa e irme a estudiar o a trabajar a otra ciudad a afectado mi estado de ánimo."],
                            img: require('../assets/images/factorFamiliares.png'),
                            url: 'https://audio.jukehost.co.uk/YmZKAOvZi3X89pN8p4dW9j9DZ7yhD8To'
                        })
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#6656db'
                        }}>
                            Factores de riesgo familiares
                        </Text>
                    </Pressable>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 30,
                    marginTop: 20,
                    width: '100%'
                }}>
                    <Pressable style={{
                        backgroundColor: '#f0f0f0',
                        borderRadius: 30,
                        padding: 10
                    }} onPress={() => {
                        navigation.navigate("AccionesDetalle", {
                            senales: ["Soy víctima constante de bullying y no sé qué hacer.", "Siento que a mí alrededor me rechazan y juzgan por mi orientación sexual.", "Me siento mal o triste de no poder acceder a la carrera que sea o anhelo estudiar.", "El hecho de haber vivido en un entorno marcado por la guerra y la violencia me afectó emocionalmente a mí y a mi familia."],
                            img: require('../assets/images/factorSociales.png'),
                            url: 'https://audio.jukehost.co.uk/Y4hswKww7vuZbn8l05bTUFCQccpccOfG'
                        })
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#6656db'
                        }}>
                            Factores de riesgo sociales
                        </Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
};

export default AccionesAyuda;
