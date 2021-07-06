//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ImageBackground
        source={require("../../assets/inicioBG.png")}
        style={styles.background}
      >
        <View style={styles.boxLogo}>
          <Image
            source={require("../../assets/LogoGest.png")}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.boxLogin}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#0B486B",
              marginLeft: 20,
            }}
          >
            Login
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#c4c4c4"
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Senha:</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <View style={styles.botoesLogin}>
            <View style={styles.social}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/logoGoogle.png")}
                  style={styles.btnSocial}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/logoFace.png")}
                  style={styles.btnSocial}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/logoApple.png")}
                  style={styles.btnSocial}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnLogin} onPress={() =>navigation.navigate("homeGest")}>
                <Text style={{ fontSize: 24, color: "#0B486B" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxCadastro}>
          <View style={styles.textCad}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#0B486B" }}>
              Cadastre-se
            </Text>
          </View>
          <View style={styles.contBtn}>
            <TouchableOpacity
              style={styles.btnGestante}
              onPress={() => navigation.navigate("cadGest")}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>Gestante</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnDentista}
              onPress={() => navigation.navigate("cadDent")}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>Dentista</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
