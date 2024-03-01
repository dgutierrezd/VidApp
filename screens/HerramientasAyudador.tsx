import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const HerramientasAyudador = () => {
    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image source={require('../assets/images/herramientasAyudador.png')} style={{ width: '100%' }} />
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
                    paddingTop: 30,
                    paddingHorizontal: 40,
                    alignItems: 'center'
                }}
            >
                <Text>Herramientas para el ayudador</Text>
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
                                title: '¿Qué debemos hacer cuando la persona se encuentra en la clínica después de un intento de suicidio?',
                                senales: [
                                    "Facilitar toda la información posible a los profesionales que están atendiendo el caso, sin ocultar datos importantes que puedan ayudar a evaluar los motivos de la conducta suicida. Esta información puede ser: intentos previos de suicidios, antecedentes familiares frente a esta conducta suicida, trastornos mentales y tratamiento actuales, información sobre las circunstancias que posiblemente llegaron al intento suicida, etc.",
                                    "Reconocer, aceptar y no culpabilizar a la persona por haber realizado esta conducta, mantener una actitud empática y de escucha hacia la persona.",
                                    "Mantenerse tranquilos para no dramatizar el problema, buscar soluciones prácticas para la prevención de una posible repetición del acto.",
                                    "Sacar provecho de la hospitalización para analizar en familia las posibles causas, soluciones y roles de los integrantes de la familia para mitigar una posible repetición del acto"
                                ],
                                hasItems: false,
                                img: require('../assets/images/herramientas1.png'),
                                url: 'https://audio.jukehost.co.uk/kZac0EKFZVnbnCMW5n8v9DkhUIW8WdTE',
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué debemos hacer cuando la persona se encuentra en la clínica después de un intento de suicidio?
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
                                title: '¿Qué debemos hacer cuando una persona regresa a casa después de un intento suicida?',
                                senales: [
                                    "Tomar las recomendaciones dadas por los profesionales sanitarios.",
                                    "No culpabilizar ni tomar represalias frente a lo ocurrido.",
                                    "Identificar los medios que pueden generar riesgos para cometer de nuevo el acto.",
                                    "Saber que esto es un proceso y que se requiere de paciencia para que la persona y sus familiares vuelvan a cobrar la confianza de su cotidianidad.",
                                    "Proporcionar tareas en el hogar, universidad y trabajo para facilitar el proceso de adaptación social.",
                                    "Acudir a psicoterapia y estar bajo control de profesionales de la salud mental.",
                                    "Buscar grupos de apoyo desde sus propios intereses personales para retomar su día a día y que puedan contar con alguien para sentirse escuchado y no juzgado.",
                                    "No subestimar el riesgo de la conducta suicida, pero tampoco estar pendiente de él, intentar y resignificar la vida y vivirla con mayor sentido.",
                                    "El cuidador o las personas que están en un relacionamiento constante con la persona que cometió el acto, en lo posible tener espacios para recargar su energía vital o si es necesario buscar ayuda de un profesional, ya que esto genera tensión, desgaste físico y psicológico."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas2.png'),
                                url: 'https://audio.jukehost.co.uk/aasOd0XZSoqkycHko2U7ZUqosDCtFc0a'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué debemos hacer cuando una persona regresa a casa después de un intento suicida?
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
                                title: '¿Qué debemos hacer para ayudar a un familiar o amigo a enfrentarse a la muerte de un ser querido debido al suicidio?',
                                senales: [
                                    "No buscar culpables de lo sucedido ni hacer juicios de otras personas",
                                    "Hablar con la persona como con cualquier otra que pierde a un ser querido",
                                    "Dejar que la persona se exprese y manifieste sus sentimientos y emociones",
                                    "Hacerle saber que usted está preocupado y que está dispuesto a ayudar en lo que se requiera",
                                    "Dejar que hable cuando se sienta preparado para hacerlo",
                                    "Ofrecer apoyo en las actividades cotidianas, como compras, cuidado de niños, entre otros.",
                                    "Apoyar, con acciones simples como un abrazo, caminar juntos, dar un paseo, entre otros",
                                    "Continuar brindando apoyo a través del tiempo en fechas significativas, como cumpleaños, aniversarios, entre otras.",
                                    "Solicitar ayuda, si también usted siente que necesita apoyo, tanto con familia como con profesionales del área de la salud.",
                                    "Decir que lo siente tan pronto como sea posible.",
                                    "Hablar de la persona fallecida y de lo valiosa que era para usted.",
                                    "Evitar preguntas acerca de los detalles de la muerte."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas3.png'),
                                url: 'https://audio.jukehost.co.uk/gzMNkcN8q2pjzohLcbPXIoyPjBwnBV6R'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué debemos hacer para ayudar a un familiar o amigo a enfrentarse a la muerte de un ser querido debido al suicidio?
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
                                title: '¿Qué debemos hacer para ayudar a la familia después de que un ser querido ha tenido un intento de suicidio?',
                                senales: [
                                    "Se debe generar un entorno de seguridad y confianza por parte de la familia, para que la persona se sienta apoyada y acogida en el seno familiar",
                                    "Fomentar las habilidades de comunicación familiar.",
                                    "Disminuir las situaciones que generen estrés y sobrecarga familiar.",
                                    "Ayudar a la solución de problemas en el seno familiar.",
                                    "Estimular la restauración de los roles sociales y familiares.",
                                    "Romper el aislamiento social y el estigma de las familias de personas con enfermedad mental.",
                                    "Se pueden crear en la ciudad escuelas de familia que responda a las necesidades de formación, información y apoyo información apoyo a las familias, amigos y allegados.",
                                    "También se pueden generar grupos de ayuda que contribuyan a: Brindar orientación a familiares de cómo afrontar los problemas de convivencia diaria y las situaciones de crisis.",
                                    "Desarrollar conductas y actitudes positivas."
                                ],
                                hasItems: true,
                                img: require('../assets/images/herramientas4.png'),
                                url: 'https://audio.jukehost.co.uk/s9jmFOqX0Ppxs6c5sH0PRLA4tP2H30oA'
                            })
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: '#2c97de'
                        }}>
                            ¿Qué debemos hacer para ayudar a la familia después de que un ser querido ha tenido un intento de suicidio?
                        </Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
};

export default HerramientasAyudador;
