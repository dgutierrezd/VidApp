import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import TrackPlayer from "react-native-track-player";
import { useNavigation } from "@react-navigation/native";

const Introduccion = () => {
    const [hasAudio, setHasAudio] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigation: any = useNavigation();

    const setAudio = async () => {
        setLoading(true);
        await TrackPlayer.add([{
            url: 'https://audio.jukehost.co.uk/cRnZ2wjwKHpIZpX6JiCNn8fZbc1jWQSq',
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
                Introducción
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text>
                    El suicidio es y será una problemática que ha llamado el interés por diferentes
                    organizaciones y comunidades. Cada vez más se ha hecho evidente este fenómeno, puesto
                    que se ha detectado un aumento en el número de personas que cometen suicidio o intentas
                    acciones autoinflingidas, los adolescentes (15-24 años) y adultos jóvenes (30-45 años).
                    Según el libro de Organización Mundial de la Salud de 2014 titulado “La prevención del
                    suicidio: un imperativo mundial” la prevención del suicidio requiere de esfuerzos
                    coordinados y de la colaboración de múltiples sectores de la sociedad, donde las entidades
                    públicas y privadas deben manifestar su interés de ayudar. Asimismo, se requiere de la
                    participación de sectores sanitarios y no sanitarios como las instituciones educativas, las
                    empresas, la política, la defensa y por supuesto los medios de comunicación. En síntesis, el
                    objetivo final es poder generar esfuerzo y acciones integradas que propenden por el
                    cuidado, atención, información y seguimiento tanto a los intentos suicidas y a las acciones
                    consumadas
                </Text>
                <Text style={{ marginTop: 10 }}>
                    Teniendo en cuenta lo antes planteado, esta investigación pretende aporta a esta
                    problemática desde el diseño de un prototipo de app de carácter informativa y educativa,
                    para apoyar los pensamiento o acciones suicidas de población estudiantil de entre los 15 y
                    24 años de edad. Haciendo uso de las TICs y en este caso particular las apps, como
                    estrategia innovadora y cautivadora teniendo en cuenta el uso constante de la población a
                    estas aplicaciones.
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

export default Introduccion;
