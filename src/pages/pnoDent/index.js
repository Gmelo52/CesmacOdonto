import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function PnoDent() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text allowFontScaling={false} style={styles.title}>Importância do PNO</Text>
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
              Importância do pré-natal odontológico
            </Text>
            <Text style={styles.textDesc}>
              As gestantes são um grupo que passam por alterações fisiológicas
              consideradas normais, mas que podem apresentar mudanças
              psicológicas, as quais geram receio ao tratamento odontológico
              durante este período que, junto a outros fatores próprios da
              gravidez (como mudanças na alimentação e/ou enjoo ao escovar os
              dentes), contribuem para o aparecimento de patologias orais. {"\n"}Com
              isso, é de extrema importância que o Cirurgião-Dentista saiba
              reconhecer as peculiaridades da gestação, a fim de evitar os
              possíveis efeitos negativos associados à saúde tanto da gestante
              quanto do neonato (PRADO et al., 2019). {"\n"}{"\n"}PRADO, Letícia et al.
              CONDUTA DE CIRURGIÕES-DENTISTAS NO ATENDIMENTO À PACIENTE
              GESTANTE. Revista Científica da UNIFENAS-ISSN: 2596-3481, v. 1, n.
              3, 2019.{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
