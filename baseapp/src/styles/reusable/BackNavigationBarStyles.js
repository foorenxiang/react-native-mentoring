import { StyleSheet } from "react-native";
import { container } from "../ReusableStyles";

export default StyleSheet.create({
  container: {
    ...container,
    height: 40,
    width: "100%",
    backgroundColor: "red",
    alignItems: "flex-start",
    paddingHorizontal: 0,
  },
  pressable: {},
  text: { fontSize: 35 },
});
