import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const AccionesIntentoSuicida = () => {
    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#adadad', marginBottom: 20 }}>
                <Pressable style={{ marginTop: 10, marginLeft: 20, marginBottom: 10, alignSelf: 'flex-start' }} onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
            </View>
            <View
                style={{
                    backgroundColor: '#f0f0f0',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: -20,
                    height: '100%',
                    paddingTop: 30,
                    paddingHorizontal: 40,
                    alignItems: 'center'
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                    Acciones frente a un intento o ideación suicida
                </Text>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 20,
                    marginTop: 40,
                    width: '100%'
                }}>
                    <Pressable
                        style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: 20,
                            padding: 10
                        }}
                        onPress={() => {
                            navigation.navigate("HerramientasDetalle", {
                                title: 'Estrategias rápidas para afrontar mis pensamientos suicidas',
                                senales: [
                                    "No estás sólo: Busca un amigo, un familiar, un terapeuta y trasládale tus inquietudes. No mantengas en secreto tus pensamientos sobre el suicidio.",
                                    "Los pensamientos suicidas normalmente están asociados con problemas que pueden resolverse: Si no se te ocurre ninguna solución, no significa que no haya soluciones, sino que ahora no eres capaz de verlas. Los tratamientos psicoterapéuticos te ayudarán a encontrar y valorar las opciones adecuadas.",
                                    "Las crisis de suicidio suelen ser pasajeras: Aunque ahora sientas que tu abatimiento no va a terminar, es importante reconocer que las crisis no son permanentes.",
                                    "Los problemas rara vez son tan graves como parecen a primera vista: Las cosas que ahora te parecen insuperables (problemas financieros, perdida de un ser querido...) con el tiempo, serán seguramente menos graves y más controlables.",
                                    "Las razones para vivir ayudan a superar momentos difíciles: Piensa en las cosas que te han sostenido en los momentos difíciles tu familia, tus aficiones, tus proyectos para el futuro."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas1.png'),
                                url: 'https://audio.jukehost.co.uk/BRgtNzCmH7w6XsdWK1Fm3JCrjK8Vx3ne',
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            Estrategias rápidas para afrontar mis pensamientos suicidas
                        </Text>
                    </Pressable>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 20,
                    marginTop: 20,
                    width: '100%'
                }}>
                    <Pressable
                        style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: 20,
                            padding: 10
                        }}
                        onPress={() => {
                            navigation.navigate("HerramientasDetalle", {
                                title: '¿Qué puedo hacer? Consejos ante un pensamiento suicida',
                                senales: [
                                    "No decidas nada ahora, tomate un tiempo",
                                    "Las cosas cambian ha si tu no lo creas, todo es transitorio y temporal.",
                                    "Aléjate de cualquier cosa que pueda causarte daño",
                                    "Busca compañía, busca en tus contactos personas que te puedan escuchar",
                                    "Elabora un listado de servicios 24 horas que atiendan estas situaciones.",
                                    "Lo más importante es abrirse a los demás y comunicar tus pensamientos a alguien en quien confíes, o a algún profesional de la salud."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas2.png'),
                                url: 'https://audio.jukehost.co.uk/fulx3LCRTu5DHnhZXVHVjFq5RMsir7Zv'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué puedo hacer? Consejos ante un pensamiento suicida
                        </Text>
                    </Pressable>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#2c97de', '#6656db']} style={{
                    padding: 2,
                    borderRadius: 20,
                    marginTop: 20,
                    width: '100%'
                }}>
                    <Pressable
                        style={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: 20,
                            padding: 10
                        }}
                        onPress={() => {
                            navigation.navigate("HerramientasDetalle", {
                                title: '¿Qué puedo hacer si algún familiar o amigo está en riesgo?',
                                senales: [
                                    "Valora la situación seriamente.",
                                    "Exprésale tu preocupación.",
                                    "Muéstrate dispuesto a escuchar. Deja que la persona hable de sus sentimientos.",
                                    "Acepta sus sentimientos. No los juzgues. No cuestiones si el suicidio es o no correcto. No des sermones sobre el valor de la vida.",
                                    "No te muestres espantado. Eso no hará́ sino poner distancia entre los dos.",
                                    "Explica que hay alternativas disponibles, pero no des consejos fáciles.",
                                    "Busca ayuda profesional e informa de si existe algún antecedente familiar de suicidio."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas3.png'),
                                url: 'https://audio.jukehost.co.uk/pqGPEEFcv5a3yeJYoVKuwaF01smtUjmR'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué puedo hacer si algún familiar o amigo está en riesgo?
                        </Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </SafeAreaView >
    );
};

export default AccionesIntentoSuicida;
