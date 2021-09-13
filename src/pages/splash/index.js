import React from 'react'
import { View, Text } from 'react-native'
import LoadSeg from '../../components/loadSeg'
import LottieView from 'lottie-react-native';

export default function Splash() {
    return (
        <View>
                  <LottieView
        resizeMode="contain"
        autoSize
        source={require('../../../Splash.json')}
        autoPlay
        loop
      />
        </View>
    )
}
