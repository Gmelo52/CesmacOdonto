import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function AltGest() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text style={styles.title}>Alterações fisiológicas</Text> 
          <Text style={styles.descTitle}>
            Alterações fisiológicas da gestação
          </Text>
        </View>
        <Image source={require("../../assets/icon2.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>
              Alterações fisiológicas da gestação
            </Text>
            <Text style={styles.textDesc}>
              As mudanças físicas preparam a mulher para o parto e a
              amamentação, afinal, o corpo está se preparando para desenvolver
              um novo ser humano. Essas mudanças repercutem em diversos
              segmentos, e, entre elas, estão:{"\n"}
              {"\n"}
              Primeiro Trimeste:{"\n"}- Enjoos matinais;{"\n"}- Aumento dos
              seios;{"\n"}- Cansaço e sonolência;{"\n"}- Aumento da frequência
              cardíaca e respiratória;{"\n"}- Alargamento dos quadris;{"\n"}
              {"\n"}
              Segundo Trimeste:{"\n"}- Aumento da parte inferior do abdômen;
              {"\n"}- Inchaço dos tornozelos (pela diminuição do retorno
              venoso).{"\n"}- Relaxamento dos ligamentos do corpo;{"\n"}
              {"\n"}
              Terceiro Trimestre:{"\n"}- Pressão sobre a bexiga;{"\n"}- Aumento
              da frequência urinária;{"\n"}- Diminuição do volume respiratório
              (pela compressão do diafragma);{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
