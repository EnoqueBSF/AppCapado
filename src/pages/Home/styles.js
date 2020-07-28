import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// import { Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

export const Content = styled.TouchableOpacity`
  width: 40%;
  height: 250px;
  background: ${(props) => (props.background ? props.background : '#C60D0D')};
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #fff;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Perfil = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Card = styled.View`
  position: absolute;
  width: 75px;
  height: 30px;
  background: #444;
  opacity: 0.9;
  border-style: solid;
  border-width: 1.5px;
  border-color: ${(props) => (props.active ? 'cyan' : 'red')};
  align-self: center;
  bottom: -15px;
  flex: 2;
  flex-direction: column;
`;

export const Status = styled.Image`
  position: absolute;
  bottom: 0px;
  left: -10px;
  width: 80%;
  height: 80%;
`;
