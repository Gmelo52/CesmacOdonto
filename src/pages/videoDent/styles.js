import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contVideo:{
        width: '100%',
        height: '40%',
    },
    imgVideo:{
        width:'100%',
        height: '100%'
    },
    contDesc:{
        width: '100%',
        height: '60%',
        backgroundColor:"#fff",
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
})
export default styles;