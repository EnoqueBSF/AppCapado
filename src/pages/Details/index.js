/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import { useRoute } from '@react-navigation/native';

import SoundPlayer from 'react-native-sound-player';
import Deck from '../../components/Deck';

// import { H1, H4 } from '../../assets/styles/global';
// import { Perfil, Card, Status } from './styles';
import Perfil from '../../components/Perfil';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import table from '../../assets/img/ACTIONS/table_no_dealer.png';

import chipBet from '../../assets/img/ACTIONS/chip_bet.png';

function Details() {
  const [deck, setDeck] = useState([]);
  const [dados_mesa, setDados_mesa] = useState();

  const principal = 'poker';
  const sep = String.fromCharCode(30);
  const route = useRoute();
  const { mesa_id, sessi } = route.params;

  function onPublish(channel, publish) {
    console.log(publish);
    sessi.publish(channel, publish);
  }

  function dadosMesa() {
    const dados = { mesa: mesa_id };
    onPublish(principal, `dadosMesa${sep}${JSON.stringify(dados)}`);
  }

  // const params = { mesa, nick: 'EnoqueF', fichas: 192, position: 1 };
  useEffect(() => {
    sessi.subscribe(mesa_id, (uri, payload) => {
      const mensagem = payload.split(sep);
      switch (mensagem[0]) {
        case 'posicaoMesa':
          console.log(JSON.parse(mensagem[1]));
          setDados_mesa(JSON.parse(mensagem[1]));
          break;

        default:
          console.log(`mensagem: [${mensagem[0]}]`);
      }
    });

    dadosMesa();
  }, []);

  function pegarCartas() {
    onPublish('pegarCartas');
  }

  function entrar() {
    onPublish('entrar');
  }

  function posicaoMesa() {
    onPublish('posicaoMesa');
  }

  function darCheck() {
    onPublish('pegarCartas');
  }

  function onChangeDadosMesa() {
    const dados = { mesa: mesa_id };
    onPublish(principal, `dadosMesa${sep}${JSON.stringify(dados)}`);
  }
  function onChangeDados() {
    const dados = { mesa: mesa_id };
    onPublish(principal, `dadosMesa${sep}${JSON.stringify(dados)}`);
  }

  function onPressSound() {
    try {
      SoundPlayer.playSoundFile('slider_btn', 'mp3');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
      <Header />
      {/* Table */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={table}
          style={{ resizeMode: 'stretch', width: '130%', height: '100%' }}
        />
        {/* Perfis */}
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: '5%',
            paddingTop: '13%',
            paddingBottom: '20%',
            justifyContent: 'center',
          }}
        >
          <View style={{ width: '100%', height: '100%' }}>
            <Perfil perfil="empty" position={1} />
            <Perfil perfil="empty" position={2} />
            <Perfil perfil="empty" position={3} />
            <Perfil perfil="empty" position={4} />
            <Perfil perfil="empty" position={5} />
            <Perfil perfil="empty" position={6} />
            <Perfil perfil="empty" position={7} />
            <Perfil perfil="empty" position={8} />
            <Perfil perfil="empty" position={9} />
          </View>
        </View>
        {/* Cards */}
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            paddingTop: 0,
            paddingBottom: '31%',
            justifyContent: 'center',
          }}
        >
          {/* <Deck card={1}/> */}
          <View
            style={{
              flexDirection: 'row',
              height: '12.5%',
              width: '70%',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {deck.map((card, index) => (
              <Deck key={index} card={card} sequence={index} />
            ))}
          </View>
        </View>
        {/* Pot */}
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            paddingBottom: '70%',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            // onPress={}
            style={{
              backgroundColor: '#555',
              paddingHorizontal: 5,
              borderRadius: 15,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                position: 'absolute',
                justifyContent: 'center',
                left: '-4%',
                top: -7,
              }}
            >
              <Image
                source={chipBet}
                style={{ width: 20, height: 20, position: 'absolute', top: 8 }}
              />
              <Image
                source={chipBet}
                style={{ width: 20, height: 20, position: 'absolute', top: 7 }}
              />
              <Image
                source={chipBet}
                style={{ width: 20, height: 20, position: 'absolute', top: 5 }}
              />
              <Image
                source={chipBet}
                style={{ width: 20, height: 20, position: 'absolute', top: 3 }}
              />
              <Image
                source={chipBet}
                style={{ width: 20, height: 20, position: 'absolute', top: 1 }}
              />
            </View>
            <Text style={{ color: 'white' }}>17,194.87</Text>
          </TouchableOpacity>
          <Text style={{ color: 'white' }}>Pot: 17,194.87</Text>
        </View>
        {/* Info baixo */}
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            paddingBottom: '0%',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', opacity: 0.5 }}>
            OMAHA 500 {'  '} Blinds: 5/10
          </Text>
          <Text style={{ color: 'white', opacity: 0.5 }}>
            GPS e IP. Tempo Decretado 60 mins
          </Text>
          <Text style={{ color: 'white', opacity: 0.5 }}>
            Bater várias vezes
          </Text>
        </View>
      </View>
      <Text style={{ color: '#fff' }}>{dados_mesa}</Text>
      <Footer />
    </SafeAreaView>
  );
}

export default Details;
