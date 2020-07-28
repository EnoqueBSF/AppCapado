/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
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
// import AB from '../../assets/lib/autobahn';

import { Content } from './styles';

import table from '../../assets/img/ACTIONS/table_no_dealer.png';

// Details

import Deck from '../../components/Deck';
import Perfil from '../../components/Perfil';

import chipBet from '../../assets/img/ACTIONS/chip_bet.png';

function Home() {
  const [deck, setDeck] = useState([]);
  const [dadosMesa, setDadosMesa] = useState([]);
  const [show, setShow] = useState([]);
  const [mesas, setMesas] = useState([
    { id: 157824, stage: 'pronto', deck: 'capado', show: false },
    { id: 157825, stage: 'pronto', deck: 'capado', show: false },
  ]);
  const [mesasAtiva, setMesasAtiva] = useState([]);
  const [cash, setCash] = useState([]);
  const [mesaAtual, setMesaAtual] = useState([]);
  const [mesaUsers, setMesaUsers] = useState([
    {
      user0: 'empty',
      user1: 'empty',
      user2: 'empty',
      user3: 'empty',
      user4: 'empty',
      user5: 'empty',
      user6: 'empty',
      user7: 'empty',
      user8: 'empty',
      user9: 'empty',
    },
    {
      user0: 'empty',
      user1: true,
      user2: 'empty',
      user3: 'empty',
      user4: true,
      user5: 'empty',
      user6: true,
      user7: 'empty',
      user8: 'empty',
      user9: 'empty',
    },
  ]);

  function handlePressShow(mesa, i) {
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
                onPress={() => handlePressShow(mesa.id, index)}
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
                      perfil={mesaUsers[i].user1}
                      cash={cash}
                      position={1}
                      onPress={() => console.log('Euu')}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user2}
                      cash={cash}
                      position={2}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user3}
                      cash={cash}
                      position={3}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user4}
                      cash={cash}
                      position={4}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user5}
                      cash={cash}
                      position={5}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user6}
                      cash={cash}
                      position={6}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user7}
                      cash={cash}
                      position={7}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user8}
                      cash={cash}
                      position={8}
                    />
                    <Perfil
                      perfil={mesaUsers[i].user8}
                      cash={cash}
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
