/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Animated, View, Image } from 'react-native';

// import { Container } from './styles';

import common_c_2 from '../../assets/img/CARDS/common_c_2.png';
import common_c_3 from '../../assets/img/CARDS/common_c_3.png';
import common_c_4 from '../../assets/img/CARDS/common_c_4.png';
import common_c_5 from '../../assets/img/CARDS/common_c_5.png';
import common_c_6 from '../../assets/img/CARDS/common_c_6.png';

const Deck = ({ card, sequence }) => {
  const [margin, setMargin] = useState(new Animated.Value(-200));
  const mais = sequence * 42.5;
  useEffect(() => {
    Animated.timing(margin, {
      toValue: 0 + mais,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  switch (card) {
    case 'common_c_2':
      return (
        <Animated.Image
          style={{ flex: 1, height: '90%', position: 'absolute', left: margin }}
          resizeMode="contain"
          source={common_c_2}
        />
      );
    case 'common_c_3':
      return (
        <Animated.Image
          style={{ flex: 1, height: '90%', position: 'absolute', left: margin }}
          resizeMode="contain"
          source={common_c_3}
        />
      );
    case 'common_c_4':
      return (
        <Animated.Image
          style={{ flex: 1, height: '90%', position: 'absolute', left: margin }}
          resizeMode="contain"
          source={common_c_4}
        />
      );
    case 'common_c_5':
      return (
        <Animated.Image
          style={{ flex: 1, height: '90%', position: 'absolute', left: margin }}
          resizeMode="contain"
          source={common_c_5}
        />
      );
    case 'common_c_6':
      return (
        <Animated.Image
          style={{ flex: 1, height: '90%', position: 'absolute', left: margin }}
          resizeMode="contain"
          source={common_c_6}
        />
      );

    default:
      return <View />;
  }
};

export default Deck;
