import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MasInformacion = () => {
    const image = require('../assets/images/LogoApp.png');

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30
            }} imageStyle={{ opacity: 0.5 }}>
                <Pressable style={{ position: 'absolute', left: 10, top: 10, padding: 5, backgroundColor: 'gray', borderRadius: 20 }} onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/images/logoAppPng.png')} style={{ width: 200, height: 160 }} />
                    <Image source={require('../assets/images/peopleMasInfo.png')} style={{ width: 240, height: 160 }} />
                    <View style={{ padding: 20, backgroundColor: '#2c98e0', borderRadius: 20, maxWidth: 280 }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Fija tus ojos hacia adelante en lo qué puedes hacer, no hacia atrás en lo que ya no puedes cambiar
                        </Text>
                        <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                            #ESTÁBIENPEDIRAYUDA
                        </Text>
                    </View>
                    <Image source={require('../assets/images/lineaLarge.png')} style={{ width: 280, height: 140, borderRadius: 20, marginTop: 10 }} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default MasInformacion;
