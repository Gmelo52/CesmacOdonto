//import liraries
import React from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

const Inicio = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ImageBackground
        source={require("../../assets/inicioBG1.png")}
        style={styles.background}
      >
        <View style={styles.boxLogo}>
          <Image
            source={require("../../assets/LogoGest.png")}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.boxBtn}>
          <View style={styles.contBtn}>
            <TouchableOpacity
              style={styles.btnGestante}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>Gestante</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnDentista}
              onPress={() => navigation.navigate("loginDent")}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>Profissional</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Inicio;
