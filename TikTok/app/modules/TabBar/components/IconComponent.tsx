import React from 'react';
import { Image } from 'react-native';
import { TabBarIconProps } from '../types/TabBarTypes';

const IconComponent = ({ source, size }: TabBarIconProps) => {
  const iconStyle = {
    width: size,
    height: size,
  };

  return <Image source={source} style={iconStyle} />;
};

export default IconComponent;
