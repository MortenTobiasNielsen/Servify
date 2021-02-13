import React, { useState } from "react";
import { TouchableOpacity, Alert, Image, StyleSheet } from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import DefaultText from "./DefaultText";
import * as Standards from "../../constants/Standards";

const DefaultChooseLogo = () => {
  const [logo, setLogo] = useState("");

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (result.status !== "granted") {
      Alert.alert(
        "Adgang nødvendig",
        "Det er ikke muligt at tilføje et billede, uden adgang til dine billeder.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const findImageHandler = async () => {
    if (!(await verifyPermissions())) {
      return;
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      quality: 0.5,
    });

    if (image.cancelled) {
      return;
    }
    setLogo(image.uri);
  };

  return (
    <TouchableOpacity
      style={styles.logoContainer}
      onPress={findImageHandler}
      testID="DefaultChooseLogo"
    >
      {!logo ? (
        <DefaultText>Tilføj Logo</DefaultText>
      ) : (
        <Image style={styles.image} source={{ uri: logo }} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    width: Standards.ProfileLogo.size,
    height: Standards.ProfileLogo.size,
    borderRadius: Standards.ProfileLogo.Radius,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Standards.Colors.buttonText,
    margin: Standards.Padding.large,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default DefaultChooseLogo;
