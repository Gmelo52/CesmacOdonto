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

const HomeGest = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const db = firebase.firestore();
  async function getNome() {
    const docUser = await db
      .collection("usuarios")
      .doc(firebase.auth().currentUser.uid)
      .get();
    const dados = docUser.data();
    setNome(dados.nome);
  }

  useEffect(() => {
    getNome();
  }, []);

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
          <Text style={styles.text}> Seja bem vinda, {nome}.</Text>
        </View>
        <View style={styles.viewBtns}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate("mitosGest")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon5.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Mitos e Verdades</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("medGest")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn.png")}
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
            <TouchableOpacity onPress={() => navigation.navigate("pnoGest")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon1.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Importancia PNO</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("altGest")}>
              <View style={styles.btn}>
                <ImageBackground
                  source={require("../../assets/bgBtn.png")}
                  style={styles.imgBtn}
                  imageStyle={{ borderRadius: 10 }}
                >
                  <Image
                    source={require("../../assets/icon2.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.titleBtn}>Alterações</Text>
                  <Text style={styles.descBtn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.viewBoasVindas}>
          <Text style={styles.text}> Vídeo</Text>
        </View>
        <View style={styles.btnVideo}>
          <ImageBackground
            source={require("../../assets/btnVideo.png")}
            style={styles.imgBtn}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.viewBtnVideo}>
              <View style={{ alignContent: "center" }}>
                <Text style={styles.titleBtn}>Como escovar</Text>
                <Text style={styles.descBtn}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("video")}>
                <Image
                  source={require("../../assets/play.png")}
                  style={{ width: 40, height: 40, marginHorizontal: 15 }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

export default HomeGest;
