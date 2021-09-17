import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function Anest() {
  return (
    <View>
      <Text style={styles.textTitle}>Anestésicos Locais</Text>
      <Text style={styles.textDesc}>
        A administração do anestésico local deve ser feita por meio de uma
        injeção lenta da solução, com aspiração prévia para evitar a injeção
        intravascular, e com a técnica anestésica adequada, para evitar a
        necessidade de repetições.{"\n"}
        {"\n"}A prilocaína é contraindicada para uso em gestantes, uma vez que
        possui capacidade de atravessar a placenta com velocidade superior aos
        demais sais anestésicos disponíveis no mercado brasileiro e ter a
        capacidade em doses elevadas de provocar metahemoglobinemia materna e ou
        fetal. Além de estar associado a um vasoconstritor derivado da
        vasopressina (felipressina), que, por sua semelhança estrutural com a
        ocitocina, em doses bem elevadas, poderia agir sobre a musculatura lisa
        uterina e causar contrações.{"\n"}
        {"\n"}
        Sugestão clínica:{"\n"}<Text style={{fontWeight:'bold'}}>CLORIDRATO DE LIDOCAÍNA + EPINEFRINA (ex.:
        ALPHACAÍNE®) CATEGORIA B </Text>{"\n"}
        {"\n"}
        Apresentação: Solução estéril injetável de Cloridrato de lidocaína 2%
        (20mg/mL) + Epinefrina 1:100.000 acondicionada em tubetes de vidro de
        1,8 mL.{"\n"}
        {"\n"}
        Indicação: Anestesia local por bloqueio de nervo ou por infiltração,
        para intervenções odontológicas em geral, extrações múltiplas, próteses
        imediatas e procedimentos endodônticos e procedimentos periodontais
        simples e complexos.{"\n"}
        {"\n"}
        Contraindicação: O uso do produto em pacientes com conhecida
        hipersensibilidade aos componentes da fórmula ou que estejam fazendo uso
        de medicamentos que sabidamente provocam alterações na pressão
        sanguínea, como inibidores da monoaminoxidase (IMAO), antidepressivos
        tricíclicos e fenotiazinas.
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
