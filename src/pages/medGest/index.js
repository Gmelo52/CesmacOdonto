import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function MedGest() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text allowFontScaling={false} style={styles.title}>Medicamentos</Text>
          <Text allowFontScaling={false} style={styles.descTitle}>

          </Text>
        </View>
        <Image source={require("../../assets/icon4.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>
            Medicamentos e gestação
            </Text>
            <Text style={styles.textDesc}>
              A gravidez é um período que exige muitos cuidados. Durante esse
              período a futura mamãe precisa ter cuidado redobrado, por isso NÃO
              use nenhum medicamento por conta própria e sem o conhecimento e
              autorização do seu médico, cirurgião-dentista ou enfermeiro. Pode
              ser perigoso para sua saúde e para a saúde do seu filho, podendo
              afetar o crescimento do feto durante a gestação, havendo risco de
              má-formação congênita e em alguns casos comprometimento do
              desenvolvimento funcional, social e intelectual da criança e, até,
              em casos extremos, a morte da mãe e/ou da criança.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
