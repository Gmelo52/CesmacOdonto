import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import firebase from "../../config/firebase";
import "firebase/firestore";
import { useEffect } from "react";


const HomeDent = ({ navigation }) => {
  const [nome, setNome] = useState('') 
  const db = firebase.firestore()
  async function getNome() {
    const docUser = await db.collection('usuarios').doc(firebase.auth().currentUser.uid).get()
    const dados = docUser.data()
    setNome(dados.nome)
  }

  useEffect(()=>{
    getNome()
  },[])
  

  function logoutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("login");
      })
      .catch((error) => {
        alert("Erro, verifique a conexão");
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={() => {
            logoutFirebase();
          }}
        >
          <Icon
            name="logout"
            size={20}
            style={{ marginRight: 35, color: "#0B486B" }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/LogoGest.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.boxBtn}>
        <View style={styles.viewBoasVindas}>
          <Text style={styles.text}> Seja bem vindo(a), {nome}.</Text>
        </View>
        <View style={styles.viewBtns}>
          <View style={styles.viewLinha}>
            <TouchableOpacity onPress={() => navigation.navigate("pnoDent")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn2.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon1.png")}
                    style={styles.icon}
                  />
                  <View style={styles.viewTextBtn}>
                    <Text style={styles.titleBtn}>Importancia PNO</Text>
                    <Text style={styles.descBtn}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("medDent")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn2.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon4.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Medicamentos</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewLinha}>
            <TouchableOpacity onPress={() => navigation.navigate("atenDent")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn2.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon7.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Atendimento</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("altGest")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn2.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon6.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Prontuário</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.btnVideo}>
            <ImageBackground
              source={require("../../assets/bgBtn2.png")}
              style={styles.imgBtn}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.viewVideo}>
                <View style={{ alignContent: "center" }}>
                  <Text style={styles.titleBtn}>Como escovar</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("videoDent")}
                >
                  <Image
                    source={require("../../assets/play2.png")}
                    style={{ width: 40, height: 40, marginHorizontal: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeDent;
