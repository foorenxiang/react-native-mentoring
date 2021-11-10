import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "../../../styles/reusable/BackNavigationBarStyles";
import BackButtonImg from "../../../../assets/backbutton.svg";

const BackNavigationBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}>
        <BackButtonImg width={35} height={35} />
      </Pressable>
    </View>
  );
};

export default BackNavigationBar;
