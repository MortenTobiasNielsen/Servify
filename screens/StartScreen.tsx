import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StartScreenProps } from "../navigation/NotAuthNavigator";
import DefaultButton from "../components/UI/DefaultButton";
import DefaultTitle from "../components/UI/DefaultTitle";

const StartScreen = ({ navigation }: StartScreenProps) => {
  return (
    <View testID="StartScreen">
      <DefaultTitle>Vil du</DefaultTitle>
      <DefaultButton onPress={() => navigation.navigate("ChooseService")}>
        Finde en service
      </DefaultButton>
      <DefaultButton onPress={() => {}}>Udbyde en service</DefaultButton>
      <DefaultButton onPress={() => {}}>Log ind</DefaultButton>
      <DefaultButton onPress={() => {}}>Opret bruger</DefaultButton>
    </View>
  );
};

export default StartScreen;
