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

const HomeDent = ({ navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.navigate("medGest")}>
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
            <TouchableOpacity onPress={() => navigation.navigate("pnoGest")}>
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
        </View>
      </View>
    </View>
  );
};

export default HomeDent;
