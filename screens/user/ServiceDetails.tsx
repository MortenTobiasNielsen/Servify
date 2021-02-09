import React from "react";
import { View } from "react-native";

import { ServiceDetailsProps } from "../../navigation/NotAuthNavigator";
import DefaultButton from "../../components/UI/DefaultButton";

const ServiceDetails = ({ navigation }: ServiceDetailsProps) => {
  return (
    <View testID="ServiceDetails">
      <DefaultButton
        onPress={() => navigation.navigate("Vælg Service Udbyder")}
      >
        Estimer pris
      </DefaultButton>
    </View>
  );
};

export default ServiceDetails;
