import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function Anti_inflamatorios() {
  return (
    <View>
      <Text style={styles.textTitle}>Anti-inflamatórios</Text>
      <Text style={styles.textDesc}>
        Em geral não se recomenda o uso de anti-inflamatórios a gestante, pois o
        uso dos AINEs no último trimestre da gravidez está associado ao
        prolongamento do trabalho de parto, devido à inibição da síntese de
        prostaglandinas relacionadas às contrações uterinas, fechamento
        prematuro do ducto arterial do feto, além de alterações na circulação
        pulmonar e redução do fluxo sanguíneo renal (ANDRADE, 2014).{"\n"}
        {"\n"}
        Sugestão clínica:{"\n"}O fármaco deve ser utilizado como coadjuvante no
        controle do processo inflamatório, o principal objetivo do tratamento é
        remover a causa. Diante dos riscos citados com o uso de
        anti-inflamatórios, medidas locais como utilizar gelo nas 48 horas após
        o procedimento e água morna após essa fase, devem ser adotadas.Em casos
        onde o risco do uso do medicamento a gestante e ao feto vale o seu
        benefício.{"\n"}
        {"\n"}
        <Text style={{fontWeight:'bold'}}>PREDNISONA – (ex.: METICORTEN®) CATEGORIA B</Text>{"\n"}
        {"\n"}- Apresentação: Comprimidos de 5 mg.{"\n"}- Posologia: um
        comprimido de 5mg a cada 6 horas.{"\n"}- Indicação: proporciona potente
        efeito anti-inflamatório, antirreumático e antialérgico no tratamento de
        doenças que respondem a corticosteroides.{"\n"}- Contraindicação:
        pacientes com infecções sistêmicas por fungos, hipersensibilidade à
        prednisona ou a outros corticosteroides ou a quaisquer componentes de
        sua fórmula.{"\n"}
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
