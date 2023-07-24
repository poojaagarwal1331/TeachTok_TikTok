import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../../constants';
import styles from '../styles/DescriptionViewStyles';
import { DescriptionViewProps } from '../types/DescriptionViewProps';

const DescriptionView = ({ title, description, isFollowingScreen }: DescriptionViewProps) => {
  const refinedDescription = typeof description === 'string' ? description.replace(Strings.topic, '') : '';

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>
        {title}
      </Text>
      <Text style={styles.descriptionStyle}>
        {isFollowingScreen ? description : refinedDescription}
      </Text>
    </View>
  );
};

export default DescriptionView;
