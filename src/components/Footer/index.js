import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

// import { Container } from './styles';

const Header = () => {
  return (
    <View
      style={{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
  );
};

export default Header;
