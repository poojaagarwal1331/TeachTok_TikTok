import { TouchableOpacity } from "react-native";
import { TouchableOpacityWrapperProps } from "../types/TouchableOpacityWrapperProps";
import React from "react";
import styles from "../styles/FollowingListItemStyles";

const TouchableOpacityWrapper = ({ onPress, children }: TouchableOpacityWrapperProps) => {
  return (
    <TouchableOpacity activeOpacity={1.0} onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableOpacityWrapper;
