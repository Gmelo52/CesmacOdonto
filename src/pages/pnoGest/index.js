import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function PnoGest() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text allowFontScaling={false} style={styles.title}>Importancia do PNO</Text>
          <Text allowFontScaling={false} style={styles.descTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <Image source={require("../../assets/icon1.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>
              Importancia do Pré-Natal Odontológico
            </Text>
            <Text style={styles.textDesc}>
              Muitos são os aspectos que fazem a saúde bucal ser importante na
              vida das gestantes. Em especial, existem diversos estudos que
              destacam um risco elevado de parto prematuro e baixo peso ao
              nascer em crianças cujas mães tiveram histórico de doença
              periodontal. Além disso, situações de estresse e dor neste período
              específico da vida da mulher são refletidos diretamente no
              bem-estar do bebê. {"\n"}Por isso, é de extrema importância o
              acompanhamento por um cirurgião-dentista através do Pré-Natal
              Odontológico.{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
