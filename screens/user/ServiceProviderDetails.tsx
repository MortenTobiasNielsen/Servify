import React from "react";
import { View } from "react-native";

import DefaultText from "../../components/UI/DefaultText";
import DefaultButton from "../../components/UI/DefaultButton";
import { ServiceProviderDetailProps } from "../../navigation/NotAuthNavigator";

const ServiceProviderDetails = ({ navigation }: ServiceProviderDetailProps) => {
  return (
    <View testID="ServiceProviderDetails">
      <DefaultText>Log ind for at kontakte udbyderen:</DefaultText>
      <DefaultButton onPress={() => navigation.navigate("Log Ind")}>
        Log Ind
      </DefaultButton>
      <DefaultText>Eller</DefaultText>
      <DefaultButton onPress={() => navigation.navigate("Opret Bruger")}>
        Opret Bruger
      </DefaultButton>
    </View>
  );
};

export default ServiceProviderDetails;
