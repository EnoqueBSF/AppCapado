import styled from 'styled-components/native';

export const H1 = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '36px')};
  color: ${(props) => (props.color ? props.color : '#4d4d4d')};
`;

export const H2 = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
  color: ${(props) => (props.color ? props.color : '#4d4d4d')};
`;

export const H3 = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  color: ${(props) => (props.color ? props.color : '#4d4d4d')};
`;

export const H4 = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  color: ${(props) => (props.color ? props.color : '#4d4d4d')};
`;

export const H5 = styled.Text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '10px')};
  color: ${(props) => (props.color ? props.color : '#4d4d4d')};
`;