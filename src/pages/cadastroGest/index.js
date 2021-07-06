//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";

const CadGest = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ImageBackground
        source={require("../../assets/inicioBG.png")}
        style={styles.background}
      >
        <View style={styles.boxLogo}></View>
        <View style={styles.boxLogin}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#0B486B",
              marginLeft: 20,
            }}
          >
            Paciente
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Nome Completo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#c4c4c4"
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#c4c4c4"
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Senha:</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>
          <View style={styles.botoesLogin}>
            <View style={styles.social}></View>
          </View>
        </View>
        <View style={styles.boxCadastro}>
          <View style={styles.textCad}></View>
          <View style={styles.contBtn}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={{ color: "#000", fontSize: 18 }}>
                Já é cadastrado?
              </Text>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}>
                {" "}
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDentista}>
              <Text style={{ fontSize: 24, color: "#fff" }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default CadGest;
