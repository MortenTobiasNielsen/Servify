import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as Standards from "../../constants/Standards";
import * as Responsive from "../../constants/Responsive";

const DefaultAddButton = () => {
  const buttonTitle = "Add";

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={buttonTitle}
      activeOpacity={0.6}
      onPress={() => {}}
      testID={"DefaultButton - " + buttonTitle}
    >
      <View style={styles.circle}>
        <Text
          style={{
            color: "white",
            fontSize: Standards.FontSize.medium,
            alignSelf: "center",
          }}
        >
          -
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const number = 3;

const styles = StyleSheet.create({
  circle: {
    width: Responsive.getNormalizedHeightFromPercent(number),
    height: Responsive.getNormalizedHeightFromPercent(number),
    backgroundColor: "green",
    borderRadius: Responsive.getNormalizedHeightFromPercent(number * 0.5),
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  horizontal: {
    width: Responsive.getNormalizedHeightFromPercent(2.0),
    height: Responsive.getNormalizedHeightFromPercent(0.2),
    backgroundColor: "white",
    borderRadius: Responsive.getNormalizedHeightFromPercent(1.5),
  },
  vertical: {
    width: Responsive.getNormalizedHeightFromPercent(0.2),
    height: Responsive.getNormalizedHeightFromPercent(2.0),
    backgroundColor: "white",
    borderRadius: Responsive.getNormalizedHeightFromPercent(1.5),
  },
});

export default DefaultAddButton;

// return (
//     <TouchableOpacity
//       accessibilityRole="button"
//       accessibilityLabel={buttonTitle}
//       activeOpacity={0.6}
//       onPress={() => {}}
//       testID={"DefaultButton - " + buttonTitle}
//     >
//       <View>
//         <Ionicons
//           name={"add-circle"}
//           size={Standards.FontSize.large}
//           color="green"
//         />
//       </View>
//     </TouchableOpacity>
//   );
