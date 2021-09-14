//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import firebase from "../../config/firebase";
import "firebase/firestore";
import LoadSeg from "../../components/loadSeg";

const CadGest = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [load, setload] = useState(false);
  const [msg, setmsg] = useState("");
  const db = firebase.firestore();

  async function cadastro() {
    setload(true);
    try {
      let usuarioCad = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);
      await db.collection("usuarios").doc(usuarioCad.user.uid).set({
        nome: nome,
        email: email,
        tipo: "gest",
      });
    } catch (erro) {
      setmsg("Verifique os campos digitados");
    }
    setload(false);
  }

  return load == true ? (
    <LoadSeg />
  ) : (
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
            Gestante
          </Text>
          <Text
            style={{ color: "red", alignSelf: "center", fontWeight: "500" }}
          >
            {msg}
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Nome Completo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#c4c4c4"
              onChangeText={(nome) => {
                setNome(nome);
              }}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#c4c4c4"
              onChangeText={(email) => {
                setEmail(email);
              }}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={(senha) => {
                setSenha(senha);
              }}
            />
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
            <TouchableOpacity
              style={styles.btnDentista}
              onPress={() => {
                cadastro();
              }}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default CadGest;
