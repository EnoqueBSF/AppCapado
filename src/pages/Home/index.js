/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */
import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
// import WS from 'reactjs-autobahn';
// import { useApp } from '../../Contexts/AppContext';
// import { SERVER_URL } from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import AB from '../../assets/lib/autobahn.js';

import { Content } from './styles';

import table from '../../assets/img/ACTIONS/table_no_dealer.png';

// Details

import Deck   from '../../components/Deck';
import Perfil from '../../components/Perfil';

import chipBet from '../../assets/img/ACTIONS/chip_bet.png';

function Home() {
  const [deck, setDeck] = useState([]);
  const [dadosMesa, setDadosMesa] = useState([]);
  const [show, setShow] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [posicaoMesa, setPosicaoMesa] = useState([]);
  
  var session;
  const sep = String.fromCharCode(30);

  const [mesasAtiva, setMesasAtiva] = useState([]);
  const [mesaAtual, setMesaAtual]   = useState([]);

  function handlePosicaoMesa(mensagem) {
    let posicao = [...posicaoMesa]
    let ativo = false;

    console.log(`Posicao`, posicao)
    console.log(`Mensagem`, mensagem)
    if(posicaoMesa.length === 0) {
      setPosicaoMesa([mensagem])
    }

    posicaoMesa.map((posMesa, index) => {
      mensagem.mesa === posMesa.mesa ? ativo = true : false
      if(ativo){
        posicao[index] = mensagem
        setPosicaoMesa(posicao)
      } else {
        posicao = [...posicao, mensagem]
        setPosicaoMesa(posicao)
      }
    })

  }

  
    useEffect(() => {
    
        session = new ab.Session('wss://ambot.sgs.bet/websocket_poker', 
          function(){
            console.log('ab session connected');
            subscribe_to('poker');  
            publish_to('poker','tu é fei jao jao');
          },function(code,reason){
            console.log('ab session gone '+code,reason);
          });

        subscribe_to = function(chan){
          session.subscribe(chan, function(channel,event){
            console.log(channel,event);
            console.log(`-------------------------------`)
            
            let mensagem = event.split(sep)
            mensagem[1] = JSON.parse(mensagem[1])
            // console.log(`Console > ${event}`)
            switch(mensagem[0]) {
              case `mesas`: 
                setMesas(mensagem[1])
                break;
              case `posicaoMesa`:
                handlePosicaoMesa(mensagem[1])
                break;
              default:
                console.log(mensagem[0])
            }
          });

          publish_to = function(chan,msg) {
            session.publish(chan,msg);   
          }
      
      };    

      setTimeout(function(){
        publish_to("poker","listarMesas"+sep);
      },2000);
    
    }, []);

    
    setInterval(function(){
      publish_to("poker","ping"+sep);
    },5000);


  function handlePressShow(mesa, i) {
    console.log(mesa)
    publish_to(`poker`, `dadosMesa${sep}${JSON.stringify(mesa)}`)
    const shows = [...show];
    shows[i] = !show[i];
    setShow(shows);
    setMesaAtual(mesa);
    let ativa;
    let active = false;
    mesasAtiva.map((mesaAtiva) => {
      mesaAtiva === mesa ? (ativa = true) : (ativa = false);
      ativa ? (active = true) : false;
      return shows;
    });
    active
      ? console.log(`Mesa ${mesa} já está ativa`)
      : setMesasAtiva([...mesasAtiva, mesa]);
    console.log(show);
    console.log('mesasAtiva', mesasAtiva);
  }

  function handlePress(mesa, i) {    // console.log(mesa)
    var parametros = { mesa: mesa.id };

    publish_to(`poker`, `dadosMesa${sep}${JSON.stringify(parametros)}`)
    const shows = [...show];
    shows[i] = !show[i];
    setShow(shows);
    setMesaAtual(mesa.id);
    let ativa;
    let active = false;
    mesasAtiva.map((mesaAtiva) => {
      mesaAtiva === mesa.id ? (ativa = true) : (ativa = false);
      ativa ? (active = true) : false;
      return shows;
    });
    active
      ? console.log(`Mesa ${mesa.id} já está ativa`)
      : setMesasAtiva([...mesasAtiva, mesa.id]);
    console.log(show);
    console.log('mesasAtiva', mesasAtiva);
  }

  function handlePressHidden() {
    console.log(`Proccess Hidden => atual: ${mesaAtual}`);
    const shows = [...show];
    mesas.map((mesa, i) => {
      if (mesa.id === mesaAtual) {
        shows[i] = !show[i];
        setShow(shows);
        setMesaAtual(0);
      }
      return shows;
    });
  }

  return (
    <>
      <SafeAreaView style={{ flex: 8 }}>
        {/* Header Inicio */}
        <View
          style={{
            flex: 0.5,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#222',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
            }}
          >
            <View style={{ width: '60%' }}>
              <ScrollView horizontal>
                {mesasAtiva.map((mesaAtiva, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor: 'green',
                      paddingVertical: '2%',
                      paddingHorizontal: 20,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginHorizontal: 2,
                    }}
                    onPress={() => handlePressShow(mesaAtiva, index)}
                  >
                    <Text style={{ color: 'white' }}>PLO {index + 1}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                paddingVertical: '2%',
                width: '15%',
                borderRadius: 20,
                alignItems: 'center',
              }}
              onPress={() => handlePressHidden()}
            >
              <Text style={{ color: 'white' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Header Fim */}
        <View style={{ flex: 6, backgroundColor: 'green' }}>
          {/* <Orquestrador>

          </Orquestrador> */}
          <ScrollView
            style={{ backgroundColor: 'white', flex: 1, width: '100%' }}
          >
            {mesas.map((mesa, index) => (
              <Content
                onPress={() => handlePress(mesa, index)}
                activeOpacity={0.8}
                key={mesa.id}
              >
                <Image
                  source={table}
                  style={{ resizeMode: 'stretch', width: 160, height: 200 }}
                />
                <Text>Id: {mesa.id}</Text>
                <Text>Stage: {mesa.stage}</Text>
                <Text>Deck: {mesa.deck}</Text>
              </Content>
            ))}
          </ScrollView>
        </View>
        {/* Footer Início */}
        <View
          style={{
            flex: 0.5,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#222',
            paddingBottom: '2%',
          }}
        >
          <TouchableOpacity
            style={{
              height: '80%',
              width: '30%',
              borderRadius: 5,
            }}
          >
            <LinearGradient
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
              colors={['#053024', '#3BA97E']}
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#333',
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                    opacity: 0.7,
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '75%',
                  height: '100%',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                  }}
                >
                  F/C
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: '80%',
              width: '30%',
              borderRadius: 5,
            }}
          >
            <LinearGradient
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
              colors={['#053024', '#3BA97E']}
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#333',
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                    opacity: 0.7,
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '75%',
                  height: '100%',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                  }}
                >
                  Check
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: '80%',
              width: '30%',
              borderRadius: 5,
            }}
          >
            <LinearGradient
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 0.0, y: 0.0 }}
              colors={['#053024', '#3BA97E']}
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#333',
                    borderRadius: 10,
                    height: 20,
                    width: 20,
                    opacity: 0.7,
                  }}
                />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '75%',
                  height: '100%',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                  }}
                >
                  Pagar
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* Footer Fim */}
      </SafeAreaView>

      {/* Details */}

      {mesas.map(
        (mesa, i) =>

          show[i] && (
            <SafeAreaView
              style={{
                width: '100%',
                height: '85%',
                backgroundColor: '#222',
                top: '7%',
                position: 'absolute',
              }}
              key={mesa.id}
            >
              {/* Table */}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={table}
                  style={{
                    resizeMode: 'stretch',
                    width: '130%',
                    height: '100%',
                  }}
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
                    <Perfil
                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[1] : undefined}
                      position={1}
                      onPress={() => console.log(posicaoMesa)}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[2] : undefined}
                      position={2}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[3] : undefined}
                      position={3}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[4] : undefined}
                      position={4}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[5] : undefined}
                      position={5}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[6] : undefined}
                      position={6}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[7] : undefined}
                      position={7}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[8] : undefined}
                      position={8}
                    />
                    <Perfil

                      perfil={posicaoMesa[i] != null ? posicaoMesa[i].players[9] : undefined}
                      position={9}
                    />
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
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 8,
                        }}
                      />
                      <Image
                        source={chipBet}
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 7,
                        }}
                      />
                      <Image
                        source={chipBet}
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 5,
                        }}
                      />
                      <Image
                        source={chipBet}
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 3,
                        }}
                      />
                      <Image
                        source={chipBet}
                        style={{
                          width: 20,
                          height: 20,
                          position: 'absolute',
                          top: 1,
                        }}
                      />
                    </View>
                    <Text style={{ color: 'white' }}>17,194.87 - [{i}]</Text>
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
              <Text style={{ color: '#fff' }}>{dadosMesa}</Text>
            </SafeAreaView>
          )
      )}
    </>
  );
}

export default Home;
