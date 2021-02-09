import React from "react";
import { View } from "react-native";

import DefaultButton from "../../components/UI/DefaultButton";
import { ServiceToProvideProps } from "../../navigation/NotAuthNavigator";

const ServicePriceDetails = ({ navigation }: ServiceToProvideProps) => {
  return (
    <View testID="ServicePriceDetails">
      <DefaultButton onPress={() => {}}>Tilføj</DefaultButton>
      <DefaultButton onPress={() => {}}>Gem</DefaultButton>
    </View>
  );
};

export default ServicePriceDetails;
