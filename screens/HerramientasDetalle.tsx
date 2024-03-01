import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HerramientasDetalle = ({ route }) => {
    const { senales, img, title, hasItems } = route.params;

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image source={img} style={{ width: '100%' }} />
                <Pressable style={{ position: 'absolute', left: 10, top: 10, padding: 5 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/backButton.png')} style={{ width: 30, height: 15 }} />
                </Pressable>
                <Image source={require('../assets/images/logoAppWhite.png')} style={{ position: 'absolute', right: 10, top: 10, padding: 5, width: 40, height: 30 }} />
                <View
                    style={{
                        backgroundColor: '#f0f0f0',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        marginTop: -90,
                        height: '100%',
                        paddingHorizontal: 40,
                        alignItems: 'center'
                    }}
                >
                    <View style={{ width: 200, height: 10, backgroundColor: '#2c97de', borderRadius: 5 }} />
                    <Text style={{ color: '#2c97de', marginTop: 10, textAlign: 'center' }}>{title}</Text>
                    <View style={{ marginTop: 20 }}>
                        {senales.map((s, index) => (
                            <View key={index} style={{ flexDirection: 'row', marginTop: hasItems ? 0 : 10 }}>
                                {hasItems && <Text style={{ marginRight: 10 }}>◦</Text>}
                                <Text>{s}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HerramientasDetalle;
