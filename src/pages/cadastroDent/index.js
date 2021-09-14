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
} from "react-native";
import styles from "./styles";
import firebase from "../../config/firebase";
import "firebase/firestore";
import LoadSeg from "../../components/loadSeg";

const CadDent = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cro, setCro] = useState("");
  const [msg, setmsg] = useState("");
  const [load, setload] = useState(false);
  const db = firebase.firestore();

  async function cadastro() {
    setload(true)
    try {
      let usuarioCad = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);
      await db.collection("usuarios").doc(usuarioCad.user.uid).set({
        nome: nome,
        email: email,
        cro: cro,
        tipo: "dent",
      });
    } catch (erro) {
      setmsg("Verifique os campos digitados");
    }
    setload(false)
  }
  return load == true ? (
    <LoadSeg />
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ImageBackground
        source={require("../../assets/DentBG.png")}
        style={styles.background}
      >
        <View style={styles.boxLogo}></View>
        <View style={styles.boxLogin}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#79BD9A",
              marginLeft: 20,
            }}
          >
            Profissional
          </Text>
          <Text
            style={{ color: "red", alignSelf: "center", fontWeight: "500" }}
          >
            {msg}
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Nome Completo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#747474"
              onChangeText={(nome) => {
                setNome(nome);
              }}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Número CRO:</Text>
            <TextInput
              style={styles.input}
              placeholder="CRO"
              keyboardType="numeric"
              placeholderTextColor="#747474"
              onChangeText={(cro) => {
                setCro(cro);
              }}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#747474"
              autoCapitalize="none"
              onChangeText={(email) => {
                setEmail(email);
              }}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Senha:</Text>
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
              <Text style={{ color: "#747474", fontSize: 18 }}>
                Já é cadastrado?
              </Text>
              <Text
                style={{ color: "#747474", fontWeight: "bold", fontSize: 18 }}
              >
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

export default CadDent;
