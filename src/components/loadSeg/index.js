import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import segonha from "../../assets/segonha2.json";

export default function LoadSeg() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0B486B", 
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        <LottieView
        style={{width:200, height:200}}
          resizeMode="contain"
          source={segonha}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}
