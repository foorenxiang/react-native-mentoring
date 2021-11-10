import { StyleSheet } from "react-native";
import {
  container,
  buttonPressable,
  buttonText,
  titleText,
  inputField,
  placeholderTextColor,
  secondaryButtonText,
} from "./ReusableStyles";

export default StyleSheet.create({
  container: {
    ...container,
    height: 400,
  },
  titleText,
  inputField,
  placeholderTextColor,
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
  buttonPressable,
  buttonText,
  signUpButton: { paddingVertical: 5, color: "blue", fontSize: 20 },
  skipLoginButton: secondaryButtonText,
});
