import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles.js";
const global_style = styles().global;
import { RFPercentage as RF } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
/*
props : 
* formProperties [object] 
  - keys : placeholder, refName, type
* style [object stylesheet]
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
                style={props.inputStyle}
                placeholder={data.placeholder}
                keyboardType={data.type ? data.type : 'default'}

              />
            )
          })
        }
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Forms;
