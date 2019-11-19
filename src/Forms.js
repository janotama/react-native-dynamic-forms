import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles.js";
const global_style = styles().global;
import { RFPercentage as RF } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
/*
props : 
* formProperties [object] 
  - keys : placeholder, refName

*/

const Forms = (props) => {
  return (
    <KeyboardAwareScrollView>
      <View style={global_style.container}>
        {
          props.formProperties.map((data) => {
            let refName = data.ref
            return (
              <TextInput
                key={data.placeholder}
                ref={ref => { props.context[refName] = ref }}
                style={global_style.inputForm}
                placeholder={data.placeholder}
              />
            )
          })
        }
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Forms;
