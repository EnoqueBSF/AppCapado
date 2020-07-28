import styled from 'styled-components/native';

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Container = styled.View`
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
