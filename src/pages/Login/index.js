/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

// import logo from '../../assets/img/logo.png';

import { H2, H3 } from '../../assets/styles/global';

import InputForm from '../../components/InputForm';

import api from '../../services/api';

const Login = () => {
  const navigation = useNavigation();

  // const [user, setUser] = useState({});

  useEffect(() => {
    async function loading() {
      const user = await AsyncStorage.getItem('user@membro');

      if (user) {
        navigation.navigate('Dashboard');
      }
    }

    loading();
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
  };

  async function handleLogin() {
    await AsyncStorage.setItem('user@membro', JSON.stringify(username));

    navigation.navigate('Dashboard');
  }

  async function handleSubmit() {
    if (username === '' || password === '') {
      showToastWithGravity('Campos em branco.');
      return;
    }
    const dados = {
      logar: true,
      key: 'apiv1vale',
      u: username,
      p: password,
    };

    console.log(dados);

    await api.post('login.php', dados).then((res) =>
      // eslint-disable-next-line no-nested-ternary
      res.data.logado === true
        ? handleLogin()
        : showToastWithGravity('Usuário ou Senha errado')
    );

    setUsername('');
    setPassword('');
  }

  function handleCreate() {
    // navigation.navigate('Register');
  }

  return (
    <LinearGradient
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1, y: 0.0 }}
      colors={['#0BAB64', '#3BB78F']}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: 'space-evenly',
          paddingHorizontal: 25,
          paddingVertical: 25,
        }}
      >
        <View
          style={{
            alignItems: 'center',
          }}
        >
          {/* <Image source={logo} /> */}
          <H2 color="#fff" fontSize="28px">
            PokerCapado
          </H2>
        </View>

        <View style={{ alignItems: 'center' }}>
          <InputForm
            color="#fff"
            value={username}
            onChangeText={setUsername}
            placeholder="Usuário"
            width="90%"
          />
          <InputForm
            color="#fff"
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            paddingTop={10}
            width="90%"
          />

          <TouchableOpacity
            style={{
              width: '70%',
              backgroundColor: '#666',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 50,
              marginTop: 30,
            }}
            onPress={handleSubmit}
          >
            <H3 color="#fff">Entrar</H3>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#5D6162',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 50,
              marginTop: 60,
            }}
            onPress={handleCreate}
          >
            <H3 color="#fff">Criar conta</H3>
          </TouchableOpacity> */}
        </View>
        <View style={{ height: 50 }} />
      </View>
    </LinearGradient>
  );
};

export default Login;
