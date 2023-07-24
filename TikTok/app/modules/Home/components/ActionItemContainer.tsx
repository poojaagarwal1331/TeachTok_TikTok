import React from 'react';
import { View } from 'react-native';
import Icons from '../../../assets';
import { ActionButtonsProps } from '../types/ActionItemsProps';
import ActionItem from './ActionItem';
import styles from '../styles/ActionItemStyles';

const ActionItemContainer = ({
  onCommentPress,
  onBookmarkPress,
  onSharePress,
  isFollowingScreen,
  onFlipPress,
  onHeartPress,
  onProfilePress
}: ActionButtonsProps) => {
  return (
    <View style={styles.containerStyle}>
      <ActionItem onPress={onProfilePress} icon={isFollowingScreen ? Icons.profileWithoutPlus : Icons.profileIcon} containerStyle={styles.profileActionButtonStyle} />
      <ActionItem onPress={onHeartPress} icon={Icons.heartIcon} containerStyle={styles.actionButtonStyle} />
      <ActionItem onPress={onCommentPress} icon={Icons.commentIcon} containerStyle={styles.actionButtonStyle} />
      <ActionItem onPress={onBookmarkPress} icon={Icons.bookmarkIcon} containerStyle={styles.actionButtonStyle} />
      <ActionItem onPress={onSharePress} icon={Icons.shareIcon} containerStyle={styles.actionButtonStyle} />
      {isFollowingScreen && <ActionItem onPress={onFlipPress} icon={Icons.flipIcon} containerStyle={styles.flipActionButtonStyle} />}
    </View>
  );
};

export default ActionItemContainer;
