import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function MedGest() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text style={styles.title}>Medicamentos</Text>
          <Text style={styles.descTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <Image source={require("../../assets/icon4.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>
              Meus dentes perdem cálcio para transferir ao meu bebê?
            </Text>
            <Text style={styles.textDesc}>
              Mito!{"\n"}
              Os dentes não participam do metabolismo sistêmico do cálcio da mãe
              e, por isso, o conteúdo mineral dos dentes da grávida não
              apresentam diminuição do teor de cálcio.{"\n"}
            </Text>
            <Text style={styles.textTitle}>
              É comum perder dentes na gestação?
            </Text>
            <Text style={styles.textDesc}>
              Mito!{"\n"}A saúde bucal precisa ser acompanhada durante a
              gravidez, assim como antes dela. Não há nenhum processo que deixe
              os dentes mais frágeis, justificando sua perda. Procure seu
              dentista e faça o pré-natal odontológico!{"\n"}
            </Text>
            <Text style={styles.textTitle}>É normal a gengiva sangrar?</Text>
            <Text style={styles.textDesc}>
              Mito!{"\n"}Não é normal que a gengiva sangre. A gravidez, por si
              só, não causa gengivite. A gengivite na gestação é causada pela
              placa bacteriana, da mesma forma que em mulheres não-grávidas.
              Entretanto, a gravidez acentua a resposta gengival para a placa.
              {"\n"}
            </Text>
            <Text style={styles.textTitle}>
              Radiografia odontológica faz mal ao bebê?
            </Text>
            <Text style={styles.textDesc}>
              Mito!{"\n"}A quantidade de radiação utilizada para exame
              radiográfico dentário está muito abaixo dos níveis prejudiciais ao
              seu bebê. Além disso, existem os equipamentos de proteção
              individual, como coletes de chumbo, que vão protegê-lo muito bem.
              {"\n"}
            </Text>
            <Text style={styles.textTitle}>
              Consumo de álcool durante a gestação faz mal?
            </Text>
            <Text style={styles.textDesc}>
              Verdade!{"\n"}O consumo de álcool durante a gestação é
              extremamente prejudicial ao desenvolvimento do bebê. Uma de suas
              consequências é a Síndrome do Alcoolismo Fetal (SAF), que podem
              causar:{"\n"}- Baixo peso ao nascimento;{"\n"}- Microcefalia;
              {"\n"}- Dificuldade de aprendizagem, linguagem, memória e atenção;
              {"\n"}- QI baixo;{"\n"}- Alterações na visão e audição;{"\n"}-
              Distúrbios comportamentais;{"\n"}- Atrasos de desenvolvimento
              cognitivo;{"\n"}- Alterações neurológicas;{"\n"}- Alterações
              físicas (hipoplasia maxilar, nariz curto, lábio superior fino,
              filtro nasal longo e hipoplásico).
              {"\n"}
            </Text>
            <Text style={styles.textTitle}>
              Consumo de cigarro durante a gestação faz mal?
            </Text>
            <Text style={styles.textDesc}>
              Verdade!{"\n"}Fumar já é um hábito nocivo. Durante a gravidez,
              então, é ainda pior. O cigarro possui dezenas de químicos
              cancerígenos capazes de alterar seu organismo e o do seu bebê. As
              consequências podem ser:{"\n"}- Aborto espontâneo;
              {"\n"}- Defeitos genéticos;{"\n"}- Nascimento prematuro;{"\n"}-
              Baixo peso ao nascimento;{"\n"}- Morte súbita;{"\n"}- Alergias e
              infecções respiratórias;{"\n"}- Deslocamento da placenta;{"\n"}-
              Complicações na gravidez.{"\n"}
            </Text>
            <Text style={styles.textTitle}>
              Consumo de drogas durante a gestação faz mal?
            </Text>
            <Text style={styles.textDesc}>
              Verdade!{"\n"}A maioria das drogas ultrapassa a barreira
              placentária. Ou seja: se você as consome, seu bebê também estará,
              indiretamente, consumindo. Os riscos são grandes:{"\n"}- Ruptura
              precoce das membranas;{"\n"}- Parto prematuro;{"\n"}- Aborto
              espontâneo;{"\n"}- Baixo peso ao nascimento;{"\n"}- Maior
              predisposição para doenças e infecções das vias respiratórias;
              {"\n"}- Quadros de dependência no bebê (dificuldades para sucção,
              choro mais fácil, irritabilidade maior);{"\n"}- Atraso e/ou
              déficits do desenvolvimento intelectual;{"\n"}- Diminuição da
              circunferência craniana;{"\n"}- Déficit de atenção e
              hiperatividade;{"\n"}- Transtornos de conduta.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
