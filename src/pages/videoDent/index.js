//import liraries
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { WebView } from "react-native-webview";

const VideoDent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contVideo}>
        {/*         <Image
          source={require("../../assets/video.png")}
          style={styles.imgVideo}
        /> */}
        <WebView
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/AofOpJsghfc`,
          }}
        />
      </View>
      <View style={styles.contDesc}>
        <View style={styles.viewText}>
          <Text style={styles.textTitle}>Como seria a escova ideal?</Text>
          <Text style={styles.textDesc}>
            Existem vários tipos de escovas dentais no mercado, desenvolvidas
            pelos fabricantes. A escolha da escova é uma etapa muito importante
            para o resultado de uma boa higiene oral. Desse modo, deve-se
            observar pelo menos 3 características principais: a cabeça, as
            cerdas e o cabo.{"\n"}
            {"\n"}A cabeça da escova deve ser pequena, com cerdas macias e tufos
            da mesma altura. Além disso, o cabo deve ser liso e do tamanho de
            acordo com a sua mão, para não comprometer a habilidade funcional
            durante a escovação.
            {"\n"}
            {"\n"}Utilize protetores de cerdas, seque-a após o uso e armazene a
            sua escova em um lugar arejado. A troca de escovas deve ser
            realizada a cada 3 meses, após algum resfriado ou quando as cerdas
            estiverem deformadas.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default VideoDent;

<iframe width="1904" height="832" src="https://www.youtube.com/embed/AofOpJsghfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>