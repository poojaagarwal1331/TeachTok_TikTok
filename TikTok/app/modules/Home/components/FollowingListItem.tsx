import React, { useState } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAppDispatch } from '../../../hooks';
import { updateRatings } from '../../../redux/Home/HomeSlice';
import { FollowingData } from '../../../redux/Home/types';
import { Colors } from '../../../utils';
import styles from '../styles/FollowingListItemStyles';
import ActionItemContainer from './ActionItemContainer';
import DescriptionView from './DescriptionView';
import Playlist from './Playlist';
import RatingView from './RatingView';
import TouchableOpacityWrapper from './TouchableWrapper';

const FollowingListItem = ({ item }: { item: FollowingData }) => {
  const [isAnswerShown, setAnswerShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacityWrapper onPress={() => setAnswerShown(!isAnswerShown)}>
      <LinearGradient
        style={styles.gradientContainer}
        locations={[0, 1]}
        colors={[Colors.backgroundGradientOne, Colors.backgroundGradientTwo]}
        useAngle={true}
        angle={180}
      >
        <View style={styles.mainContent}>
          <Text style={styles.text}>{item?.flashcard_front}</Text>
          <View>
            {isAnswerShown && (
              <View style={styles.answerContainerStyle}>
                <View style={styles.lineStyle} />
                <Text style={styles.answerHeadingStyle}>
                  Answer
                </Text>
                <Text style={styles.answerStyle} numberOfLines={10}>
                  {item?.flashcard_back}
                </Text>
                <RatingView rating={item?.rating} onPress={(rating: number) => dispatch(updateRatings({ id: item?.id, rating }))} />
              </View>
            )}
          </View>
        </View>
        <View style={styles.actionContainer}>
          <ActionItemContainer
            isFollowingScreen
            onFlipPress={() => setAnswerShown(!isAnswerShown)}
          />
        </View>
        <View style={styles.bottomSubContainerStyle}>
          <DescriptionView title={item?.user?.name} description={item?.description} isFollowingScreen />
          <Playlist title={item?.playlist ?? ''} />
        </View>
      </LinearGradient>
    </TouchableOpacityWrapper>
  );
};

export default FollowingListItem;
