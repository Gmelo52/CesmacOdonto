import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

export default function Antimicrobianos() {
  return (
    <View>
      <Text style={styles.textTitle}>Antimicrobianos</Text>
      <Text style={styles.textDesc}>
        Em casos de infecções bacterianas, o principal tratamento consiste na
        remoção da causa, como a drenagem de um abcesso periodontal ou
        endodôntico. Se as infecções apresentarem sinais locais de disseminação
        e manifestações sistêmicas do processo (febre, mal-estar geral ou
        linfadenopatia satélite), deve-se complementar a descontaminação local
        com o uso sistêmico de antibióticos (ANDRADE, 2014).{"\n"}
        {"\n"}
        Tetraciclinas são contraindicadas, pois atravessam a membrana
        placentária e são capazes de se ligar à hidroxiapatita, provocando uma
        coloração que vai do amarelo-claro ao marrom-escuro e que pode afetar os
        dentes decíduos (YAFFE et al., 1975; TREDWIN et al., 2005; SCIUBBA et
        al., 2012). Essas drogas também podem ser depositadas no tecido ósseo do
        feto, provocando retardo no crescimento, durante as primeiras semanas do
        pós-parto, e podem induzir anemia hemolítica ou icterícia no neonato
        (VASCONCELOS; VASCONCELOS; MAFRA, 2012).{"\n"}
        {"\n"}
        Sugestão clínica usual:{"\n"}
        {"\n"}
        <Text style={{fontWeight:'bold'}}>AMOXICILINA - (ex.: AMOXIL®) CATEGORIA B</Text>{"\n"}
        {"\n"}- Apresentação: cápsulas de 500 mg.{"\n"}- Posologia: uma cápsula
        de 500 mg, três vezes ao dia (de 8 em 8 horas).{"\n"}- Indicação:
        antibiótico de amplo espectro indicado para o tratamento de infecções
        bacterianas causadas por germes sensíveis à ação da amoxicilina.{"\n"}-
        Contraindicação: a amoxicilina é uma penicilina e não deve ser
        administrada a pacientes com histórico de hipersensibilidade a
        antibióticos betalactâmicos (p. ex. penicilinas e cefalosporinas).{"\n"}
        {"\n"}
        <Text style={{fontWeight:'bold'}}>CLINDAMICINA – (ex.: DALACIN C®) CATEGORIA B</Text>{"\n"}
        {"\n"}
        - Apresentação: cápsulas de 300mg.{"\n"}
- Posologia: uma cápsula de 300mg de 6 em 6 horas ou 8 em 8 horas.{"\n"}
- Indicação: indicado no tratamento das infecções causadas por bactérias anaeróbicas susceptíveis,
por cepas susceptíveis de bactérias aeróbias Gram-positivas como estreptococos, estafilococos e
pneumococos.{"\n"}
- Contraindicação: contraindicado a pacientes que já apresentaram hipersensibilidade à
clindamicina ou à lincomicina ou a qualquer componente da fórmula.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
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
