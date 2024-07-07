import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

const MitosSuicidio = () => {
  const [hasAudio, setHasAudio] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation: any = useNavigation();

  const setAudio = async () => {
    setLoading(true);
    await TrackPlayer.add([
      {
        url: 'https://audio.jukehost.co.uk/dJCwmi9F0sLvqOyCaZxYunSnMTKsx1KG',
      },
    ]).then(() => {
      setLoading(false);
      setHasAudio(true);
    });
  };

  const playAudio = () => {
    TrackPlayer.play();
    setPlaying(true);
  };

  const pauseAudio = () => {
    TrackPlayer.pause();
    setPlaying(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#adadad', marginBottom: 20}}>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 10,
            alignSelf: 'flex-start',
          }}
          onPress={() => {
            TrackPlayer.reset();
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/backButton.png')}
            style={{width: 30, height: 15}}
          />
        </Pressable>
      </View>
      <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
        Mitos y creencias sobre el suicidio
      </Text>
      <ScrollView style={{paddingHorizontal: 20, marginTop: 20}}>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          {loading ? (
            <ActivityIndicator size="small" />
          ) : !hasAudio ? (
            <Pressable onPress={setAudio}>
              <Image
                source={require('../assets/images/escucharPodcast.png')}
                style={{width: 120, height: 55}}
              />
            </Pressable>
          ) : !playing ? (
            <Pressable style={{alignSelf: 'center'}} onPress={playAudio}>
              <Image
                source={require('../assets/images/playIcon.png')}
                style={{width: 30, height: 30}}
              />
            </Pressable>
          ) : (
            <Pressable style={{alignSelf: 'center'}} onPress={pauseAudio}>
              <Image
                source={require('../assets/images/pauseIcon.png')}
                style={{width: 30, height: 30}}
              />
            </Pressable>
          )}
        </View>
        <Text>
          <Text style={{fontWeight: '600'}}>
            El que se quiere matar no lo dice:
          </Text>{' '}
          criterio equivocado, pues conduce a no prestar atención a las personas
          que manifiestan sus ideas suicidas o amenazan con suicidarse. El
          criterio científico indica que de cada 10 personas que se suicidan,
          nueve de ellas manifestaron, claramente, sus propósitos y el otro dejo
          entre ver sus intenciones de acabar con su vida.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>El que lo dice no lo hace:</Text>{' '}
          criterio equivocado, ya que conduce a minimizar las amenazas suicidas,
          que pueden considerarse erróneamente como chantaje, manipulaciones,
          alardes, entre otros. El criterio científico nos dice que todo el que
          se suicida expresó lo que ocurría con palabras, amenazas, gestos o
          cambios de conducta.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>
            Si de verdad se hubiese querido matar, se hubiera tirado de un
            puente:
          </Text>{' '}
          criterio equivocado, que refleja la agresividad que genera estos
          individuos en aquellos que no están capacitados para abordarlos. El
          criterio científico indica que todo suicida se encuentra en una
          situación ambivalente, es decir, con deseos de vivir y de morir. El
          método elegido, no refleja los deseos de morir de quien lo utiliza y,
          proporcionarle, otro de mayor letalidad es calificado como un delito
          de auxilio suicida, penalizado por el código penal vigente.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>
            El sujeto que se repone de una crisis suicida no corre peligro
            alguno de recaer:
          </Text>{' '}
          criterio equivocado, que conduce a disminuir las medidas de
          observación estricta del sujeto y la evolución del riesgo suicida.
          Según el criterio científico casi la mitad de los que atravesaron por
          una crisis suicida y consumaron suicidio, lo llevaron a cabo después
          de los tres primeros intentos tras la crisis emocional, cuando todos
          creían que el peligro había pasado. Lo que ocurre es que cuando la
          persona mejora, sus movimientos se hacen más ágiles, están en
          condiciones de llevar varias vías de hecho, las ideas suicidas aún
          persisten antes, y debido a la inactividad o incapacidad de movimiento
          ágiles, no podía hacerlo.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>
            Todo el que se suicida está deprimido:
          </Text>{' '}
          criterio equivocado que relaciona el suicidio como sinónimo de la
          depresión, lo cual no se ajusta a los estrictos hallazgos. El criterio
          científico indica que, aunque toda persona deprimida tiene
          posibilidades de realizar un intento de suicidio o suicidio, no todos
          lo que lo hacen presentan este trastorno; la persona puede padecer
          esquizofrenias, alcoholismo, trastornos de carácter entre otros.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>
            Todo el que se suicida es un enfermo mental:
          </Text>{' '}
          criterio equivocado que intenta encasillar el suicidio como una
          enfermedad mental. Como criterio científico se encuentra que los
          enfermos mentales se suicidan con mayor frecuencia que la población en
          general, pero no necesariamente hay que padecer un trastorno mental
          para hacerlo. No cabe ninguna duda, todo suicida es una persona que
          sufre.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>El suicida desea morir:</Text>{' '}
          criterio equivocado que pretende justificar la muerte por suicidio de
          quienes lo comenten, y, por lo tanto, tarde o temprano lo llevará a
          cabo. Criterio científico: el suicida está en una posición
          ambivalente, es decir, desea morir si su vida continúa de la misma
          manera y desea vivir sin se produjeran pequeños cambios en ella; su se
          diagnóstica oportunamente esa ambivalencia, se pueden inclinar la
          balanza hacia la opción de vida.
        </Text>
        <Text>
          <Text style={{fontWeight: '600'}}>
            El que intenta el suicidio es un cobarde:
          </Text>{' '}
          criterio equivocado que pretende evitar el suicidio equiparándolo con
          una cualidad negativa de la personalidad. Criterio científico: los que
          intentan el suicidio no son cobardes sino personas que sufren.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MitosSuicidio;
