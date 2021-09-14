import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/pages/login";
import CadGest from "./src/pages/cadastroGest";
import CadDent from "./src/pages/cadastroDent";
import HomeGest from "./src/pages/homeGest";
import Video from "./src/pages/videoPage"
import VideoDent from './src/pages/videoDent'
import MitosGest from "./src/pages/mitosGest"
import MedGest from "./src/pages/medGest"
import PnoGest from "./src/pages/pnoGest"
import AltGest from "./src/pages/altGest"
import Inicio from "./src/pages/inicio"
import LoginDent from "./src/pages/loginDent";
import HomeDent from "./src/pages/homeDent";
import PnoDent from "./src/pages/pnoDent";
import AtenDent from "./src/pages/atenDent";
import MedDent from "./src/pages/medDent"

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="loginDent"
          component={LoginDent}
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
          options={{ headerShown: false, animationEnabled:false}}
        />
        <Stack.Screen
          name="homeDent"
          component={HomeDent}
          options={{ headerShown: false, animationEnabled:false }}
        />
        <Stack.Screen
          name="video"
          component={Video}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="videoDent"
          component={VideoDent}
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
        <Stack.Screen
          name="inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pnoDent"
          component={PnoDent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="atenDent"
          component={AtenDent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="medDent"
          component={MedDent}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
