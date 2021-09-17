import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import splashImg from "../../assets/SplashFade.json";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const nav = useNavigation();
  function navigate() {
    nav.reset({
      index: 0,
      routes: [{ name: "login" }],
    });
  }
  return (
    <LottieView
      onAnimationFinish={() => navigate()}
      style={{ backgroundColor: "white" }}
      source={splashImg}
      autoPlay
      loop={false}
    />
  );
}
