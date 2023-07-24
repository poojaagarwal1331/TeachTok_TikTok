import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icons from '../../../assets';
import { Strings } from '../../../constants';
import styles from '../styles/PlaylistStyles';
import { PlaylistTypes } from '../types/PlaylistTypes';

const Playlist = ({ title }: PlaylistTypes) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.playlistContainerStyle}>
        <Image source={Icons.playlistIcon} style={styles.playlistIcon} />
        <Text style={styles.text}>
          {`${Strings.playlist} `}
          <Text style={styles.dot}>•</Text>
        </Text>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image source={Icons.rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );
};

export default Playlist;