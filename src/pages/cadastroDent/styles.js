import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  boxLogo: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  imgLogo: {
    width: 170,
    height: 150,
  },
  boxLogin: {
    justifyContent: "flex-end",
    flex: 0.5,
  },
  boxInput: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  boxInputCro: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 15,
    alignItems:'flex-end',
  },
  cro: {
    flex: 0.85,
    marginRight: 10,
  },
  uf: {
    flex: 0.15,
    borderWidth: 1,
    borderColor: "#79BD9A",
    borderRadius:10,
    height: 40,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#79BD9A",
    borderRadius: 10,
    height: 40,
  },
  inputCro: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "#79BD9A",
    borderRadius: 10,
    height: 40,
  },
  botoesLogin: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  social: {
    flexDirection: "row",
  },
  btnSocial: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
  },
  btnLogin: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#79BD9A",
    padding: 10,
    width: 160,
    height: 65,
  },
  boxCadastro: {
    flex: 0.2,
  },

  contBtn: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnGestante: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    width: 160,
    height: 65,
    marginHorizontal: 5,
    marginBottom: 15,
    backgroundColor: "#79BD9A",
  },
  btnDentista: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    width: 160,
    height: 65,
    marginHorizontal: 5,
    marginBottom: 15,
    backgroundColor: "#79BD9A",
  },
});
export default styles;
