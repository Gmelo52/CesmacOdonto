import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./styles";

const HomeGest = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          source={require("../../assets/LogoGest.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.boxBtn}>
        <View style={styles.viewBoasVindas}>
          <Text style={styles.text}> Seja bem vindo(a), Guilherme.</Text>
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
