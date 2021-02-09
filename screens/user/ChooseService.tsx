import React from "react";
import { View } from "react-native";

import { ChooseServiceProps } from "../../navigation/NotAuthNavigator";
import DefaultButton from "../../components/UI/DefaultButton";

const ChooseService = ({ navigation }: ChooseServiceProps) => {
  return (
    <View testID="ChooseService">
      <DefaultButton onPress={() => navigation.navigate("Service Detaljer")}>
        Vælg Service
      </DefaultButton>
    </View>
  );
};

export default ChooseService;
