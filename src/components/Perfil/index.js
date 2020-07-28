import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { Container, Card, Status } from './styles';

import ProgressBar from '../ProgressBar';

import add from '../../assets/img/ACTIONS/add1_nor.png';

// import pessoa from '../../assets/img/Perso/pessoa.png';
import btnTag from '../../assets/img/ACTIONS/btnTag.png';
import delay from '../../assets/img/ACTIONS/actionTag_Delay_en.png';

const status = true;
const pessoaVez = true;
const base64 =
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgARwMBIgACEQEDEQH/xAAtAAADAQEBAAAAAAAAAAAAAAAAAQIDBAYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA9NiQCRVOQu8nG5IYpqpaYOZNXlZoIMi0SDMo6COfZ2WATPTzCApuWNqizQjlkMx2GioFvQAAP//EACAQAQADAAICAgMAAAAAAAAAAAEAAhEDEBIgEzEhMFH/2gAIAQEAAT8AXI3XrZs8meTK36u650+1GPuQcentSprK8tbm1dJ5wd6vpVyGtTsG1UtK8VeOnjSAhk49h65MnhAyV+5Yx/RQnJTSInsGwMny2tb8VTJbks2+rStrljRZarv1PF/kKWhxwA6//8QAGhEAAQUBAAAAAAAAAAAAAAAAAQIRICIxQP/aAAgBAgEBPwDkAsovsf/EABkRAAIDAQAAAAAAAAAAAAAAAAERACAhQP/aAAgBAwEBPwDkLQ2Cn//Z';

function Perfil({ perfil, position, cash /* onPress */ }) {
  // const pressionar = onPress;
  function press() {
    console.log('Pressionado');
  }
  switch (perfil) {
    case 'empty':
      switch (position) {
        case 1:
          return (
            <Container position="absolute" bottom="0%" alignSelf="center">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 2:
          return (
            <Container position="absolute" top="0%" left="20%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 3:
          return (
            <Container position="absolute" top="0%" right="20%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 4:
          return (
            <Container position="absolute" top="20%" left="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 5:
          return (
            <Container position="absolute" bottom="20%" left="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 6:
          return (
            <Container position="absolute" top="20%" right="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 7:
          return (
            <Container position="absolute" top="45%" right="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 8:
          return (
            <Container position="absolute" bottom="20%" right="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        case 9:
          return (
            <Container position="absolute" top="45%" left="0%">
              <TouchableOpacity onPress={() => press()}>
                <Image
                  source={add}
                  style={{ width: 64, height: 64, borderRadius: 32 }}
                />
              </TouchableOpacity>
            </Container>
          );
        default:
          return <View />;
      }

    case true:
      switch (position) {
        case 1:
          return (
            <Container position="absolute" bottom="0%" alignSelf="center">
              <Image
                source={{
                  uri: `https://randomuser.me/api/portraits/women/2.jpg`,
                }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 2:
          return (
            <Container position="absolute" top="0%" left="20%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 3:
          return (
            <Container position="absolute" top="0%" right="20%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 4:
          return (
            <Container position="absolute" top="20%" left="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 5:
          return (
            <Container position="absolute" bottom="20%" left="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 6:
          return (
            <Container position="absolute" top="20%" right="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 7:
          return (
            <Container position="absolute" bottom="40%" right="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 8:
          return (
            <Container position="absolute" bottom="20%" right="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        case 9:
          return (
            <Container position="absolute" bottom="40%" left="0%">
              <Image
                source={{ uri: `data:image/gif;base64,${base64}` }}
                style={{ width: 64, height: 64, borderRadius: 32 }}
              />
              {status && <Status source={delay} resizeMode="contain" />}
              {pessoaVez && (
                <Image
                  source={btnTag}
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    right: -35,
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              <ProgressBar porc="45" />
              <Card>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>Simão</Text>
                </View>
                <View style={{ height: '50%', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 10, color: '#fff' }}>{cash}</Text>
                </View>
              </Card>
            </Container>
          );
        default:
          return <View />;
      }
    default:
      return <View />;
  }
}

export default Perfil;
