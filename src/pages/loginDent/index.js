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

const LoginDent = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
    >
      <ImageBackground
        source={require("../../assets/DentBG.png")}
        style={styles.background}
      >
        <View style={styles.boxLogin}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#79BD9A",
              marginLeft: 20,
            }}
          >
            Login
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#c4c4c4"
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#79BD9A" }}>Senha:</Text>
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
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => navigation.navigate("homeDent")}
            >
              <Text style={{ fontSize: 24, color: "#79BD9A" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxCadastro}>
          <View style={styles.textCad}>
            <TouchableOpacity onPress={() => navigation.navigate("cadDent")}>
            <Text style={{ fontSize: 20, fontWeight: "500", color: "#79BD9A" }}>
              Cadastre-se
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginDent;
