import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function Analge() {
  return (
    <View>
      <Text style={styles.textTitle}>Analgésicos</Text>
      <Text style={styles.textDesc}>
        Em casos de procedimentos pouco invasivos, a resposta inflamatória é
        simples e autolimitada, podendo ser prescrito um analgésico de ação
        periférica. Importante ressaltar que o tratamento medicamentoso das
        infecções odontogênicas é coadjuvante e não resolve o problema por si
        só, quando o processo doloroso já está instalado, a principal conduta é
        remover a causa.{"\n"}
        {"\n"}
        PARACETAMOL – (ex.: TYLENOL®) CATEGORIA B{"\n"}
        {"\n"}- Apresentação: Comprimidos revestidos 500mg e 750mg.{"\n"}-
        Posologia: Um comprimido de 500mg de 4 em 4 horas, ou de 6 em 6 horas.
        OU Um comprimido de 750 mg de 6 em 6 horas.{"\n"}
        {"\n"}{"\n"}
        Não ultrapassar a dose diária total recomendada de 4g.{"\n"}{"\n"}
        - Indicação: analgésico, para dores leves a moderadas, e antitérmico.{"\n"}
        - Contraindicação: não deve ser administrado a pacientes com hipersensibilidade ao paracetamol
ou a qualquer outro componente de sua fórmula.{"\n"}

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
