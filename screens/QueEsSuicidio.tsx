import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { useNavigation } from "@react-navigation/native";

const QueEsSuicidio = () => {
    const [hasAudio, setHasAudio] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigation: any = useNavigation();

    const setAudio = async () => {
        setLoading(true);
        await TrackPlayer.add([{
            url: 'https://audio.jukehost.co.uk/dJCwmi9F0sLvqOyCaZxYunSnMTKsx1KG',
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
                ¿Qué es el suicidio?
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text>
                    Según la Organización Mundial de la Salud define el suicidio es “un fenómeno
                    multideterminado” (OMS, 2018) y al tener esa característica exigen que todas las ciencias,
                    disciplinas y campos profesionales renuncien a sus pretensiones de brindar explicaciones e
                    intervenciones totalizantes, con el fin de establecer un diálogo interdisciplinario para
                    comprender e intervenir dicho fenómeno. Teniendo en cuenta lo antes planteado, el suicidio
                    consumado y los pensamientos no pueden verse desde una sola dimensión, el
                    reconocimiento de los diferentes factores individuales, sociales y biológicos nos demandan
                    a pensar en procesos de orientación holística que reconozcan al dividuo desde todas sus
                    dimensiones, con el fin de poder tomar decisiones claras sobre cuáles son aquellas
                    determinaciones sobre las que podemos incidir y cuáles están por fuera de nuestro campo
                    de influencia.
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

export default QueEsSuicidio;
