import React from "react";
import { View } from "react-native";

import DefaultButton from "../components/UI/DefaultButton";
import DefaultTitle from "../components/UI/DefaultTitle";

const StartScreen = () => {
  return (
    <View>
      <DefaultTitle>Vil du</DefaultTitle>
      <DefaultButton onPress={() => {}}>Finde en service</DefaultButton>
      <DefaultButton onPress={() => {}}>Udbyde en service</DefaultButton>
      <DefaultButton onPress={() => {}}>Log ind</DefaultButton>
      <DefaultButton onPress={() => {}}>Opret bruger</DefaultButton>
    </View>
  );
};

export default StartScreen;
