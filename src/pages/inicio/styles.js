import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
    boxLogo:{
        flex:.95,
        justifyContent: 'center',
        alignItems:"center"
    },
    imgLogo:{
        width:250,
        height:230,
        marginBottom:100,
    },
    imgSeta:{
        width:20,
        height:10,
        alignSelf:"center",
    },
    boxBtn:{
        flex:.12,
        flexDirection:'column',
    },
    contBtn:{
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