import React from 'react';
import { View, TextInput } from 'react-native';

import { H2, H3 } from '../../assets/styles/global';

// import { Container, Progress, Number, Label, LabelMenor } from './styles';

const InputForm = ({
  value,
  onChangeText,
  label,
  keyboardType,
  width,
  placeholder,
  maxLength,
  paddingVertical,
  paddingTop,
  color,
  fontSize,
  secure,
}) => {
  return (
    <View style={{ paddingVertical, width, paddingTop }}>
      {label && (
        <H3 color={color} fontSize={fontSize || '25px'}>
          {label}
        </H3>
      )}
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secure || false}
        value={value}
        maxLength={maxLength || 60}
        onChangeText={(text) => onChangeText(text)}
        style={{
          backgroundColor: '#d7d7d7',
          height: 50,
          borderRadius: 25,
          paddingHorizontal: 20,
          fontFamily: 'Montserrat Regular',
          fontSize: 18,
          color: '#000',
        }}
      />
    </View>
  );
};

export default InputForm;