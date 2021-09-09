import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
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
    /* backgroundColor: "#ccc", */
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
    color: "#0B486B",
    marginVertical: 15,
  },
  viewBtns: {
    /* backgroundColor: "red", */
    width:'100%',
    flexDirection:'row'
  },
  btn: {
    width: 155,
    height: 120,
    marginRight:5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
  titleBtn:{
    fontSize:16,
    fontWeight:"bold",
    color:'#fff',
    marginHorizontal: 5,
  },
  descBtn:{
    fontSize:10,
    color:'#fff',
    marginHorizontal: 5,
  },
  btnVideo: {
    width: "100%",
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
