import React from "react";
import { View } from "react-native";

import { StartScreenProps } from "../navigation/NotAuthNavigator";
import DefaultButton from "../components/UI/DefaultButton";
import DefaultTitle from "../components/UI/DefaultTitle";

const StartScreen = ({ navigation }: StartScreenProps) => {
  return (
    <View testID="StartScreen">
      <DefaultTitle>Vil du</DefaultTitle>
      <DefaultButton onPress={() => navigation.navigate("Find Service")}>
        Finde En Service
      </DefaultButton>
      <DefaultButton onPress={() => {}}>Udbyde En Service</DefaultButton>
    </View>
  );
};

export default StartScreen;
