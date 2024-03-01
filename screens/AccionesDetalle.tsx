import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccionesDetalle = ({ route }) => {

    const { senales, img } = route.params;

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={img} style={{ width: '100%' }} />
            <Pressable style={{ position: 'absolute', left: 10, top: 70, padding: 5 }} onPress={() => navigation.goBack()}>
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
            </View>
        </SafeAreaView>
    );
};

export default AccionesDetalle;
