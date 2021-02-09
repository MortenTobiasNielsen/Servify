import React from "react";
import { View } from "react-native";

import { ChooseServiceProviderProps } from "../../navigation/NotAuthNavigator";
import DefaultButton from "../../components/UI/DefaultButton";

const ChooseServiceProvider = ({ navigation }: ChooseServiceProviderProps) => {
  return (
    <View testID="ChooseServiceProvider">
      <DefaultButton onPress={() => navigation.navigate("Udbyder Detaljer")}>
        Vælg Udbyder
      </DefaultButton>
    </View>
  );
};

export default ChooseServiceProvider;
