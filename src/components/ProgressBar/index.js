import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

const ProgressBar = ({ porc }) => {
  return (
    <View
      style={{
        height: 7,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: '-45%',
        borderRadius: 5,
        alignItems: 'flex-start',
      }}
    >
      <View
        style={{
          height: 7,
          width: `${porc}%`,
          backgroundColor: 'yellow',
          position: 'absolute',
          borderRadius: 5,
          // borderTopLeftRadius: 5,
          // borderBottomLeftRadius: 5,
        }}
      />
    </View>
  );
};

export default ProgressBar;
