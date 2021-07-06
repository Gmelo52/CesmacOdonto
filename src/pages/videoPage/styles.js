import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    contVideo:{
        width: '100%',
        height: '40%',
        backgroundColor:"red",
    },
    imgVideo:{
        width:'100%',
        height: '100%'
    },
    contDesc:{
        marginTop:-25,
        width: '100%',
        height: '65%',
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