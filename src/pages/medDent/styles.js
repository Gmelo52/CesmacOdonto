import { StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

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
        flex: 1,
        flexDirection:"column",
    },
    title:{
        color: "#fff",
        fontWeight:"bold",
        fontSize:24,
        marginLeft:30,
    },
    descTitle:{
        color: "#fff",
        fontSize:10,
        marginBottom: 35,
        marginLeft:30,
    },
    icon:{
        width: 70,
        height: 70,
        alignSelf:'center',
        top:10,
        margin:20,
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
export default styles;