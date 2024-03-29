import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DatosInteres = () => {

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
            <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                Datos cuantitativos de interés
            </Text>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text>
                    La Organización Mundial de la Salud define el suicidio como “un fenómeno
                    multideterminado” (OMS, 2018), según esta organización aproximadamente 800.000
                    personas en el mundo mueren a causa del suicidio. En las Américas, se estima que
                    aproximadamente 100.000 se quitan la vida anualmente, según los últimos datos
                    disponibles. La mayoría de los suicidios en la región se producen en personas de entre 25 y
                    44 años (36%), y en aquellas de entre 45 y 59 años (26%). En Colombia según, el boletín
                    estadístico mensual de medicina legal a diciembre del 2021, 2.595 personas había muerte
                    por suicidio, aunque se aprecia una leve disminución en comparación con los años 2018 y
                    2019. Según Infobae, la población más vulnerable se encuentre entre los 15 y 24 años. En
                    cuanto al género, los hombres siguen ocupando el primer puesto en suicidios. De acuerdo
                    con las estadísticas, la tasa de mortalidad de hombres es de 8,9 muertes por cada 100.000
                    habitantes, un porcentaje de 64,8 % mientras que el de mujeres fue de 6,9 fallecimientos,
                    un 63 %.
                </Text>
                <Text style={{ marginTop: 10 }}>
                    En Colombia y según el boletín epidemiológico semanal (250de abril y mayo de 2021) 1 . Se
                    observa aumento en la proporción de la mayoría de los factores de riesgo, y disminución en
                    la mayoría de los factores desencadenantes presentes en los intentos de suicidio. Los
                    mecanismos utilizados en el intento de suicidio conservan el mismo orden. Las tasas de
                    incidencia más altas de intento de suicidio se encuentran en las entidades territoriales del
                    eje cafetero (Caldas, Quindío, Risaralda), Tolima, Huila, Putumayo, Caquetá Nariño, y
                    Casanare. Asimismo, durante el año 2020, los 6 mayores centros urbanos de Caldas:
                    Manizales, Villamaría, La Dorada, Chinchiná, Anserma y Riosucio presentan la mayor
                    vulnerabilidad para el evento tanto por el riesgo como por impacto.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default DatosInteres;
