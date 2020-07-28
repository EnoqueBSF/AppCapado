import styled from 'styled-components/native';

export const Container = styled.View`
  background: #d7d7d7;
  width: 100%;
  height: 45px;
  border-radius: 25px;
`;

export const Progress = styled.View`
  position: absolute;
  background: #67d965;
  height: 100%;
  width: ${(props) => `${props.progress}%`};
  border-radius: 25px;
  z-index: 5;
`;

export const Number = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const LabelMenor = styled.Text`
  font-size: 13px;
  color: #000;
`;