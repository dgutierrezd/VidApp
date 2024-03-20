import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { useNavigation } from "@react-navigation/native";

const Justificacion = () => {
    const [hasAudio, setHasAudio] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigation: any = useNavigation();

    const setAudio = async () => {
        setLoading(true);
        await TrackPlayer.add([{
            url: 'https://audio.jukehost.co.uk/6wZfCihogjglt0tMdv1L0VVGKU3Ax7k2',
        }]).then(() => {
            setLoading(false);
            setHasAudio(true);
        });
    }

    const playAudio = () => {
        TrackPlayer.play();
        setPlaying(true);
    }

    const pauseAudio = () => {
        TrackPlayer.pause();
        setPlaying(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#adadad', marginBottom: 20 }}>
                <Pressable style={{ marginTop: 10, marginLeft: 20, marginBottom: 10, alignSelf: 'flex-start' }} onPress={() => {
                    TrackPlayer.reset();
                    navigation.goBack();
                }}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
            </View>
            <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                Justificación
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text>
                    La conducta suicida es un conjunto de eventos complejos, que pueden afectar a personas de
                    cualquier edad o condición; cuando se manifiesta como el suicidio consumado, tiene
                    consecuencias devastadoras para el individuo, su familia y comunidad, y sus efectos son
                    duraderos. Los pensamientos y acciones suicidas se encuentran asociados a diversos
                    factores de riesgo, que pueden ser intervenidos con acciones específicas que, abarquen el
                    espectro de la promoción de la salud mental, la prevención y atención a los problemas y

                    trastornos mentales; involucrando a diferentes sectores e instituciones y a la sociedad civil,
                    que permita evitar así los desenlaces fatales. Para la Torre, Castillo, Arambarri, López-
                    Coronado y Franco (2017) “las comunidades juegan un papel clave en la prevención del
                    suicidio: pueden brindar apoyo social a las personas más vulnerables (…)” (pág. 2). Es
                    claro que, como comunidad educativa, estamos llamados a identificar de manera temprana
                    algunos comportamiento, situaciones o estados de ánimo que puedan desencadenar una
                    acción suicida. En ese sentido, estos Torre, et al., (2017) plantean que “Las tecnologías de
                    la información y las comunicaciones (TIC) pueden proporcionar innovaciones para apoyar
                    el trabajo de los profesionales de la salud para abordar este problema” (pág.2). Derivado de
                    lo anterior, y con el fin de aprovechar las características y potencialidades del uso de
                    aplicaciones móviles, surge la siguiente pregunta de investigación: ¿Qué características o
                    componentes debe tener un prototipo de APP que puede direccionarse para la prevención
                    de pensamientos y acciones suicidas en estudiantes de la Universidad Autónoma de
                    Manizales?
                </Text>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                {loading ? <ActivityIndicator size='small' /> :
                    !hasAudio ?
                        <Pressable onPress={setAudio}>
                            <Image source={require('../assets/images/escucharPodcast.png')} style={{ width: 120, height: 55 }} />
                        </Pressable> :
                        !playing ?
                            <Pressable style={{ alignSelf: 'center' }} onPress={playAudio}>
                                <Image source={require('../assets/images/playIcon.png')} style={{ width: 30, height: 30 }} />
                            </Pressable> :
                            <Pressable style={{ alignSelf: 'center' }} onPress={pauseAudio}>
                                <Image source={require('../assets/images/pauseIcon.png')} style={{ width: 30, height: 30 }} />
                            </Pressable>
                }
            </View>
        </SafeAreaView>
    );
};

export default Justificacion;
