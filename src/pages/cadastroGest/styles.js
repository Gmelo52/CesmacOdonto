import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
    boxLogo:{
        flex:.4,
        justifyContent: 'center',
        alignItems:"center"
    },
    imgLogo:{
        width:170,
        height:150,
    },
    boxLogin:{
        justifyContent:"flex-end",
        flex:.45,
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

    contBtn:{
        flex:1,
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
        backgroundColor:"#0B486B"
    }
});
export default styles;