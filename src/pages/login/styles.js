import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',
    },
    boxLogin:{
        paddingBottom:20
    },
    boxInput:{
        marginHorizontal: 20,
        marginTop:20,
    },
    input:{
        marginTop: 10,
        padding:10,
        borderWidth:1,
        borderColor:"#0B486B",
        borderRadius:10,
        height:40,
    },
    botoesLogin:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20,
        marginHorizontal:20,
    },
    social:{
        flexDirection:"row",
    },
    btnSocial:{
        width:35,
        height:35,
        marginHorizontal:5,
    },
    btnLogin:{
        backgroundColor:"#fff",
        justifyContent: 'center',
        alignItems:"center",
        borderWidth:1,
        borderRadius:10,
        borderColor:"#0B486B",
        padding:10,
        width:160,
        height:65,
    },
    boxCadastro:{
        flex:.20,
    },
    textCad:{
        flex:.8,
        marginHorizontal:20,
        alignItems:"flex-end",
        justifyContent: "space-evenly",
    },
    contBtn:{
        flex:.65,
        marginHorizontal: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-between',
    },
    btnGestante:{
        justifyContent: 'center',
        alignItems:"center",
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:10,
        width:160,
        height:65,
        marginHorizontal: 5,
        marginBottom: 15,
        backgroundColor:"#0B486B"
    },
    btnDentista:{
        justifyContent: 'center',
        alignItems:"center",
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:10,
        width:160,
        height:65,
        marginHorizontal: 5,
        marginBottom: 15,
        backgroundColor:"#79BD9A"
    }
});
export default styles;