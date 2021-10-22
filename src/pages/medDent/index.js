import React, { Component, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Sedacao from "../itensMenu/sedacao";
import Anest from "../itensMenu/anestesicos";
import Analge from "../itensMenu/analgesicos";
import Anti_inflamatorios from "../itensMenu/anti-inflamatorios";
import Antimicrobianos from "../itensMenu/antimicrobianos";
import Antifungicos from "../itensMenu/antifungicos";
import Antivirais from "../itensMenu/antivirais";

export default function MedDent() {
  const [cont, setCont] = useState(
    <View>
      <Text style={styles.textTitle}>
        Medicamentos
      </Text>
      <Text style={styles.textDesc}>
        O princípio que norteia a escolha da terapêutica a ser utilizada para
        gestantes é baseado nos ricos e benefícios para o feto e a mãe. {"\n"}
        Para auxiliar a escolha da melhor opção farmacoterapêutica em pacientes
        gestantes, o FDA (Food and Drug Administration) órgão que fiscaliza e
        estabelece normas para o uso seguro de medicamentos nos Estados Unidos
        propôs uma classificação em 5 categorias: A, B, C, D e X, considerando
        os ricos e seus efeitos na gestação. No Brasil, o Ministério da Saúde
        (MS) adota esse mesmo critério de classificação e categorização dos
        medicamentos.{"\n"}
      </Text>
      <Image
        source={require("../../assets/imgTab.png")}
        style={styles.imgTab}
      />
      <Text>{"\n"}{"\n"}{"\n"}</Text>
    </View>
  );
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
          <View style={styles.menuScroll}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Sedacao/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Sedação</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Anest/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Anestésicos Locais</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Analge/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Analgésicos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Anti_inflamatorios/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Anti-inflamatórios</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Antimicrobianos/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Antimicrobianos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Antifungicos/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Antifungicos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={()=>{setCont(<Antivirais/>)}}>
                <View>
                  <Text allowFontScaling={false} style={styles.textMenu}>Antivirais</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>{cont}</ScrollView>
        </View>
      </View>
    </View>
  );
}
