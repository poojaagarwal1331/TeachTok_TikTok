import React from 'react';
import { View, Text, Image } from 'react-native';
import Icons from '../../../assets';
import styles from '../styles/TimerViewStyles';

const TimerView = ({ elapsedTime }: { elapsedTime: number }) => {
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.timerContainer}>
      <Image source={Icons.timerIcon} style={styles.timerIcon} />
      <Text style={styles.timerText}>{formatTime(elapsedTime)}</Text>
    </View>
  );
};

export default TimerView;
