import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icons from '../../../assets';
import styles from '../styles/ForYouListItemStyles';
import ActionItemContainer from './ActionItemContainer';
import DescriptionView from './DescriptionView';
import Playlist from './Playlist';
import { Colors } from '../../../utils';
import { ForYouListItemProps } from '../types/ForYouListItemProps';

const ForYouListItem = ({ item }: ForYouListItemProps) => {
  const correctAnswer = item?.revealAnswer?.correct_options?.[0]?.id;
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const checkForCorrectAnswer = (id?: string) => {
    setSelectedOption(id);
  };

  const setBackgroundColor = (id?: string) => {
    if (selectedOption === correctAnswer && id === correctAnswer) {
      return Colors.correctAnswerBoxColor;
    } else if (selectedOption === id) {
      return Colors.wrongAnswerBoxColor;
    } else if (selectedOption && id === correctAnswer) {
      return Colors.correctAnswerBoxColor;
    } else {
      return Colors.answerBoxColor;
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <FastImage
        style={styles.imageBackground}
        source={{
          uri: item?.image,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.cover}
      >
        <View style={styles.questionContainerStyle}>
          <View style={styles.questionSubContainer} >
            <View style={styles.transparentContainerStyle}>
              <Text style={styles.text}>{item?.question}</Text>
            </View>
            <View style={styles.optionsContainer}>
              {item?.options?.map((option) => (
                <TouchableOpacity
                  activeOpacity={1.0}
                  style={[styles.option, { backgroundColor: setBackgroundColor(option?.id ?? '') }]}
                  key={option?.id}
                  disabled={selectedOption != undefined}
                  onPress={() => {
                    checkForCorrectAnswer(option?.id);
                  }}
                >
                  <>
                    {selectedOption === correctAnswer && option?.id === correctAnswer && (
                      <FastImage
                        style={[styles.gifStyle, { transform: [{ scaleX: -1 }] }]}
                        source={Icons.correctAnswerGif} // Assuming Icons.correctAnswerGif is the correct path for the GIF
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    )}

                    {selectedOption && option?.id === selectedOption && option?.id !== correctAnswer && (
                      <FastImage
                        source={Icons.wrongAnswerGif}
                        style={[
                          styles.gifStyle,
                          { transform: [{ scaleY: -1 }, { scaleX: -1 }] },
                        ]}
                        resizeMode={FastImage.resizeMode.cover}
                      />
                    )}
                  </>
                  <Text style={styles.optionText}>{option?.answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.actionContainer}>
            <ActionItemContainer isFollowingScreen={false} />
          </View>
        </View>
        <View style={styles.bottomContainerStyle}>
          <DescriptionView title={item?.user?.name} description={item?.description} />
          <Playlist title={item?.playlist} />
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

export default ForYouListItem;
