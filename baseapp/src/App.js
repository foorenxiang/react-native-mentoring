// eslint-disable-next-line no-undef
if (__DEV__) {
  import("../ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}
import Reactotron from "reactotron-react-native";
import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { registerRootComponent } from "expo";
import store from "./utils/redux/store";
import RegistrationScreen from "./screens/Registration";
import LoginScreen from "./screens/Login";

const App = () => (
  <>
    {/* eslint-disable-next-line no-undef */}
    {__DEV__ && Reactotron.log("hello rendering world")}
    <Provider store={store}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="default"
          showHideTransition="fade"
          hidden={false}
        />
        {/* <LoginScreen /> */}
        <RegistrationScreen />
      </View>
    </Provider>
  </>
);

registerRootComponent(App);
