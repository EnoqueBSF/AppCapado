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

  var session;

(function(){
    console.log('Oi joe !!!');
    session = new ab.Session('wss://ambot.sgs.bet/websocket_poker', 
      function(){
        console.log('ab session connected');
        subscribe_to('poker');  
        publish_to('poker','tu é fei jao jao jao jao ');
      },function(code,reason){
        console.log('ab session gone '+code,reason);
      });
    subscribe_to = function(chan){
      session.subscribe(chan, function(channel,event){
        console.log(channel,event);
        console.log(`Console > ${event}`)
        setDisplay([...displays, event])
      });

      publish_to = function(chan,msg) {
        session.publish(chan,msg);   
      }
    };
  });
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

  function addParams() {

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
     
      <Footer />
    </SafeAreaView>
  );
}

export default Details;
