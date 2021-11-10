import React, { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import BackNavigationBar from "../../components/reusable/BackNavigation";
import pressedStyleBuilder from "../../styles/reusable/pressedStyleBuilder";
import styles from "../../styles/RegistrationStyles";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <View style={styles.container}>
      <BackNavigationBar />
      <Text style={styles.titleText}>Ecommerce{"\n"}Store</Text>
      <TextInput
        placeholder="Full Name"
        placeholderTextColor={styles.placeholderTextColor.color}
        onChangeText={setName}
        value={name}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Email Address"
        placeholderTextColor={styles.placeholderTextColor.color}
        onChangeText={setEmailAddress}
        value={emailAddress}
        style={styles.inputField}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor={styles.placeholderTextColor.color}
        onChangeText={setPassword}
        value={password}
        style={styles.inputField}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Confirm Password"
        placeholderTextColor={styles.placeholderTextColor.color}
        onChangeText={setPasswordConfirmation}
        value={passwordConfirmation}
        style={styles.inputField}
      />
      <Pressable
        style={({ pressed }) =>
          pressedStyleBuilder(pressed, styles.buttonPressable)
        }
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </Pressable>
      <Pressable style={({ pressed }) => pressedStyleBuilder(pressed)}>
        <Text style={styles.secondaryButtonText}>
          Already have account? Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default RegistrationScreen;
