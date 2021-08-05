import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor:'#fff'
  },
  boxLogo: {
    /* backgroundColor:"red", */
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  boxBtn: {
    width: largura - 20,
    alignItems: "flex-start",
    justifyContent: 'center',
    alignSelf:"center",
  },
  viewBoasVindas: {
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3B8686",
    marginVertical: 15,
  },
  viewLinha:{
    flexDirection:'row',
  },
  viewBtns: {
    width:'100%',
    flexDirection:'column'
  },
  btn: {
    width: largura/2.25,
    height: altura/5.3,
    margin:5,
  },
  imgBtn:{
      width: '100%',
      height: '100%',
  },
  icon:{
    width: 50,
    height: 50,
    alignSelf:'flex-end',
    margin:5,
    marginBottom:15,
  },
  viewTextBtn:{
    
  },
  titleBtn:{
    fontSize:16,
    fontWeight:"bold",
    color:'#3B8686',
    marginHorizontal: 5,
  },
  descBtn:{
    fontSize:10,
    color:'#3B8686',
    marginHorizontal: 5,
  },
  btnVideo: {
    width: "100%",
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnVideo:{
    /* backgroundColor:"blue", */
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center", 
    width: '100%',
    height: '100%'
  },
});
export default styles;
