import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import pressedStyleBuilder from "../../styles/reusable/pressedStyleBuilder";
import styles from "../../styles/LoginStyles";

const LoginScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Ecommerce{"\n"}Store</Text>
        <TextInput
          placeholder="Email address"
          placeholderTextColor={styles.placeholderTextColor.color}
          onChangeText={setEmailAddress}
          keyboardType="email-address"
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
        <Pressable
          style={({ pressed }) =>
            pressedStyleBuilder(pressed, styles.forgotPasswordButtonPressable)
          }
        >
          <Text style={styles.forgotPasswordButton}>Forgot Password?</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressedStyleBuilder(pressed, styles.buttonPressable)
          }
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </Pressable>

        <Pressable style={({ pressed }) => pressedStyleBuilder(pressed)}>
          <Text style={styles.signUpButton}>New Here? Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable style={({ pressed }) => pressedStyleBuilder(pressed)}>
          <Text style={styles.skipLoginButton}>SKIP LOGIN</Text>
        </Pressable>
      </View>
    </>
  );
};

export default LoginScreen;
