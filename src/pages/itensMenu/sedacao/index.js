import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

export default function Sedacao() {
  return (
    <View>
      <Text style={styles.textTitle}>Sedação</Text>
      <Text style={styles.textDesc}>
        Os benzodiazepínicos, grupo mais usual para sedação mínima/consciente em
        consultórios odontológicos, são, de forma geral, incluídos na categoria
        D de risco fetal, portanto, contraindicados durante a gravidez.{"\n"}
        Sugestão clínica: Casos em que a gestante precise de sedação, o
        cirurgião-dentista pode explorar o efeito colateral de sonolência dos
        anti-histamínicos de primeira geração como o dimenidrato.{"\n"}
        {"\n"}DIMENIDRATO - (ex.: DRAMIN®)
        {"\n"}CATEGORIA B{"\n"}- Apresentação: comprimido de 100mg.{"\n"} 
        - Posologia:{"\n"}
        Paciente pouco ansiosa: um comprimido de 100 mg 1 hora antes do
        procedimento.{"\n"}
        Paciente muito ansiosa: um comprimido de 100mg na noite anterior + um
        comprimido de 100 mg 1 hora antes do procedimento.{"\n"}{"\n"}- Indicações
        gerais:{"\n"}Náuseas e vômitos da gravidez;{"\n"}Náuseas, vômitos e
        tonturas causados pela doença do movimento – cinetose;{"\n"}Náuseas e
        vômitos pós-tratamentos radioterápicos e em pré e pós-operatórios,
        incluindo vômitos pós-cirurgias do trato gastrintestinal.{"\n"}No
        controle profilático e na terapêutica da crise aguda dos transtornos da
        função vestibular e ou vertiginosos, de origem central ou periférica,
        incluindo labirintites{"\n"}{"\n"}- Contraindicação:{"\n"}Hipersensibilidade
        conhecida aos componentes da fórmula.{"\n"}O dimenidrato é
        contraindicado para pacientes porfíricos.{"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    contHeader:{
        width: '100%',
        height: '30%',
        backgroundColor: "#79BD9A",
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "flex-end"
    },
    contTextTitle:{
        flexDirection:"column",
    },
    title:{
        color: "#fff",
        fontWeight:"bold",
        fontSize:30,
        marginLeft:30,
    },
    descTitle:{
        color: "#fff",
        fontSize:12,
        marginBottom: 35,
        marginLeft:30,
    },
    icon:{
        width: 80,
        height: 80,
        alignSelf:'center',
        right: 30,
        top:10
      },
    contDesc:{
        marginTop:-25,
        width: '100%',
        height: '85%',
        backgroundColor:"#fff",
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    viewText:{
        width: '85%',
        height: '90%',
        marginTop: 25,
    },
    textTitle:{
        fontWeight:"bold",
        fontSize:20,
        color: "#3B8686",
        marginVertical:10,
    },
    textDesc:{
        fontWeight:"500",
        fontSize:12,
        color: "#3B8686",
        textAlign:'justify',
    },
    menuScroll:{
        backgroundColor: 'rgba(121, 189, 154, 0.3)',
        borderRadius: 30,
        width: '100%',
        height: altura/20,
        alignItems:'center',
        justifyContent: 'center',
    },
    itemMenu:{
        backgroundColor: '#fff',
        borderRadius: 30,
        width: largura / 3,
        height: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal: 5,
    },
    textMenu:{
        color: '#3B8686',
        fontWeight:'bold',

    },
    imgTab:{
        width: '100%',
        height: altura/3.2,
        alignSelf:'center',
        resizeMode: 'stretch',
    }
})