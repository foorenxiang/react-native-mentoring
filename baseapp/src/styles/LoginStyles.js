import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: 400,
  },
  titleText: {
    color: "blue",
    fontSize: 30,
    paddingVertical: 5,
    textAlign: "center",
  },
  inputField: {
    height: 45,
    marginVertical: 12,
    borderBottomWidth: 1,
    width: "100%",
    padding: 10,
    fontSize: 20,
  },
  placeholderTextColor: { color: "#777", textAlign: "center" },
  forgotPasswordButton: {
    fontSize: 15,
  },
  forgotPasswordButtonPressable: { alignSelf: "flex-end", height: 40 },
  forgotPasswordButtonText: {
    paddingVertical: 5,
    color: "red",
    fontSize: 30,
    width: "100%",
  },
  signInButtonPressable: {
    paddingVertical: 5,
    width: "100%",
    backgroundColor: "#408BBA",
    alignItems: "center",
  },
  signInButtonText: { paddingVertical: 3, color: "#FFF", fontSize: 20 },
  signUpButton: { paddingVertical: 5, color: "blue", fontSize: 20 },
  skipLoginButton: { paddingVertical: 5, color: "red", fontSize: 15 },
});
