import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import * as Standards from "../../constants/Standards";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const DefaultButton: React.FC<ButtonProps> = (props) => {
  const buttonTitle = props.children!.toLocaleString();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={buttonTitle}
      activeOpacity={0.6}
      onPress={props.onPress}
      testID={"DefaultButton - " + buttonTitle}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Standards.Colors.primary,
    paddingVertical: Standards.Padding.small,
    paddingHorizontal: Standards.Padding.medium,
    borderRadius: Standards.BorderRadius.medium,
  },
  buttonText: {
    color: Standards.Colors.buttonText,
    fontFamily: Standards.Fonts.openSans,
    fontSize: Standards.FontSize.medium,
  },
});

export default DefaultButton;
