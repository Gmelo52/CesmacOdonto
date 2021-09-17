import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
} from "react-native";
import styles from "./styles";
import firebase from "../../config/firebase";
import "firebase/firestore";
import LoadSeg from "../../components/loadSeg";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const [load, setload] = useState(false);

  const db = firebase.firestore();

  async function loginFirebase() {
    setload(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setMsg("Verifique usuário ou senha");
        setload(false);
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setload(true);
      if (user != null) {
        await db
          .collection("usuarios")
          .doc(user.uid)
          .get()
          .then((usuario) => {
            if (usuario.data().tipo == "gest") {
              navigation.navigate("homeGest");
            } else {
              navigation.navigate("homeDent");
            }
          });
      }
      setload(false);
      setMsg("");
    });
  }, []);

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
        <View style={styles.boxLogin}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: "#0B486B",
              textAlign:'right',
              marginHorizontal: 20,
            }}
          >
            Login
          </Text>
          <Text
            style={{ color: "red", alignSelf: "center", fontWeight: "500" }}
          >
            {msg}
          </Text>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#c4c4c4"
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              value={email}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={{ color: "#0B486B" }}>Senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={(senha) => setSenha(senha)}
              value={senha}
            />
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
              onPress={() => loginFirebase()}
            >
              <Text style={{ fontSize: 24, color: "#0B486B" }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxCadastro}>
          <View style={styles.textCad}>
            <TouchableOpacity onPress={() => navigation.navigate("cadGest")}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#747474", fontSize: 18 }}>
                  Cadastre-se como
                </Text>
                <Text
                  style={{ color: "#747474", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Gestante
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("cadDent")}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#747474", fontSize: 18 }}>
                  Cadastre-se como
                </Text>
                <Text
                  style={{ color: "#747474", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Profissional
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
