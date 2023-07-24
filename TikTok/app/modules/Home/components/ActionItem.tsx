import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ActionItemProps } from '../types/ActionItemsProps';
import styles from '../styles/ActionItemStyles';

const ActionItem = ({ onPress, icon, containerStyle }: ActionItemProps) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image source={icon} style={styles.actionImageStyle} />
    </TouchableOpacity>
  );
};

export default ActionItem;
