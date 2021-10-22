import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function AtenDent() {
  return (
    <View style={styles.container}>
      <View style={styles.contHeader}>
        <View style={styles.contTextTitle}>
          <Text allowFontScaling={false} style={styles.title}>Atend. Odontológico</Text>
          <Text allowFontScaling={false} style={styles.descTitle}>
           
          </Text>
        </View>
        <Image source={require("../../assets/icon7.png")} style={styles.icon} />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>
              Gestantes não podem receber anestesia local?
            </Text>
            <Text style={styles.textDesc}>
              SIM. As anestesias locais de uso odontológico podem ser utilizadas
              em pacientes gestantes.{"\n"}A utilização de fármacos por parte do
              cirurgião-dentista precisa ser criteriosa em todos os casos,
              avaliando prós e contras. {"\n"}Nas gestantes, em específico, é
              muito importante eliminar focos de infecção e dor, afinal, é
              prioridade evitar o sofrimento, a ansiedade e o estresse. {"\n"}As
              substâncias mais indicadas são: Lidocaína + epinefrina
              (alphacaíne®). {"\n"}O ideal é utilizar no máximo dois tubetes
              (3,6ml) por sessão, usando sempre seringa anestésica com refluxo,
              de forma a evitar injeções intravasculares.{"\n"}
            </Text>
            <Text style={styles.textTitle}>
              A radiografia para uso diagnóstico pode ser feita em gestantes?
            </Text>
            <Text style={styles.textDesc}>
              SIM. A radiação aplicada é muito pequena e não oferece risco para
              o bebê. A quantidade que poderia ser prejudicial para o feto seria
              equivalente a 500.000 (meio milhão) tomadas radiográficas. Logo, a
              gestante pode ficar tranquila caso haja necessidade de realizar
              uma radiografia odontológica.{"\n"}Caso haja necessidade de
              realização do exame, o profissional deve se atentar a algumas
              características, como técnicas de exposição rápida, filtração,
              colimação, utilização de avental de chumbo, além de não cometer
              erros técnicos na tomada da radiografia e no processamento do
              filme (revelação e fixação), evitando repetições desnecessárias.
              {"\n"}
            </Text>
            <Text style={styles.textTitle}>
              Erosão dentária associada a vômitos e enjôos
            </Text>
            <Text style={styles.textDesc}>
              A gestação está acompanhada, muitas vezes, pelos enjôos. Eles são
              mais frequentes durante o primeiro trimestre gestacional e no
              período matinal – podendo variar entre as mulheres e nas
              diferentes gestações de uma mulher. Por isso recomenda-se que as
              consultas sejam agendadas preferencialmente para a segunda metade
              do período da manhã, quando os episódios de enjôo são menos
              comuns.{"\n"}A erosão dentária é a perda de esmalte e dentina, não
              envolvendo bactérias, causada pela exposição frequente aos ácidos
              extrínsecos ou intrínsecos. Há inúmeros fatores que podem causar a
              erosão dentária e dentre eles está o vômito que é o retorno
              involuntário do ácido gástrico.
              {"\n"}É importante que após vomitar, a gestante não escove os
              dentes de imediato para evitar a erosão. A recomendação é que se
              espere de 10 a 15 minutos até que a boca diminua esse ácido para
              que, então, faça a escovação adequada. {"\n"}Existem três
              possibilidades de lavagem após o vômito: {"\n"}- Lavar com água
              gelada; {"\n"}- Lavar com substância fluoretada;{"\n"}- Fazer
              bochecho com uma colher de chá de bicarbonato de sódio dissolvido
              em água.
            </Text>
            <Text style={styles.textTitle}>Perda dentária</Text>
            <Text style={styles.textDesc}>
              Há uma frase popular entre a maioria das gestantes que diz “um
              dente por cada bebê”. A justificativa da perda dentária das
              gestantes pela remoção de cálcio dos dentes da mulher grávida para
              reforçar os dentinhos do bebê não tem nenhuma base científica.
              Portanto, a perda dentária durante a gestação não está relacionado
              ao fato da mulher estar grávida.
            </Text>
            <Text style={styles.textTitle}>
              O consumo de álcool e drogas durante a gestação faz mal?
            </Text>
            <Text style={styles.textDesc}>
              Tanto o fumo quanto o álcool são responsáveis por diversas
              deficiências que podem acontecer com o feto durante a gestação ou
              mesmo após o nascimento. As gestantes que são fumantes passivas
              também expõem o feto a riscos.
              {"\n"}A síndrome do alcoolismo fetal (SAF):
              {"\n"}- Déficit de crescimento;
              {"\n"}- Alterações em características faciais;
              {"\n"}- Atraso no desenvolvimento neuropsicomotor.
              {"\n"}Fumo:
              {"\n"}- Hipoxemia fetal;
              {"\n"}- Retardo de crescimento intra-uterino;
              {"\n"}- Deslocamento prematuro da placenta;
              {"\n"}- Rotura prematura das membranas ovulares.
              {"\n"}Fumar no puerpério também é prejudicial ao bebê, pois os
              produtos do tabaco passam pelo leite da mãe, além de ocorrer
              diminuição de sua produção.
            </Text>
            <Text style={styles.textTitle}>Atendimento à gestante</Text>
            <Text style={styles.textDesc}>
              O atendimento integral voltado para promoção de saúde deve abordar
              as doenças na sua origem, visando à instituição da higiene bucal
              efetiva e a adoção de hábitos dietéticos saudáveis, especialmente
              no consumo racional de açúcar, ressaltando a necessidade de se
              aproveitar este momento para melhorar a qualidade de vida da
              futura mãe, do seu filho e do seu núcleo familiar.
              {"\n"}O estado de saúde bucal apresentado durante a gravidez
              influencia na saúde geral e bucal da mãe e do bebê. A concepção da
              gestante sobre saúde bucal configura um quadro de falta de
              informação em relação aos cuidados que devem ser tomados durante a
              gravidez. Assim, há uma necessidade de uma maior conscientização
              sobre a importância de realizar o pré-natal odontológico (PNO)
              corretamente, os benefícios que este pode trazer, tanto para a mãe
              quanto para o filho e quais são os riscos que os problemas
              dentários podem trazer para a gestação.
              {"\n"}Com isso, é importante se realizar ações voltadas para a
              conscientização sobre a importância do pré-natal odontológico e os
              seus benefícios que este pode trazer para a saúde da mãe e do
              bebê.{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
