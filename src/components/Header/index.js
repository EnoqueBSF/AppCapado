import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

const Header = ({ change, index, id }) => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '40%',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            paddingVertical: '2%',
            width: '40%',
            borderRadius: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>PLO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            paddingVertical: '2%',
            width: '40%',
            borderRadius: 20,
            alignItems: 'center',
          }}
          onPress={() => change(id, index)}
        >
          <Text style={{ color: 'white' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
