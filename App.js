import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./src/pages/splash"
import Login from "./src/pages/login";
import CadGest from "./src/pages/cadastroGest";
import CadDent from "./src/pages/cadastroDent";
import HomeGest from "./src/pages/homeGest";
import Video from "./src/pages/videoPage"
import MitosGest from "./src/pages/mitosGest"
import MedGest from "./src/pages/medGest"
import PnoGest from "./src/pages/pnoGest"
import AltGest from "./src/pages/altGest"

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadGest"
          component={CadGest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cadDent"
          component={CadDent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeGest"
          component={HomeGest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="video"
          component={Video}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mitosGest"
          component={MitosGest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="medGest"
          component={MedGest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pnoGest"
          component={PnoGest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="altGest"
          component={AltGest}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
