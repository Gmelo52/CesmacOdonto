import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function Antifungicos() {
  return (
    <View>
      <Text style={styles.textTitle}>Antifungicos</Text>
      <Text style={styles.textDesc}>
        Podem ser administrados apenas quando os benefícios à gestante
        justificarem o risco potencial ao feto. Sempre que possível escolher a
        opção de via tópica.{"\n"}
        {"\n"}
        Sugestão clínica usual:{"\n"}
        {"\n"}
        <Text style={{fontWeight:'bold'}}>MICONAZOL (ex.: DAKTARIN® gel oral) CATEGORIA C</Text>{"\n"}
        {"\n"}
        - Apresentação: Gel de 20 mg/g de miconazol em bisnaga com 40 g.
- Posologia: A aplicação pode ser feita com o auxílio de uma haste flexível recoberta com algodão
(Cotonete®) ou de uma gaze enrolada no dedo indicador. Deve-se espalhar uniformemente a
quantidade de gel necessária para cobrir toda a área da mucosa bucal afetada.{"\n"}
- Indicação: indicado para o tratamento terapêutico e profilático da candidíase da cavidade
bucofaríngea.{"\n"}
- Contraindicação: Este medicamento é contraindicado para uso por pacientes com
hipersensibilidade ao miconazol, aos excipientes da formulação, ou a outros derivados imidazólicos
e pacientes com disfunção hepática.{"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  contHeader: {
    width: "100%",
    height: "30%",
    backgroundColor: "#79BD9A",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  contTextTitle: {
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 30,
  },
  descTitle: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 35,
    marginLeft: 30,
  },
  icon: {
    width: 80,
    height: 80,
    alignSelf: "center",
    right: 30,
    top: 10,
  },
  contDesc: {
    marginTop: -25,
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewText: {
    width: "85%",
    height: "90%",
    marginTop: 25,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3B8686",
    marginVertical: 10,
  },
  textDesc: {
    fontWeight: "500",
    fontSize: 12,
    color: "#3B8686",
    textAlign: "justify",
  },
  menuScroll: {
    backgroundColor: "rgba(121, 189, 154, 0.3)",
    borderRadius: 30,
    width: "100%",
    height: altura / 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemMenu: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: largura / 3,
    height: "70%",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  textMenu: {
    color: "#3B8686",
    fontWeight: "bold",
  },
  imgTab: {
    width: "100%",
    height: altura / 3.2,
    alignSelf: "center",
    resizeMode: "stretch",
  },
});
