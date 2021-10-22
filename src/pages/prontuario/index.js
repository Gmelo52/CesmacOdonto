import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,Linking } from "react-native";
import styles from "./styles";
import IconFA from "react-native-vector-icons/FontAwesome5";

export default function Prontuario() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text allowFontScaling={false} style={styles.title}>Prontuário</Text>
          <Text allowFontScaling={false} style={styles.descTitle}>
           
          </Text>
        </View>
        <Image source={require("../../assets/icon6.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>Prontuário Odontológico</Text>
            <Text style={styles.textDesc}>
              O prontuário odontológico é um conjunto de documentos destinado ao
              registro sobre o paciente, como informações pessoais, através da
              anamnese, o exame clínico, o diagnóstico do caso, o plano e a
              evolução do tratamento. Além disso, mantem o controle e a
              preservação dos atendimentos prestados ao paciente, fazendo com
              que o Cirurgião-dentista esteja assegurado dos procedimentos
              realizados.{"\n"}
              {"\n"}
              Desse modo, como a gestante é considerado um atendimento que
              requer cuidados especiais, o CD necessita estar capacitado para
              realizar os procedimentos de forma segura, visando o bem-estar da
              gestante e do feto. Com isso, o protocolo adequado faz-se de
              extrema importância, visto que as ferramentas diagnósticas e
              terapêuticas (como radiografias e as administrações
              farmacológicas) são criteriosas e restritas para esse grupo.{"\n"}
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.fab} onPress={() => {
                  Linking.openURL(
                    "https://drive.google.com/file/d/1t--A8M9DDwk6yYy1MQMDTDKmkH2TpzEH/view?usp=sharing"
                  );
                }}>
            <IconFA name="file-medical" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
