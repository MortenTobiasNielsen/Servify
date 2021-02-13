import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import DefaultChooseLogo from "../../components/UI/DefaultChooseLogo";

const ServiceProviderProfile = () => {
  return (
    <ScrollView testID="ScrollView">
      <View style={styles.container} testID="ServiceProviderProfile">
        <View>
          <DefaultChooseLogo />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    alignItems: "center",
  },
});

export default ServiceProviderProfile;
