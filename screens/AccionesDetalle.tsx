import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TrackPlayer from "react-native-track-player";

const AccionesDetalle = ({ route }) => {
    const [hasAudio, setHasAudio] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(false);

    const { senales, img, url } = route.params;

    const navigation: any = useNavigation();

    const setAudio = async () => {
        setLoading(true);
        await TrackPlayer.add([{
            url,
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
            <Image source={img} style={{ width: '100%' }} />
            <Pressable style={{ position: 'absolute', left: 10, top: 70, padding: 5 }} onPress={() => {
                TrackPlayer.reset();
                navigation.goBack();
            }}>
                <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
            </Pressable>
            <Image source={require('../assets/images/logoAppWhite.png')} style={{ position: 'absolute', right: 10, top: 70, padding: 5, width: 40, height: 30 }} />
            <View
                style={{
                    backgroundColor: '#f0f0f0',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: -20,
                    height: '100%',
                    paddingHorizontal: 40,
                    alignItems: 'center'
                }}
            >
                <Image source={require('../assets/images/CAMPANA.png')} style={{ width: 160, height: 200 }} />
                <Text>¡SEÑALES DE ALARMA!</Text>
                <View style={{ marginTop: 20 }}>
                    {senales.map((s, index) => (
                        <View key={index} style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 40 }}>
                            <Text style={{ marginRight: 20 }}>◦</Text>
                            <Text>{s}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ marginTop: 20 }}>
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
            </View>
        </SafeAreaView>
    );
};

export default AccionesDetalle;
