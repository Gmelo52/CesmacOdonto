import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    contHeader:{
        width: '100%',
        height: '30%',
        backgroundColor: "#0B486B",
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
        color: "#0B486B",
        marginVertical:10,
    },
    textDesc:{
        fontWeight:"500",
        fontSize:12,
        color: "#0B486B",
        textAlign:'justify',
    },
})
export default styles;