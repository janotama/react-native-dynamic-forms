"use strict";

import { Dimensions, StyleSheet, Platform } from "react-native";
import { RFPercentage as RF } from "react-native-responsive-fontsize";

function getWidthSize(percentage) {
  return Dimensions.get("window").width * (percentage / 100);
}

export default function styles() {
  const color = {
    purple_1: "#5249d0",
    purple_2: "#9869F7"
  };
  var global;
  if (Platform.OS === "ios") {
    global = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputForm: {
        width: getWidthSize(95),
        height: RF(6)
      }
    });
  } else {
    global = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputForm: {
        width: getWidthSize(95),
        height: RF(6)
      }
    });
  }

  const data = {
    global: global
  };

  return data;
}
