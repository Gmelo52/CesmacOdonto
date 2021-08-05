import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Splash = ({
    navigation,
}) => {
    useEffect(() =>{
        setTimeout(()=>{
            navigation.navigate('inicio')
        }, 3000);
    }, [])

    return (
        <LinearGradient colors={['rgba(8, 172, 232,0.2)', 'rgba(8, 172, 232,0.05)']} style={{left: 0, right: 0, top: 0, height:'100%',}}>
            <View style={{alignItens:'center', justifyContent:'center',alignItems:'center', width:'100%', height:'100%', flex:.95}}>
                <Image source={require('../../assets/logo.png')} style={{width:170, height: 170, resizeMode: 'contain',}}/>
            </View>
            <View style={{flex:.08}}>
                <ActivityIndicator size="small" color="#2f4f95" />
            </View>
        </LinearGradient>
    );
}

export default Splash;