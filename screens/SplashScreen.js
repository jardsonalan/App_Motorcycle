import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, View } from 'react-native';

export default function SplashScreen({ navigation }) {
    const startAnimation = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(startAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Principal');
      });
    }, []);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.Image
          source={require('./asset_logo/Moto_BuscApp.png')}
          style={{
            width: 350,
            height: 120,
            opacity: startAnimation,
            transform: [
              {
                scale: startAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
  